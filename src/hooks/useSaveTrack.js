import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import { navigate } from "../navigationRef";

export default () => {
  const { createTracks } = useContext(TrackContext);
  const {
    state: { locations, name },reset
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTracks(name, locations);
    reset();
    navigate('TrackList')
  };

  return [saveTrack];
};
