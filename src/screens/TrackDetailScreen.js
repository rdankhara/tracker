import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrackDetailScreen = ({ navigation }) => {
  const name = navigation.getParam("name");
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackDetailScreen</Text>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export { TrackDetailScreen };
