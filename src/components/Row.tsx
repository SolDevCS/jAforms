import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface RowProps {
  children: ReactNode;
}

export default function Row({ children }: RowProps) {
  return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
});
