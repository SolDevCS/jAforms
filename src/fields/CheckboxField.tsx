import { Pressable, Text, View, StyleSheet } from "react-native";

interface Props {
  checked: boolean;

  label: string;

  onChange: (checked: boolean) => void;
}

export default function CheckboxField({ checked, label, onChange }: Props) {
  return (
    <Pressable style={styles.container} onPress={() => onChange(!checked)}>
      <View style={[styles.box, checked && styles.checked]}>
        {checked && <Text style={styles.check}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
  },

  checked: {
    backgroundColor: "#1976D2",
  },

  label: {
    fontSize: 15,
  },

  check: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 18,
  },
});
