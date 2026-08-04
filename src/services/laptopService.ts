import { supabase } from "@/src/lib/supabase";
import { mapLaptopToRow } from "@/src/mappers/laptopRowMapper";
import { FormDocument } from "@/src/context/FormContext";

export const LaptopService = {
  async create(form: FormDocument) {
    const row = mapLaptopToRow(form);

    return supabase.from("laptop_forms").insert(row).select().single();
  },

  async update(form: FormDocument) {
    const row = mapLaptopToRow(form);

    return supabase.from("laptop_forms").update(row).eq("id", form.id);
  },

  async delete(id: string) {
    return supabase.from("laptop_forms").delete().eq("id", id);
  },

  async get(id: string) {
    return supabase.from("laptop_forms").select("*").eq("id", id).single();
  },

  async getAll() {
    return supabase
      .from("laptop_forms")
      .select("*")
      .order("created_at", { ascending: false });
  },
};
