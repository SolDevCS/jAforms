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

interface ChassisProps {
  form: FormDocument;
}

export default function Chassis({ form }: ChassisProps) {
  const { updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>3.5 Chassis Check</Text>
      <QuestionField
        question="1. Has scratches or dents?"
        value={form.content.chassis.scratched.value}
        remark={form.content.chassis.scratched.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.CHASSIS_SCRATCHED_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.CHASSIS_SCRATCHED_REMARK, remark)
        }
      />
      <QuestionField
        question="2. Has misaligned ports?"
        value={form.content.chassis.misaligned.value}
        remark={form.content.chassis.misaligned.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.CHASSIS_MISALIGNED_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.CHASSIS_MISALIGNED_REMARK, remark)
        }
      />
      <QuestionField
        question="3. Bulging Chassis?"
        value={form.content.chassis.bulging.value}
        remark={form.content.chassis.bulging.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.CHASSIS_BULGING_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.CHASSIS_BULGING_REMARK, remark)
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
