import React, { useLayoutEffect } from "react";
import { Pressable, Text } from "react-native";

import { router, useLocalSearchParams, useNavigation } from "expo-router";

import { useForms } from "@/src/context/FormContext";
import Unboxing from "@/src/forms/unboxing/Unboxing";


export default function UnboxingFormPage() {
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
          onPress={() =>
            router.push({
              pathname: "/export/[id]",
              params: {
                id: form.id,
              },
            })
          }
          style={{ paddingHorizontal: 10 }}
        >
          <Text style={{ color: "#1976D2", fontWeight: "600" }}>Export</Text>
        </Pressable>
      ),
    });
  }, [navigation, form]);

  if (!form) {
    return <Text>Form not found.</Text>;
  }

  return <Unboxing form={form} />;
}
