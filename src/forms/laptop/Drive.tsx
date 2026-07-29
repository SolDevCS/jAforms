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

interface DriveProps {
  form: FormDocument;
}

export default function Drive({ form }: DriveProps) {
  const { updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>5. Wipeout Drive Check</Text>
      <QuestionField
        question="1. Wipe out the external Drive?"
        value={form.content.drive.wipeout.value}
        remark={form.content.drive.wipeout.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.DRIVE_WIPEOUT_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.DRIVE_WIPEOUT_REMARK, remark)
        }
      />
      <QuestionField
        question="2. Reset the unit?"
        value={form.content.drive.reset.value}
        remark={form.content.drive.reset.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.DRIVE_RESET_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.DRIVE_RESET_REMARK, remark)
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
