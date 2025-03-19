import React from "react";
import { View, Platform, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const parkingLots = [
  { id: "1", name: "Central Parking", capacity: 100, location: "Downtown", price: "₹50/hr", latitude: 11.0172, longitude: 76.9559 },
  { id: "2", name: "West Side Garage", capacity: 75, location: "West Street", price: "₹40/hr", latitude: 11.0159, longitude: 76.9561 },
  { id: "3", name: "East Lot", capacity: 50, location: "East Avenue", price: "₹45/hr", latitude: 11.0165, longitude: 76.9545 },
  { id: "4", name: "Mall Parking", capacity: 200, location: "City Mall", price: "₹60/hr", latitude: 11.0180, longitude: 76.9553 },
  { id: "5", name: "Airport Parking", capacity: 300, location: "Airport Road", price: "₹70/hr", latitude: 11.0155, longitude: 76.9570 },
];

const MapScreen = () => {
  const navigation = useNavigation();

  if (Platform.OS === "ios" || Platform.OS === "android") {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 11.016844,
            longitude: 76.955833,
            latitudeDelta: 0.01, // Zooms in on the area
            longitudeDelta: 0.01,
          }}
        >
          {parkingLots.map((lot) => (
            <Marker
              key={lot.id}
              coordinate={{ latitude: lot.latitude, longitude: lot.longitude }}
              title={lot.name}
              description={`Capacity: ${lot.capacity}, Price: ${lot.price}`}
              onPress={() => navigation.navigate("ParkingLotDetails", { lot })}
            />
          ))}
        </MapView>
      </View>
    );
  }

  return (
    <View>
      <Text>Maps is supported only on Android or iOS devices</Text>
    </View>
  );
};

export default MapScreen;
