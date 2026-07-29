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

interface KeyboardProps {
  form: FormDocument;
}

export default function Keyboard({ form }: KeyboardProps) {
  const { updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>3.2 Keyboard & Touchpad Check</Text>
      <QuestionField
        question="1. All keys working and intact?"
        value={form.content.keyboard.keys.value}
        remark={form.content.keyboard.keys.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.KEYBOARD_KEYS_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.KEYBOARD_KEYS_REMARK, remark)
        }
      />
      <QuestionField
        question="2. Keyboard Backlit Working?"
        value={form.content.keyboard.backlit.value}
        remark={form.content.keyboard.backlit.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.KEYBOARD_BACKLIT_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.KEYBOARD_BACKLIT_REMARK, remark)
        }
      />
      <QuestionField
        question="3. Touchpad Working?"
        value={form.content.keyboard.touchpad.value}
        remark={form.content.keyboard.touchpad.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.KEYBOARD_TOUCHPAD_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.KEYBOARD_TOUCHPAD_REMARK, remark)
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
