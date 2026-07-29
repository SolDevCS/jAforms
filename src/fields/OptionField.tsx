import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface OptionFieldProps {
  title: string;
  value: string;
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function OptionField({
  title,
  value,
  options,
  placeholder = "Select...",
  onChange,
}: OptionFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.pickerContainer}>
        <Picker selectedValue={value} onValueChange={onChange}>
          <Picker.Item label={placeholder} value="" />

          {options.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      </View>
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

  pickerContainer: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    overflow: "hidden",
  },
});
