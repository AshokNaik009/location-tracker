import { useState ,useEffect } from "react";
import { requestPermissionsAsync ,watchPositionAsync ,Accuracy } from "expo-location";
import { call } from "react-native-reanimated";


export default(callback) =>{

    const [err,setErr] =  useState(null);
    
    const startWatching = async () =>{
        try {
            const { granted } = await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10
            },callback)
            if (!granted) {
              throw new Error('Location permission not granted');
            }
        } catch (error) {
            setErr(error)
        }
    };

    useEffect(()=>{
        startWatching();
    },[]);
 
    return [err];
}