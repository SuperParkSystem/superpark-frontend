import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const innerSize = 300; // Size of the cutout box

const Overlay = () => {
  return (
    <View style={styles.overlay}>
      {/* Top section */}
      <View style={{ width, height: (height - innerSize) / 2, backgroundColor: "black", opacity: 0.5 }} />

      {/* Middle section (left + cutout + right) */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: (width - innerSize) / 2, height: innerSize, backgroundColor: "black", opacity: 0.5 }} />
        <View style={{ width: innerSize, height: innerSize, backgroundColor: "transparent" }} />
        <View style={{ width: (width - innerSize) / 2, height: innerSize, backgroundColor: "black", opacity: 0.5 }} />
      </View>

      {/* Bottom section */}
      <View style={{ width, height: (height - innerSize) / 2, backgroundColor: "black", opacity: 0.5 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Overlay;
