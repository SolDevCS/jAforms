import { ReactNode } from "react";
import { View } from "react-native";

interface ColumnProps {
  children: ReactNode;
  flex?: number;
}

export default function Column({ children, flex = 1 }: ColumnProps) {
  return <View style={{ flex }}>{children}</View>;
}
