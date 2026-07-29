import Column from "@/src/components/Column";
import Row from "@/src/components/Row";
import { LaptopFields } from "@/src/constants/laptopFields";
import { FormDocument, useForms } from "@/src/context/FormContext";
import CheckboxField from "@/src/fields/CheckboxField";
import EditableOptionField from "@/src/fields/EditableOptionField";
import MediaField from "@/src/fields/MediaField";
import MediaGroup from "@/src/fields/MediaGroup";
import OptionField from "@/src/fields/OptionField";
import QuestionField from "@/src/fields/QuestionField";
import TextField from "@/src/fields/TextField";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface WarrantyProps {
  form: FormDocument;
}

export default function Warranty({ form }: WarrantyProps) {
  const { updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>4. Warranty Seal Check</Text>
      <QuestionField
        question="1. Warranty Seal Intact?"
        value={form.content.warranty.intact.value}
        remark={form.content.warranty.intact.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.WARRANTY_INTACT_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.WARRANTY_INTACT_REMARK, remark)
        }
      />
      <QuestionField
        question="2. Charger Warranty Seal Intact?"
        value={form.content.warranty.charger.value}
        remark={form.content.warranty.charger.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.WARRANTY_CHARGER_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.WARRANTY_CHARGER_REMARK, remark)
        }
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 8,
    textAlign: "center",
  },
});
