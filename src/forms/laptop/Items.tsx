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

interface ItemsProps {
  form: FormDocument;
}

export default function Items({ form }: ItemsProps) {
  const { updateTitle, updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>7. What&apos;s in the box</Text>

      <CheckboxField
        checked={form.content.items.laptop}
        label="Laptop"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.ITEM_LAPTOP, checked)
        }
      />

      <CheckboxField
        checked={form.content.items.laptopBag}
        label="Laptop Bag"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.ITEM_LAPTOP_BAG, checked)
        }
      />

      <CheckboxField
        checked={form.content.items.mouse}
        label="Mouse"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.ITEM_MOUSE, checked)
        }
      />

      <CheckboxField
        checked={form.content.items.originalBox}
        label="Original Box"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.ITEM_ORIGINAL_BOX, checked)
        }
      />
      <CheckboxField
        checked={form.content.items.charger}
        label="Charger"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.ITEM_CHARGER, checked)
        }
      />
      <CheckboxField
        checked={form.content.items.gettingStartedGuide}
        label="Getting Started Guide"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.ITEM_GETTING_STARTED_GUIDE, checked)
        }
      />
      <CheckboxField
        checked={form.content.items.uatChecklist}
        label="UAT Checklist"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.ITEM_UAT_CHECKLIST, checked)
        }
      />
      <CheckboxField
        checked={form.content.items.yubikey}
        label="YubiKey"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.ITEM_YUBIKEY, checked)
        }
      />
      <CheckboxField
        checked={form.content.items.rsaToken}
        label="RSA Token"
        onChange={(checked) =>
          updateField(form.id, LaptopFields.ITEM_RSA_TOKEN, checked)
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
    marginBottom: 20,
  },
});
