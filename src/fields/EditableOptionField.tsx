import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface EditableOptionFieldProps {
  title?: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const OTHER_VALUE = "__OTHER__";

export default function EditableOptionField({
  title,
  value,
  options,
  onChange,
  placeholder = "Enter custom value...",
}: EditableOptionFieldProps) {
  const [usingCustom, setUsingCustom] = useState(false);

  useEffect(() => {
    setUsingCustom(value !== "" && !options.includes(value));
  }, [value, options]);

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={usingCustom ? OTHER_VALUE : value}
          onValueChange={(selected) => {
            if (selected === OTHER_VALUE) {
              setUsingCustom(true);
              onChange("");
            } else {
              setUsingCustom(false);
              onChange(selected);
            }
          }}
        >
          <Picker.Item label="Select..." value="" />

          {options.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}

          <Picker.Item label="Other..." value={OTHER_VALUE} />
        </Picker>
      </View>

      {usingCustom && (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
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

  pickerContainer: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    overflow: "hidden",
  },

  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
});
