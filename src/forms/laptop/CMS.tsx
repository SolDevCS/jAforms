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
      <Text style={styles.title}>3.7 Camera, Mic, & Speakers Check</Text>
      <QuestionField
        question="1. Camera Working?"
        value={form.content.cms.camera.value}
        remark={form.content.cms.camera.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.CMS_CAMERA_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.CMS_CAMERA_REMARK, remark)
        }
      />
      <QuestionField
        question="2. Speakers Working?"
        value={form.content.cms.speakers.value}
        remark={form.content.cms.speakers.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.CMS_SPEAKERS_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.CMS_SPEAKERS_REMARK, remark)
        }
      />
      <QuestionField
        question="3. Microphone Working?"
        value={form.content.cms.mic.value}
        remark={form.content.cms.mic.remark}
        required
        onValueChange={(value) =>
          updateField(form.id, LaptopFields.CMS_MIC_VALUE, value)
        }
        onRemarkChange={(remark) =>
          updateField(form.id, LaptopFields.CMS_MIC_REMARK, remark)
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
