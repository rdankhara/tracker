import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { SignupScreen } from "./src/screens/SignupScreen";
import { SigninScreen } from "./src/screens/SigninScreen";
import { FocusedTrackCreateScreen } from "./src/screens/TrackCreateScreen";
import { AccountScreen } from "./src/screens/AccountScreen";
import { TrackListScreen } from "./src/screens/TrackListScreen";
import { TrackDetailScreen } from "./src/screens/TrackDetailScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AuthProvider } from "./src/context/authProvider";
import { setNavigator } from "./src/navigationRef";
import { LoadingScreen } from "./src/screens/LoadingScreen";
import { LocationProvider } from "./src/context/locationProvider";
import { TrackProvider } from "./src/context/trackProvider";
import { FontAwesome } from "@expo/vector-icons";

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});
trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};
const navigation = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    CreateTrack: FocusedTrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(navigation);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={nav => setNavigator(nav)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
