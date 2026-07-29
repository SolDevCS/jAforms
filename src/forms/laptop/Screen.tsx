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

interface ScreenProps {
  form: FormDocument;
}

export default function Screen({ form }: ScreenProps) {
  const { updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>3.1 Screen Check</Text>
      <QuestionField
        question="1. Screen Brightness Working?"
        value={form.content.screen.brightness.value}
        remark={form.content.screen.brightness.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.SCREEN_BRIGHTNESS_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.SCREEN_BRIGHTNESS_REMARK, remark)
        }
      />
      <QuestionField
        question="2. Screen Flickering?"
        value={form.content.screen.flicker.value}
        remark={form.content.screen.flicker.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.SCREEN_FLICKER_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.SCREEN_FLICKER_REMARK, remark)
        }
      />
      <QuestionField
        question="3. Has Dead Pixels? Backlight Bleed?"
        value={form.content.screen.deadPixels.value}
        remark={form.content.screen.deadPixels.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.SCREEN_DEAD_PIXELS_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.SCREEN_DEAD_PIXELS_REMARK, remark)
        }
      />
      <QuestionField
        question="4. Cracked Screen?"
        value={form.content.screen.cracked.value}
        remark={form.content.screen.cracked.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.SCREEN_CRACKED_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.SCREEN_CRACKED_REMARK, remark)
        }
      />
      <QuestionField
        question="5. Scratched/Dents Screen"
        value={form.content.screen.scratched.value}
        remark={form.content.screen.scratched.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.SCREEN_SCRATCHED_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.SCREEN_SCRATCHED_REMARK, remark)
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
