import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface MediaFieldProps {
  title?: string;

  value: string;

  type?: "image" | "video";

  required?: boolean;

  onAdd?: () => void;

  onReplace?: () => void;

  onDelete?: () => void;
}

export default function MediaField({
  title,
  value,
  type = "image",
  required = false,
  onAdd,
  onReplace,
  onDelete,
}: MediaFieldProps) {
  const hasMedia = value !== "";

  return (
    <View style={styles.container}>
      {title && (
        <Text style={styles.title}>
          {title}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      {!hasMedia ? (
        <Pressable style={styles.placeholder} onPress={onAdd}>
          <MaterialIcons
            name={type === "image" ? "add-photo-alternate" : "videocam"}
            size={48}
            color="#777"
          />

          <Text style={styles.placeholderText}>
            {type === "image" ? "Tap to add image" : "Tap to add video"}
          </Text>
        </Pressable>
      ) : (
        <View style={styles.previewContainer}>
          {type === "image" ? (
            <Image
              source={{ uri: value }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.videoPlaceholder}>
              <MaterialIcons name="videocam" size={60} color="#666" />

              <Text style={styles.videoText}>Video Selected</Text>
            </View>
          )}

          <View style={styles.actionBar}>
            <Pressable style={styles.actionButton} onPress={onReplace}>
              <MaterialIcons name="edit" size={20} color="#1976D2" />
            </Pressable>

            <Pressable style={styles.actionButton} onPress={onDelete}>
              <MaterialIcons name="delete" size={20} color="#D32F2F" />
            </Pressable>
          </View>
        </View>
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

  required: {
    color: "#D32F2F",
  },

  placeholder: {
    height: 180,

    borderWidth: 1,
    borderColor: "#CCC",

    borderStyle: "dashed",

    borderRadius: 8,

    backgroundColor: "#FAFAFA",

    justifyContent: "center",
    alignItems: "center",
  },

  placeholderText: {
    marginTop: 12,

    fontSize: 15,

    color: "#666",
  },

  previewContainer: {
    height: 180,

    borderRadius: 8,

    overflow: "hidden",

    borderWidth: 1,
    borderColor: "#CCC",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  videoPlaceholder: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F2F2F2",
  },

  videoText: {
    marginTop: 10,
    fontSize: 15,
    color: "#666",
  },

  actionBar: {
    position: "absolute",

    top: 8,
    right: 8,

    flexDirection: "row",

    backgroundColor: "rgba(255,255,255,0.92)",

    borderRadius: 20,

    paddingHorizontal: 4,
    paddingVertical: 4,
  },

  actionButton: {
    padding: 6,
    marginHorizontal: 2,
  },
});
