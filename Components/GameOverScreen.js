import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={Style.GameOver}>
      <Text style={{ marginVertical: 15, marginLeft: 35 }}>Game Is Over</Text>
      <View style={Style.Imagepng}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/gameover2.jpg")}
        />
      </View>

      <Text style={{ marginVertical: 15, marginLeft: 35 }}>
        Oppenents Try :{props.attempts}
      </Text>
      <Text style={{ marginVertical: 15, marginLeft: 35 }}>
        Your Number was: {props.userNum}
      </Text>

      <Button
        title="New Game"
        style={{ marginVertical: 35, marginLeft: 0 }}
        onPress={props.resetGame}
      ></Button>
    </View>
  );
};

const Style = StyleSheet.create({
  GameOver: {
    flexDirection: "column",
    marginVertical: 25,

    width: "90%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  Imagepng: {
    marginVertical: 15,
    marginLeft: 55,
    width: 350,
    height: 350,
    borderRadius: 175,
    borderWidth: 3,
    overflow: "hidden"
  }
});
export default GameOverScreen;
