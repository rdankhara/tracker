import { AsyncStorage } from "react-native";

const baseUri = "";
const signUpUri = `${baseUri}/signup`;
const signInUri = `${baseUri}/signin`;
const trackUri = `${baseUri}/tracks`;

const getPostOrPutSettings = async (method, data) => {
  const token = await AsyncStorage.getItem("token");
  const headers = new Headers();
  headers.set("Content-Type", "Application/json");
  headers.set("Accept", "json");
  headers.set("Authorization", `Bearer ${token}`);
  return {
    headers,
    body: JSON.stringify(data),
    method
  };
};

const getPostSettings = data => getPostOrPutSettings("post", data);
const getPutSettings = data => getPutSettings("put", data);

const signUpApi = payload => fetch(signUpUri, getPostSettings(payload));
const signInApi = payload => fetch(signInUri, getPostSettings(payload));
const saveTrackApi = payload => fetch(trackUri, getPostSettings(payload));
export { signUpApi, signInApi, saveTrackApi };
