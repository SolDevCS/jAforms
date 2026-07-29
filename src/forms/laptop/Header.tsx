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

interface HeaderProps {
  form: FormDocument;
}

export default function Header({ form }: HeaderProps) {
  const { updateTitle, updateField } = useForms();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Header</Text>

      <OptionField
        title="Status:"
        value={form.content.status}
        options={["Brand New", "Refurbished", "Damaged"]}
        onChange={(value) => updateField(form.id, LaptopFields.STATUS, value)}
      />

      <EditableOptionField
        title="OS Build:"
        value={form.content.os_builds.before}
        options={["Windows 10", "Windows 11", "Windows 11 24H2"]}
        onChange={(value) =>
          updateField(form.id, LaptopFields.BEFORE_OS_BUILD, value)
        }
      />

      <Text style={styles.label}>To</Text>

      <EditableOptionField
        value={form.content.os_builds.after}
        options={["Windows 10", "Windows 11", "Windows 11 24H2"]}
        onChange={(value) =>
          updateField(form.id, LaptopFields.AFTER_OS_BUILD, value)
        }
      />

      <Row>
        <Column flex={3}>
          <TextField
            title="Laptop Hostname:"
            value={form.content.hostname}
            onChange={(value) => {
              updateField(form.id, LaptopFields.HOSTNAME, value);
              updateTitle(form.id, value);
            }}
            // action={{
            //   label: "Scan from Image",
            //   onPress: () => {
            //     // OCR implementation later
            //   },
            // }}
          />
        </Column>

        <Column flex={2}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <CheckboxField
              checked={form.content.withYubiKey}
              label="With YubiKey"
              onChange={(checked) =>
                updateField(form.id, LaptopFields.WITH_YUBIKEY, checked)
              }
            />
          </View>
        </Column>
      </Row>

      {form.content.withYubiKey && (
        <>
          <TextField
            title="YubiKey Hostname:"
            value={form.content.ybk.hostname}
            onChange={(value) =>
              updateField(form.id, LaptopFields.YBK_HOSTNAME, value)
            }
          />
        </>
      )}
      <MediaGroup title="Before Photos">
        <MediaField
          title="Front:"
          value={form.content.photos.before.front}
          required
          onAdd={() => {}}
          onReplace={() => {}}
          onDelete={() =>
            updateField(form.id, LaptopFields.BEFORE_FRONT_PHOTO, "")
          }
        />

        <MediaField
          title="Back:"
          value={form.content.photos.before.back}
          onAdd={() => {}}
          onReplace={() => {}}
          onDelete={() =>
            updateField(form.id, LaptopFields.BEFORE_BACK_PHOTO, "")
          }
        />

        <MediaField
          title="Serial Number:"
          value={form.content.photos.before.sn}
          onAdd={() => {}}
          onReplace={() => {}}
          onDelete={() =>
            updateField(form.id, LaptopFields.BEFORE_SN_PHOTO, "")
          }
        />
      </MediaGroup>
      
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
