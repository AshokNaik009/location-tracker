import React, { useContext } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { ListItem ,Text } from "react-native-elements";
import Spacer from './components/Spacer';
import { Context as TrackContext } from "../context/TrackContext";
import { FontAwesome } from '@expo/vector-icons';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
        <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetail", { _id: item._id });
              }}
            >
              <Spacer>
              <Text h3> {item.name}   <FontAwesome name="map-o" size={24} color="black" />   </Text>
              </Spacer>
           
              
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title:'Tracks'
}
const styles = StyleSheet.create({});

export default TrackListScreen;
