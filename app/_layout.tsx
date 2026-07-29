// Root Layout for the app
// Wrapped FormContext 

import { FormProvider } from "@/src/context/FormContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <FormProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(drawer)" />
      </Stack>
    </FormProvider>
  );
}
