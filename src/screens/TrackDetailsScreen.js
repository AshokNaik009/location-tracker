import React , { useContext } from "react";
import {   View ,StyleSheet } from "react-native";
import { Context as TrackContext  } from "../context/TrackContext";
import MapView, { Polyline  } from "react-native-maps";
import { Text } from "react-native-elements";


const TrackDetailScreen = ({ navigation }) =>{
    const { state } = useContext(TrackContext);
    const id = navigation.getParam('_id');
    const track = state.find((t) => t._id === id)
    const initalCoords = track.locations[0].coords
    return( <View>
           <Text h3>  {track.name} </Text>
           <MapView   style={styles.map} 
            initialRegion={{
                longitudeDelta:0.01,
                latitudeDelta:0.01,
                ...initalCoords
            }}
           >
               <Polyline coordinates={track.locations.map(loc => loc.coords)} />
           </MapView>
          
    </View>);
}

const styles = StyleSheet.create({
    map: {
        height: 300,
      },
});

export default TrackDetailScreen;