import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

const UserNumber = (props) => {
  const [userNumberEntered, setuserNumberEntered] = useState();

  const getNumber = (numberEntered) => {
    setuserNumberEntered(numberEntered);
  };
  const resetInput = () => {
    setuserNumberEntered("");
    props.restartUserGame();
  };
  const sendNumber = (numberEntered) => {
    const userNumberMethod = props.getUserNumberMethod;
    if (
      isNaN(userNumberEntered) ||
      userNumberEntered <= 0 ||
      userNumberEntered > 99
    ) {
      Alert.alert("Invalid Number!", "Enter a Number between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInput }
      ]);
      userNumberMethod("");
      return;
    }

    userNumberMethod(userNumberEntered);
  };
  return (
    <View style={Style.GameScreen}>
      <TextInput
        style={Style.Number}
        placeholder="0"
        onChangeText={getNumber}
        keyboardType="number-pad"
        value={userNumberEntered}
      ></TextInput>
      <Button title="Submit" onPress={sendNumber} />
    </View>
  );
};

const Style = StyleSheet.create({
  GameScreen: {
    width: " 80%",
    height: "30%",
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    shadowRadius: 6,
    shadowOpacity: 0.26,
    marginTop: 50,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10
  },
  button: {
    width: "10%"
  },
  Number: {
    paddingBottom: 20,
    paddingLeft: 30,
    width: 100,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10
  }
});
export default UserNumber;
