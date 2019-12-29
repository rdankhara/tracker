import { createDataContext } from "./createDataContext";
const START_RECORDING = "start_recording_location";
const STOP_RECORDING = "stop_recording_location";
const ADD_LOCATION = "add_current_location";
const CHANGE_TRACK_NAME = "change_track_name";
const RESET = "reset";

const applyChange = (original, updated) => ({
  ...original,
  ...updated
});

const locationReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_LOCATION:
      let locations = state.locations;
      if (state.recording) {
        locations = [...locations, payload];
      }
      return applyChange(state, { currentLocation: payload, locations });
    case START_RECORDING:
      return { ...state, recording: true };
    case STOP_RECORDING:
      return { ...state, recording: false };
    case CHANGE_TRACK_NAME:
      return { ...state, trackName: payload };
    case RESET:
      return { ...state, trackName: "", locations: [] };
    default:
      return state;
  }
};

const startRecording = dispatch => () => dispatch({ type: START_RECORDING });

const stopRecording = dispatch => () => dispatch({ type: STOP_RECORDING });

const reset = dispatch => () => dispatch({ type: RESET });

const changeTrackName = dispatch => trackName =>
  dispatch({ type: CHANGE_TRACK_NAME, payload: trackName });

const addLocation = dispatch => location =>
  dispatch({
    type: ADD_LOCATION,
    payload: location
  });

const initialState = {
  recording: false,
  locations: [],
  currentLocation: null,
  trackName: null
};
const actions = {
  startRecording,
  stopRecording,
  addLocation,
  changeTrackName,
  reset
};

export const {
  Context: LocationContext,
  Provider: LocationProvider
} = createDataContext(locationReducer, actions, initialState);
