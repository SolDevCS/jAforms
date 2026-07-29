import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface TextFieldProps {
  title?: string;

  value: string;

  onChange: (value: string) => void;

  placeholder?: string;

  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";

  action?: {
    label: string;
    onPress: () => void;
  };
}

export default function TextField({
  title,
  value,
  onChange,
  placeholder = "PS-",
  keyboardType = "default",
  action,
}: TextFieldProps) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        keyboardType={keyboardType}
        autoCapitalize="characters"
        autoCorrect={false}
      />

      {action && (
        <Pressable style={styles.actionButton} onPress={action.onPress}>
          <Text style={styles.actionText}>{action.label}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 15,
  },

  actionButton: {
    alignSelf: "flex-end",

    marginTop: 8,

    paddingHorizontal: 12,
    paddingVertical: 8,

    borderRadius: 8,

    backgroundColor: "#1976D2",
  },

  actionText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 13,
  },
});
