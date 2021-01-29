import React, {useContext } from "react";
import { Text, StyleSheet , ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from '../../context/LocationContext'

const Map = () => {

   const { state : { currentLocation }  } = useContext(LocationContext);
   if(!currentLocation) {
     return <ActivityIndicator  size="large" style={{marginTop:200}} />
   }
  console.log(currentLocation);
  // let points = [];
  // for (i = 0; i < 20; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: 19.098825 + i * 0.001,
  //       longitude: 72.8320677 + i * 0.001,
  //     });
  //   } else {
  //     points.push({
  //       latitude: 19.098825 - i * 0.002,
  //       longitude: 72.8320677 - i * 0.002,
  //     });
  //   }
  // }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
       ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
