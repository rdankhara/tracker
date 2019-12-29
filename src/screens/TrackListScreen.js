import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationEvents } from "react-navigation";
import { TrackContext } from "../context/trackProvider";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { ListItem } from "react-native-elements";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={item => item.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { name: item.name })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

TrackListScreen.navigationOptions = () => {
  return {
    title: "Tracks"
  };
};
export { TrackListScreen };
