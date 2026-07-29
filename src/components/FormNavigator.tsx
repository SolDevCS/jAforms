// Validator and Visual indicator for the bottom navigation bar
import React from "react";
import { View, Pressable, StyleSheet } from "react-native";

import { isPageComplete } from "@/src/utils/validation";

interface Props {
  form: any;
  pages: any[];

  currentPage: number;

  onPress: (index: number) => void;
}

export default function FormNavigator({
  form,
  pages,
  currentPage,
  onPress,
}: Props) {
  return (
    <View style={styles.container}>
      {pages.map((page, index) => {
        const complete = page.validator
          ? page.validator(form)
          : isPageComplete(form.content, page.requiredFields ?? []);

        return (
          <Pressable
            key={page.key}
            style={[
              styles.box,

              complete && styles.complete,

              index === currentPage && styles.selected,
            ]}
            onPress={() => onPress(index)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "center",

    paddingVertical: 12,

    gap: 8,
  },

  box: {
    width: 18,

    height: 18,

    borderRadius: 4,

    backgroundColor: "#DDD",
  },

  complete: {
    backgroundColor: "#4CAF50",
  },

  selected: {
    borderWidth: 2,

    borderColor: "#1976D2",
  },
});