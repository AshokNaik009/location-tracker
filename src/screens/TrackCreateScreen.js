import React , { useState,useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {SafeAreaView} from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';
import Map from './components/Map';

const TrackCreateScreen = () =>{
    const [err,setErr] =  useState(null);
    useEffect(()=>{
        startWatching();
    },[]);
    const startWatching = async () =>{
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
              throw new Error('Location permission not granted');
            }
        } catch (error) {
            setErr(error)
        }
    };
    return( <SafeAreaView>
          <Text h2>  Track Create Screen </Text>
          <Map/>
          { err ? <Text> Location Permisson Denied </Text> :null }
    </SafeAreaView>);
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;