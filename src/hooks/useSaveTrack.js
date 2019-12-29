import { useContext } from "react";
import { TrackContext } from "../context/trackProvider";
import { LocationContext } from "../context/locationProvider";
import { navigate } from "../navigationRef";

const useSaveTrack = () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { trackName, locations },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(trackName, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};

export { useSaveTrack };
