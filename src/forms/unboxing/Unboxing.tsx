import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { v4 as uuid } from "uuid";

import { FormDocument, useForms } from "@/src/context/FormContext";

import { UnboxingFields } from "@/src/constants/unboxingFields";

import DynamicList from "@/src/components/DynamicList";
import Row from "@/src/components/Row";
import Column from "@/src/components/Column";
import OutlinedButton from "@/src/components/OutlinedButton";

import TextField from "@/src/fields/TextField";
import MediaGroup from "@/src/fields/MediaGroup";
import MediaField from "@/src/fields/MediaField";

interface HostnameItem {
  id: string;
  hostname: string;
}

interface UnboxingProps {
  form: FormDocument;
}

export default function Unboxing({ form }: UnboxingProps) {
  const { appendToArray, updateArrayItem, removeArrayItem, updateTitle, updateField } =
    useForms();

  const hostnames = form.content.hostnames as HostnameItem[];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Laptop Unboxing</Text>

      <MediaGroup title="Media Files">
        <MediaField
          title="Unboxing Video:"
          value={form.content.video}
          type="video"
          required
          onAdd={() => {}}
          onReplace={() => {}}
          onDelete={() => updateField(form.id, UnboxingFields.VIDEO, "")}
        />

        <MediaField
          title="TN Picture:"
          value={form.content.picture}
          onAdd={() => {}}
          onReplace={() => {}}
          onDelete={() => updateField(form.id, UnboxingFields.PICTURE, "")}
        />
      </MediaGroup>

      <TextField
        title="Tracking Number:"
        value={form.content.trackingNumber}
        onChange={(value) => {
          updateField(form.id, UnboxingFields.TRACKINGNUMBER, value);
          updateTitle(form.id, value);
        }}
        action={{
          label: "Scan from Image",
          onPress: () => {
            // OCR implementation later
          },
        }}
      />

      <DynamicList
        items={hostnames}
        keyExtractor={(item) => item.id}
        renderItem={(item, index) => (
          <Row>
            <Column flex={5}>
              <TextField
                title={`Hostname ${index + 1}`}
                value={item.hostname}
                placeholder=""
                onChange={(value) => {
                  updateArrayItem(form.id, UnboxingFields.HOSTNAMES, index, {
                    ...item,
                    hostname: value,
                  });
                }}
              />
            </Column>

            <Column flex={1}>
              <OutlinedButton
                label="Delete"
                onPress={() =>
                  removeArrayItem(form.id, UnboxingFields.HOSTNAMES, index)
                }
              />
            </Column>
          </Row>
        )}
      />

      <OutlinedButton
        label="+ Add Unit"
        onPress={() =>
          appendToArray(form.id, UnboxingFields.HOSTNAMES, {
            id: uuid(),
            hostname: "PS-",
          })
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
});
