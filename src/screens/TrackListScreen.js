import React , { useContext }  from "react";
import { Text, View, StyleSheet, Button ,FlatList , TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context } from "../context/LocationContext";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {

  const { state, fetchTracks  } = useContext(TrackContext);

  console.log(state);

  return (
    <View>
      <NavigationEvents onWillFocus={() =>  fetchTracks()} />
      <Text style={{ fontSize: 48 }}> TrackListScreen </Text>
      <FlatList 
        data={state}
        keyExtractor={item => item._id}
        renderItem={({item})=>{
          console.log("item",item.name);
          return <TouchableOpacity>
               <Text> {item.name}</Text>
          </TouchableOpacity>
        }}
      
      />
      {/* <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
