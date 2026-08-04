import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { supabase } from "../lib/supabase";
import { mapLaptopToRow } from "../mappers/laptopRowMapper";
import { mapRowToLaptop } from "../mappers/rowLaptopMapper";
import { LaptopService } from "../services/laptopService";

/* ---------- Types ---------- */

export type FormType = "laptop" | "ce" | "unboxing" | "yubikey";

export interface FormDocument<T = any> {
  id: string;
  type: FormType;
  title: string;
  createdAt: number;
  modifiedAt: number;
  content: T;
}

/* ---------- Context Type ---------- */

interface FormContextType {
  forms: FormDocument[];

  loading: boolean;
  error: string | null;

  // General form operations
  createForm: (form: FormDocument) => Promise<void>;
  updateForm: (form: FormDocument) => Promise<void>;
  deleteForm: (id: string) => Promise<void>;

  loadForms: () => Promise<void>; // Load all forms from the database, has to go elsewhere

  getForm: (id: string) => FormDocument | undefined; // Load Form into [id]
  updateField: (id: string, path: string, value: any) => void;

  // Footer Remarks Operations
  appendToArray: (id: string, path: string, value: any) => void;

  updateArrayItem: (
    id: string,
    path: string,
    index: number,
    value: any,
  ) => void;

  removeArrayItem: (id: string, path: string, index: number) => void;

  // Engr
  updateTitle: (id: string, title: string) => void;
  // assignToQA:

  // QA
  // assignToTL:

  // TL
  // exportAsFolder:

  // QA & TL
  // addComment:
  // getComment:
  // updateComment:
  // deleteComment:
}

/* ---------- Helper ---------- */

function setNestedValue(obj: any, path: string, value: any) {
  const keys = path.split(".");

  const copy = structuredClone(obj);

  let current = copy;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (
      current[key] === undefined ||
      current[key] === null ||
      typeof current[key] !== "object"
    ) {
      current[key] = {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;

  return copy;
}

function getNestedValue(obj: any, path: string) {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

/* ---------- Context ---------- */

const FormContext = createContext<FormContextType | null>(null);

/* ---------- Provider ---------- */

export function FormProvider({ children }: { children: ReactNode }) {
  const [forms, setForms] = useState<FormDocument[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createForm = async (form: FormDocument): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      setForms((prev) => [form, ...prev]);

      switch (form.type) {
        case "laptop":
          await LaptopService.create(form);
          break;
        
        // ce, yubikey, unboxing can be added here in the future
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";

      setError(message);

      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateForm = async (form: FormDocument) => {
    setForms((prev) => prev.map((f) => (f.id === form.id ? form : f)));

    switch (form.type) {
      case "laptop":
        await LaptopService.update(form);
        break;
    }
  };

  const updateTitle = (id: string, title: string) => {
    setForms((prev) =>
      prev.map((form) =>
        form.id === id
          ? {
              ...form,
              title,
              modifiedAt: Date.now(),
            }
          : form,
      ),
    );
  };

  const updateField = (id: string, path: string, value: any) => {
    setForms((prev) =>
      prev.map((form) => {
        if (form.id !== id) return form;

        return {
          ...form,
          modifiedAt: Date.now(),
          content: setNestedValue(form.content, path, value),
        };
      }),
    );
  };

  const deleteForm = async (id: string) => {
    const form = getForm(id);

    if (!form) return;

    setForms((prev) => prev.filter((f) => f.id !== id));

    switch (form.type) {
      case "laptop":
        await LaptopService.delete(id);
        break;
    }
  };

  const getForm = (id: string) => {
    return forms.find((form) => form.id === id);
  };

  const loadForms = async () => {
    const { data, error } = await LaptopService.getAll();

    if (error) {
      console.error(error);
      return;
    }

    setForms(data.map(mapRowToLaptop));
    console.log(JSON.stringify(data[0], null, 2));
    console.log(JSON.stringify(mapRowToLaptop(data[0]), null, 2));
  };

  const appendToArray = (id: string, path: string, value: any) => {
    const form = getForm(id);

    if (!form) return;

    const array = getNestedValue(form.content, path);

    updateField(id, path, [...array, value]);
  };

  const updateArrayItem = (
    id: string,
    path: string,
    index: number,
    value: any,
  ) => {
    const form = getForm(id);

    if (!form) return;

    const array = [...getNestedValue(form.content, path)];

    array[index] = value;

    updateField(id, path, array);
  };

  const removeArrayItem = (id: string, path: string, index: number) => {
    const form = getForm(id);

    if (!form) return;

    const array = [...getNestedValue(form.content, path)];

    array.splice(index, 1);

    updateField(id, path, array);
  };

  const value: FormContextType = {
    forms,
    loading,
    error,
    createForm,
    updateForm,
    updateTitle,
    updateField,
    deleteForm,
    loadForms,
    getForm,
    appendToArray,
    updateArrayItem,
    removeArrayItem,
  };

  useEffect(() => {
    void loadForms();
  }, []);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

/* ---------- Hook ---------- */

export function useForms() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useForms must be used inside FormProvider.");
  }

  return context;
}
