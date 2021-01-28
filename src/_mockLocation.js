import * as Location from 'expo-location';

const tenmeterswithDegrees = 0.0001;


const getLocation = increment =>{
    return {
        timestamp:10000000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeaccuracy:5,
            altitude:5,
            longitude: 72.8320677 + increment * tenmeterswithDegrees,
            latitude: 19.098825 + increment * tenmeterswithDegrees
        }
    }
}

let counter = 0;

setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId:Location._getCurrentWatchId,
        location:getLocation(counter)
    });
    counter++
},1000)