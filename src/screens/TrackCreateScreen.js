import '../_mockLocation';
import React , { useCallback,useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {SafeAreaView , withNavigationFocus } from 'react-navigation';
import { requestPermissionsAsync ,watchPositionAsync ,Accuracy} from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';
import Map from './components/Map';
import TrackForm from './components/TrackForm';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({isFocused}) =>{
    const {addLocation,state}  = useContext(LocationContext);
    const callback = useCallback((location)=>{
        addLocation(location,state.recording)
    });
    const [err] = useLocation(isFocused,callback);
    return( <SafeAreaView>
          <Text h2>  Track Create Screen </Text>
          <Map/>
          { err ? <Text> Location Permisson Denied </Text> :null }
          <TrackForm/>
    </SafeAreaView>);
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);