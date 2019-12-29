import { createDataContext } from "./createDataContext";
import { saveTrackApi } from "../api/trackerApi";

const FETCH_TRACK = "FETCH_TRACK";
const SAVE_TRACK = "SAVE_TRACK";

const trackReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TRACK:
      return payload;
    case SAVE_TRACK:
      return [...state, payload];
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  // call to fetchTracksApi
  const payload = [
    { name: "Bike", locations: [] },
    { name: "Car", locations: [] }
  ];
  dispatch({ type: FETCH_TRACK, payload });
};

const createTrack = dispatch => async (name, locations) => {
  //await saveTrackApi({name, locations});
  console.log("saving track ", name, locations.length);
  //dispatch({ type: SAVE_TRACK, payload });
};

const initialState = [];

const actions = { fetchTracks, createTrack };

export const {
  Context: TrackContext,
  Provider: TrackProvider
} = createDataContext(trackReducer, actions, initialState);
