//import "../_mockLocation";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Map } from "../components/Map";
import { Text } from "react-native-elements";
import { useContext } from "react";
import { LocationContext } from "../context/locationProvider";
import { useLocation } from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import { TrackForm } from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const [error] = useLocation(isFocused || recording, addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create Track</Text>
      <Map />
      {error ? (
        <Text style={styles.error}>Enable Location {error.message}</Text>
      ) : null}

      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    margin: 15,
    color: "red"
  }
});
TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />
};
const FocusedTrackCreateScreen = withNavigationFocus(TrackCreateScreen);
export { TrackCreateScreen, FocusedTrackCreateScreen };
