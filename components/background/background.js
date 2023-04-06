import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme/colors";

export default function Background({ children,style }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.blue, COLORS.praple, COLORS.orange]}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
