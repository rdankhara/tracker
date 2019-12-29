import { createDataContext } from "./createDataContext";
import { signUpApi, signInApi } from "../api/trackerApi";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
const ADD_ERROR = "add_error";
const TOKEN = "token";
const SIGNIN = "signin";
const CLEAR_ERROR = "clear_error";
const SIGNOUT = "signout";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ERROR:
      return { ...state, errorMessage: payload };
    case SIGNIN:
      return { errorMessage: "", token: payload };
    case CLEAR_ERROR:
      return { ...state, errorMessage: "" };
    case SIGNOUT:
      return { errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: SIGNIN, token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};
const signup = dispatch => async payload => {
  try {
    const response = await signUpApi(payload);
    const data = await response.json();
    await AsyncStorage.setItem(TOKEN, data.token);
    dispatch({ type: SIGNIN, payload: data.token });
    navigate("TrackList");
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: "Something went wrong" });
  }
};
const signin = dispatch => async payload => {
  try {
    // const response = await signInApi(payload);
    // const data = await response.json();
    console.log("signin payload", payload);
    const data = { token: "hello" };
    await AsyncStorage.setItem(TOKEN, data.token);
    dispatch({ type: SIGNIN, payload: data.token });
    navigate("TrackList");
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: "Something went wrong with sing in" });
  }
};
const signout = dispatch => async () => {
  await AsyncStorage.removeItem(TOKEN);
  dispatch({ type: SIGNOUT });
  navigate("loginFlow");
};

const clearErrorMessage = dispatch => () => dispatch({ type: CLEAR_ERROR });

const actions = { signup, signin, signout, clearErrorMessage, tryLocalSignIn };
const initialState = { token: null, errorMessage: "" };
export const {
  Context: AuthContext,
  Provider: AuthProvider
} = createDataContext(authReducer, actions, initialState);
