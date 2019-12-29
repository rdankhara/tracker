import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getlocation = increment => {
  return {
    timeStamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 51.630587 + increment * tenMetersWithDegrees,
      longitude: -0.383213 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.LocationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getlocation(counter)
  });
  counter++;
}, 1000);
