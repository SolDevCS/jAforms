// Body of the side menu
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UAT Form System</Text>

      <Text style={styles.subtitle}>
        Open the drawer to create or access forms.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
});