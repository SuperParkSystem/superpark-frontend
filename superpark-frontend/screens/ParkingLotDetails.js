import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ParkingLotDetails = ({ route }) => {
  const { lot } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lot.name}</Text>
      <Text style={styles.detail}>Location: {lot.location}</Text>
      <Text style={styles.detail}>Capacity: {lot.capacity}</Text>
      <Text style={styles.detail}>Price: {lot.price}</Text>
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
