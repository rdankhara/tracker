import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import { useEffect } from "react";
import { useState } from "react";

let subscriber;

const useLocation = (shouldTrack, callback) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 2000,
            distanceInterval: 10
          },
          callback
        );
      } catch (error) {
        setError(error);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else if (subscriber) {
      subscriber.remove();
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack]);
  return [error];
};

export { useLocation };
