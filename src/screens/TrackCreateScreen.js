import '../_mockLocation';
import React , { useState,useEffect,useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {SafeAreaView} from 'react-navigation';
import { requestPermissionsAsync ,watchPositionAsync ,Accuracy} from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';
import Map from './components/Map';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () =>{
    const {addLocation}  = useContext(LocationContext);
    const [err] = useLocation(addLocation);
    return( <SafeAreaView>
          <Text h2>  Track Create Screen </Text>
          <Map/>
          { err ? <Text> Location Permisson Denied </Text> :null }
    </SafeAreaView>);
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;