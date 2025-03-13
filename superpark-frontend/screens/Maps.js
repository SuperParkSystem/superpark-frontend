import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Maps = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 11.016844,
          longitude: 76.955833,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 11.016844, longitude: 76.955833 }} />
      </MapView>
    </View>
  );
};

export default Maps;
