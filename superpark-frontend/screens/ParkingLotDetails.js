import React from "react";
import { View, Text, StyleSheet } from "react-native";

import sampleStyles from "../constants/SampleStyles";

const ParkingLotDetails = ({ route }) => {
  const { lot } = route.params;

  return (
    <View style={sampleStyles.container}>
      <Text style={sampleStyles.labelText}>{lot.name}</Text>
      <Text style={sampleStyles.valueText}>Location: {lot.location}</Text>
      <Text style={sampleStyles.valueText}>Capacity: {lot.capacity}</Text>
      <Text style={sampleStyles.valueText}>Price: {lot.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ParkingLotDetails;
