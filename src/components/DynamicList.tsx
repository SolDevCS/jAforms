import React from "react";
import { View, StyleSheet } from "react-native";

interface DynamicListProps<T> {
  items: T[];

  keyExtractor: (item: T) => string;

  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function DynamicList<T>({
  items,
  keyExtractor,
  renderItem,
}: DynamicListProps<T>) {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={keyExtractor(item)} style={styles.item}>
          {renderItem(item, index)}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },

  item: {
    width: "100%",
  },
});
