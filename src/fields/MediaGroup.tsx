import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface MediaGroupProps {
  title?: string;

  children: ReactNode;
}

export default function MediaGroup({ title, children }: MediaGroupProps) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },

  content: {
    gap: 15,
  },
});
