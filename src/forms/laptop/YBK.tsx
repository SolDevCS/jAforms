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

interface YBKProps {
  form: FormDocument;
}

export default function YBK({ form }: YBKProps) {
  const { updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>6. YubiKey/RSA Token Details</Text>
      <CheckboxField
        checked={form.content.withYubiKey}
        label="With YubiKey"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.WITH_YUBIKEY, checked)
        }
      />

      {form.content.withYubiKey && (
        <>
          <TextField
            title="YubiKey Hostname:"
            value={form.content.ybk.hostname}
            onChange={(value) =>
              updateField(form.id, LaptopFields.YBK_HOSTNAME, value)
            }
          />

          <QuestionField
            question="Warranty Seal Intact?"
            value={form.content.ybk.warranty.value}
            remark={form.content.ybk.warranty.remark}
            onValueChange={(value) =>
              updateField(form.id, LaptopFields.YBK_WARRANTY_VALUE, value)
            }
            onRemarkChange={(value) =>
              updateField(form.id, LaptopFields.YBK_WARRANTY_REMARK, value)
            }
          />
        </>
      )}
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
