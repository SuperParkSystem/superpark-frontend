import React from "react";
import { View, Platform, Text } from "react-native";

import sampleStyles from "../constants/SampleStyles";

// component for web map page
const MapScreen = () => {
  return (
    <View style={sampleStyles.container}>
      <Text style={sampleStyles.labelText}>Maps is supported only in Android or IOS devices </Text>
    </View>
  )
};

export default MapScreen;