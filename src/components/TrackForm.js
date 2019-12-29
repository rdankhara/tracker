import React from "react";
import { Spacer } from "./Spacer";
import { Input, Button } from "react-native-elements";
import { useContext } from "react";
import { LocationContext } from "../context/locationProvider";
import { useMemo } from "react";
import { useSaveTrack } from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { trackName, recording, locations },
    startRecording,
    stopRecording,
    changeTrackName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input
          autoCapitalize={"none"}
          autoCorrect={false}
          placeholder={"Track Name"}
          value={trackName}
          onChangeText={changeTrackName}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording}></Button>
        ) : (
          <Button title="Start" onPress={startRecording} />
        )}
      </Spacer>
      {!recording && locations.length > 10 ? (
        <Spacer>
          <Button title="Save Track" onPress={saveTrack} />
        </Spacer>
      ) : null}
    </>
  );
};

export { TrackForm };
