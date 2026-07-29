import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import OutlinedButton from "../components/OutlinedButton";

interface AssessmentFieldProps {
  question: string;

  value: "Good" | "Bad" | "";

  percentage: string;

  remark: string;

  required?: boolean;

  percentageLabel?: string;

  percentagePlaceholder?: string;

  percentageSuffix?: string;

  onValueChange: (value: "Good" | "Bad") => void;

  onPercentageChange: (value: string) => void;

  onRemarkChange: (value: string) => void;
}

export default function AssessmentField({
  question,
  value,
  percentage,
  remark,

  required = false,

  percentageLabel = "Percentage",
  percentagePlaceholder = "100",
  percentageSuffix = "%",

  onValueChange,
  onPercentageChange,
  onRemarkChange,
}: AssessmentFieldProps) {
  const [showRemark, setShowRemark] = useState(false);

  const options = ["Good", "Bad"] as const;

  return (
    <View style={styles.container}>
      {/* ---------- Header ---------- */}

      <View style={styles.header}>
        <Text style={styles.question}>
          {question}

          {required && <Text style={styles.required}> *</Text>}
        </Text>

        <OutlinedButton
          label={showRemark ? "- Remark" : "+ Remark"}
          onPress={() => setShowRemark((prev) => !prev)}
        />
      </View>

      {/* ---------- Radio Buttons ---------- */}

      <View style={styles.radioRow}>
        {options.map((option) => (
          <Pressable
            key={option}
            style={styles.radioItem}
            onPress={() => onValueChange(option)}
          >
            <View style={styles.outerCircle}>
              {value === option && <View style={styles.innerCircle} />}
            </View>

            <Text>{option}</Text>
          </Pressable>
        ))}
      </View>

      {/* ---------- Percentage ---------- */}

      <View style={styles.percentageContainer}>
        <Text style={styles.percentageLabel}>{percentageLabel}</Text>

        <View style={styles.percentageRow}>
          <TextInput
            style={styles.percentageInput}
            keyboardType="numeric"
            placeholder={percentagePlaceholder}
            value={percentage}
            onChangeText={onPercentageChange}
          />

          <Text style={styles.suffix}>{percentageSuffix}</Text>
        </View>
      </View>

      {/* ---------- Remarks ---------- */}

      {(showRemark || remark !== "") && (
        <TextInput
          multiline
          numberOfLines={4}
          style={styles.textarea}
          placeholder="Remarks..."
          value={remark}
          onChangeText={onRemarkChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  question: {
    flex: 4,
    fontSize: 15,
    fontWeight: "600",
    marginRight: 10,
  },

  required: {
    color: "#D32F2F",
  },

  radioRow: {
    flexDirection: "row",
    marginTop: 12,
  },

  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },

  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#1976D2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1976D2",
  },

  percentageContainer: {
    marginTop: 18,
  },

  percentageLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  percentageRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  percentageInput: {
    width: 90,

    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,

    paddingHorizontal: 12,
    paddingVertical: 10,

    fontSize: 15,

    textAlign: "center",
  },

  suffix: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  textarea: {
    marginTop: 15,

    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,

    padding: 12,

    minHeight: 100,

    textAlignVertical: "top",
  },
});
