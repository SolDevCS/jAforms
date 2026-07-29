import { ScrollView, StyleSheet, Text } from "react-native";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import { FormDocument, useForms } from "@/src/context/FormContext";
import { LaptopFields } from "@/src/constants/laptopFields";

import DynamicList from "@/src/components/DynamicList";
import OutlinedButton from "@/src/components/OutlinedButton";
import Row from "@/src/components/Row";
import Column from "@/src/components/Column";

import TextField from "@/src/fields/TextField";
import SignatureField from "@/src/fields/SignatureField";

interface FooterRemark {
  id: string;
  text: string;
}

interface FooterProps {
  form: FormDocument;
}

export default function Footer({ form }: FooterProps) {
  const { appendToArray, updateArrayItem, removeArrayItem, updateField } = useForms();

  const remarks = form.content.footerRemarks as FooterRemark[];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Footer</Text>

      <DynamicList
        items={remarks}
        keyExtractor={(remark) => remark.id}
        renderItem={(remark, index) => (
          <Row>
            <Column flex={5}>
              <TextField
                title={`Remark ${index + 1}`}
                value={remark.text}
                placeholder="Enter remark..."
                onChange={(value) =>
                  updateArrayItem(form.id, LaptopFields.FOOTER_REMARKS, index, {
                    ...remark,
                    text: value,
                  })
                }
              />
            </Column>

            <Column flex={1}>
              <OutlinedButton
                label="Delete"
                onPress={() =>
                  removeArrayItem(form.id, LaptopFields.FOOTER_REMARKS, index)
                }
              />
            </Column>
          </Row>
        )}
      />

      <OutlinedButton
        label="+ Add Remark"
        onPress={() =>
          appendToArray(form.id, LaptopFields.FOOTER_REMARKS, {
            id: uuid(),
            text: "",
          })
        }
      />
      <SignatureField
        title="Digital Signature"
        value={form.content.engr.signature}
        onCapture={() => {}}
        onClear={() =>
          updateField(form.id, LaptopFields.ENGINEER_SIGNATURE, "")
        }
      />
      <TextField
        title="Engineer Name"
        value={form.content.engr.name}
        onChange={(value) =>
          updateField(form.id, LaptopFields.ENGINEER_NAME, value)
        }
      />
      <TextField
        title="Date Performed"
        value={form.content.engr.date}
        onChange={(value) =>
          updateField(form.id, LaptopFields.ENGINEER_DATE, value)
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
    textAlign: "center",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 35,
    marginBottom: 15,
  },
});
