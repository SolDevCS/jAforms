import React, { useLayoutEffect } from "react";
import { Pressable, Text } from "react-native";

import { router, useLocalSearchParams, useNavigation } from "expo-router";

import { useForms } from "@/src/context/FormContext";

import FormCarousel from "@/src/components/FormCarousel";

import { laptopPages } from "../../../src/forms/laptop";
import { createLaptop } from "@/src/services/laptopService";

export default function LaptopFormPage() {
  const navigation = useNavigation();

  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const { getForm } = useForms();

  const form = getForm(id);

  useLayoutEffect(() => {
    if (!form) return;

    navigation.setOptions({
      title: form.title,

      headerRight: () => (
        <Pressable
          onPress={async () => {
            try {
              const result = await createLaptop(form);

              console.log(result);

              if (result.error) {
                console.error(result.error);
              } else {
                console.log("Uploaded!");
              }
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Text style={{ color: "#1976D2", fontWeight: "600" }}>Export</Text>
        </Pressable>
      ),
    });
  }, [navigation, form]);

  if (!form) {
    return <Text>Form not found.</Text>;
  }

  return <FormCarousel form={form} pages={laptopPages} />;
}
