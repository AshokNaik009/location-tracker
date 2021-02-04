import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";

export default () => {
  const { createTracks } = useContext(TrackContext);
  const {
    state: { locations, name },
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTracks(name, locations);
  };

  return [saveTrack];
};
