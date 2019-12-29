import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Spacer } from "../components/Spacer";
import { useContext } from "react";
import { AuthContext } from "../context/authProvider";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      </Spacer>
      <Spacer>
        <Button title="Sign out" onPress={signout}></Button>
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15
  }
});

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />
};
export { AccountScreen };
