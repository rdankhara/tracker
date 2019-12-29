import React from "react";
import { StyleSheet, ActivityIndicator, View, Dimensions } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { useContext } from "react";
import { LocationContext } from "../context/locationProvider";

const Map = () => {
  const {
    state: { currentLocation, locations }
  } = useContext(LocationContext);
  if (!currentLocation) {
    return <ActivityIndicator size={"large"} style={styles.activity} />;
  }
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01
      // }}
    >
      <Circle
        radius={30}
        center={currentLocation.coords}
        strokeColor={"rgba(158,158,255,1.0)"}
        fillColor={"rgba(158,158,255,0.3)"}
      ></Circle>
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    marginHorizontal: 10,
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 2
  },
  activity: {
    marginVertical: 200
  }
});

export { Map };
