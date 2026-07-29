import React, { useLayoutEffect } from "react";
import { Text } from "react-native";

import { useLocalSearchParams, useNavigation } from "expo-router";

import { useForms } from "@/src/context/FormContext";

import FormCarousel from "@/src/components/FormCarousel";

import { laptopPages } from "../../../src/forms/laptop";

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
    });
  }, [navigation, form]);

  if (!form) {
    return <Text>Form not found.</Text>;
  }

  return <FormCarousel form={form} pages={laptopPages} />;
}
