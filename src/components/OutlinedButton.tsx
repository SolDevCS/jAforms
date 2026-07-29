import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface OutlinedButtonProps {
  label: string;
  onPress: () => void;

  selected?: boolean;
}

export default function OutlinedButton({
  label,
  onPress,
  selected = false,
}: OutlinedButtonProps) {
  return (
    <Pressable
      style={[styles.button, selected && styles.selectedButton]}
      onPress={onPress}
    >
      <Text style={[styles.label, selected && styles.selectedLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#1976D2",

    borderRadius: 8,

    paddingHorizontal: 12,
    paddingVertical: 6,

    alignItems: "center",
    justifyContent: "center",
  },

  selectedButton: {
    backgroundColor: "#1976D2",
  },

  label: {
    color: "#1976D2",
    fontWeight: "600",
    fontSize: 13,
  },

  selectedLabel: {
    color: "white",
  },
});
