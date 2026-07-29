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

interface BatteryProps {
  form: FormDocument;
}

export default function Battery({ form }: BatteryProps) {
  const { updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>3.3 Battery & Charger Check</Text>
      <QuestionField
        question="1. Laptop/Battery Charging?"
        value={form.content.battery.charging.value}
        remark={form.content.battery.charging.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.BATTERY_CHARGING_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.BATTERY_CHARGING_REMARK, remark)
        }
      />
      <QuestionField
        question="2. Does Charger have physical issues?"
        value={form.content.battery.physical.value}
        remark={form.content.battery.physical.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.BATTERY_PHYSICAL_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.BATTERY_PHYSICAL_REMARK, remark)
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
