import React, { useLayoutEffect } from "react";
import { Alert, Pressable, Text } from "react-native";

import { router, useLocalSearchParams, useNavigation } from "expo-router";

import { useForms } from "@/src/context/FormContext";

import FormCarousel from "@/src/components/FormCarousel";

import { laptopPages } from "../../../src/forms/laptop";

export default function LaptopFormPage() {
  const navigation = useNavigation();

  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const { getForm, createForm, loading, error } = useForms();

  const form = getForm(id);

  useLayoutEffect(() => {
    if (!form) return;

    navigation.setOptions({
      title: form.title,

      headerRight: () => (
        <Pressable
          disabled={loading}
          onPress={async () => {
            if (!form) return;

            try {
              await createForm(form);
            } catch (err) {
              Alert.alert(
                "Upload failed",
                err instanceof Error ? err.message : "Unknown error",
              );
            }
          }}
        >
          <Text>{loading ? "Uploading..." : "Export"}</Text>
        </Pressable>
      ),
    });
  }, [navigation, form]);

  if (!form) {
    return <Text>Form not found.</Text>;
  }

  return (
    <>
      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <FormCarousel form={form} pages={laptopPages} />
    </>
  );
}
