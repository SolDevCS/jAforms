import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

import { useAuth } from "@/src/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const loginAs = (
    role: "engr" | "qa" | "tl",
    id: string,
    name: string,
  ) => {
    login({
      id,
      name,
      email: `${role}@jaforms.local`,
      role,
    });

    router.replace("/(drawer)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JAForms</Text>

      <Text style={styles.subtitle}>Development Authentication</Text>

      <View style={styles.button}>
        <Button
          title="Login as Engineer"
          onPress={() => loginAs("engr", "engr-test-001", "John Engineer")}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Login as QA"
          onPress={() => loginAs("qa", "qa-test-001", "Jane QA")}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Login as Team Lead"
          onPress={() => loginAs("tl", "tl-test-001", "Mark Team Lead")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 32,
  },

  button: {
    marginVertical: 8,
  },
});
