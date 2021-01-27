import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 19.098825 + i * 0.001,
        longitude: 72.8320677 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 19.098825 - i * 0.002,
        longitude: 72.8320677 - i * 0.002,
      });
    }
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 19.098825,
        longitude: 72.8320677,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points}></Polyline>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
