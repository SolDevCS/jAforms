import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface SignatureFieldProps {
  title?: string;

  value: string;

  required?: boolean;

  onCapture: () => void;

  onClear: () => void;
}

export default function SignatureField({
  title,
  value,
  required = false,
  onCapture,
  onClear,
}: SignatureFieldProps) {
  const hasSignature = value !== "";

  return (
    <View style={styles.container}>
      {title && (
        <Text style={styles.title}>
          {title}

          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      <View style={styles.preview}>
        {hasSignature ? (
          <Image
            source={{ uri: value }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.placeholder}>No signature captured</Text>
        )}
      </View>

      <View style={styles.buttonRow}>
        <Pressable style={styles.primaryButton} onPress={onCapture}>
          <Text style={styles.primaryButtonText}>Capture Signature</Text>
        </Pressable>

        {hasSignature && (
          <Pressable style={styles.secondaryButton} onPress={onClear}>
            <Text style={styles.secondaryButtonText}>Clear</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  required: {
    color: "#D32F2F",
  },

  preview: {
    height: 160,

    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFF",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  placeholder: {
    color: "#888",
    fontStyle: "italic",
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 12,
  },

  primaryButton: {
    flex: 1,

    backgroundColor: "#1976D2",

    paddingVertical: 12,

    borderRadius: 8,

    alignItems: "center",
  },

  primaryButtonText: {
    color: "white",
    fontWeight: "600",
  },

  secondaryButton: {
    marginLeft: 10,

    paddingHorizontal: 20,

    justifyContent: "center",

    borderRadius: 8,

    borderWidth: 1,
    borderColor: "#D32F2F",
  },

  secondaryButtonText: {
    color: "#D32F2F",
    fontWeight: "600",
  },
});
