import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={Style.header}>
      <Text>{props.title}</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10
  },
  headerTitle: {
    color: "black",
    fontSize: 90
  }
});
export default Header;
