import '../_mockLocation';
import React , { useState,useEffect,useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {SafeAreaView} from 'react-navigation';
import { requestPermissionsAsync ,watchPositionAsync ,Accuracy} from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';
import Map from './components/Map';

const TrackCreateScreen = () =>{
    const {addLocation}  = useContext(LocationContext);
    const [err,setErr] =  useState(null);
    useEffect(()=>{
        startWatching();
    },[]);
    const startWatching = async () =>{
        try {
            const { granted } = await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10
            },(location)=>{
                addLocation(location)
            })
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