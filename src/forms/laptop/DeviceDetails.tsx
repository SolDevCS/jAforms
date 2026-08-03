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

interface DeviceDetailsProps {
  form: FormDocument;
}

export default function DeviceDetails({ form }: DeviceDetailsProps) {
  const { updateTitle, updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>2. Device Details</Text>

      <Row>
        <Column flex={2}>
          <EditableOptionField
            title="Brand / Model:"
            value={form.content.brand_model}
            options={[
              "Acer",
              "Asus",
              "Dell",
              "HP",
              "Lenovo",
              "MSI",
              "Razer",
              "Samsung",
              "Toshiba",
            ]}
            onChange={(value) =>
              updateField(form.id, LaptopFields.BRAND, value)
            }
          />
        </Column>
        <Column flex={4}>
          <TextField
            title=" "
            value={form.content.hostname}
            onChange={(value) => {
              updateField(form.id, LaptopFields.MODEL, value);
            }}
          />
        </Column>
      </Row>

      <TextField
        title="Computer Name:"
        value={form.content.hostname}
        onChange={(value) => {
          updateField(form.id, LaptopFields.HOSTNAME, value);
          updateTitle(form.id, value);
        }}
      />

      <Row>
        <Column>
          <TextField
            title="Memory:"
            value={form.content.memory}
            onChange={(value) => {
              updateField(form.id, LaptopFields.MEMORY, value);
            }}
          />
        </Column>
        <Column>
          <TextField
            title="Slots:"
            value={form.content.slots}
            onChange={(value) => {
              updateField(form.id, LaptopFields.SLOTS, value);
            }}
          />
        </Column>
      </Row>
      <TextField
        title="Serial Number:"
        value={form.content.serial_number}
        onChange={(value) => {
          updateField(form.id, LaptopFields.SERIAL_NUMBER, value);
        }}
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
