import { supabase } from "@/src/lib/supabase";
import { mapLaptopToRow } from "@/src/mappers/laptopRowMapper";
import { FormDocument } from "@/src/context/FormContext";

export async function createLaptop(form: FormDocument) {
  const row = mapLaptopToRow(form);

  return await supabase.from("laptop_forms").insert(row).select().single();
}

export async function updateLaptop(form: FormDocument) {
  const row = mapLaptopToRow(form);

  return await supabase.from("laptop_forms").update(row).eq("id", form.id);
}

export async function deleteLaptop(id: string) {
  return await supabase.from("laptop_forms").delete().eq("id", id);
}

export async function getLaptop(id: string) {
  return await supabase.from("laptop_forms").select("*").eq("id", id).single();
}

export async function getLaptops() {
  return await supabase
    .from("laptop_forms")
    .select("*")
    .order("created_at", { ascending: false });
}
