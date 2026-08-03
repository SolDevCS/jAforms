import { supabase } from "../lib/supabase";
import { mapLaptopToRow } from "../mappers/laptopMapper";

export async function createLaptop(form: any) {
    const row = mapLaptopToRow(form);
    
    console.log(row)

  return await supabase.from("laptop_forms").insert(row).select().single();
}
