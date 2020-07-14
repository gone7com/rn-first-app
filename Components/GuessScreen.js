import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  NativeModules
} from "react-native";
import GameOverScreen from "./GameOverScreen";

const randomNumberBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  return randNum;
};

const GuessScreen = (props) => {
  const greaterThen = useRef(99);
  const lessThen = useRef(1);

  const trackAttempt = useRef(1);

  const [computerGuess, setComputerGuess] = useState(
    randomNumberBetween(lessThen.current, greaterThen.current)
  );
  const [gameoverResult, setgameoverResult] = useState(false);

  useEffect(() => {
    if (computerGuess === parseInt(props.userInput)) {
      setgameoverResult(true);
    }
  });

  const lessThenRand = () => {
    if (parseInt(props.userInput) > computerGuess) {
      alert("Dont Cheat");
      return;
    }
    trackAttempt.current++;
    greaterThen.current = computerGuess;
    console.log(lessThen.current + ":" + greaterThen.current);
    setComputerGuess(
      randomNumberBetween(lessThen.current, greaterThen.current)
    );
  };
  const greaterThenRand = () => {
    if (parseInt(props.userInput) < computerGuess) {
      alert("Dont Cheat");
      return;
    }
    trackAttempt.current++;
    lessThen.current = computerGuess;
    console.log(lessThen.current + ":" + greaterThen.current);
    setComputerGuess(
      randomNumberBetween(lessThen.current, greaterThen.current)
    );
  };
  if (gameoverResult) {
    return (
      <GameOverScreen
        attempts={trackAttempt.current}
        userNum={props.userInput}
        resetGame={props.restartNewGame}
      />
    );
  }

  return (
    <View style={styles.ConfirmScreen}>
      <Text style={{ marginTop: 20 }}>Computer Guessed</Text>
      <View style={styles.ConfirmNumber}>
        <Text style={{ color: "purple" }}>{computerGuess}</Text>
      </View>
      <View
        style={{
          width: "60%",
          marginTop: 25,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Button
          style={{
            marginRight: 10
          }}
          title="Less "
          onPress={lessThenRand}
        ></Button>
        <Button style={{}} title="Greater" onPress={greaterThenRand}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ConfirmScreen: {
    flexDirection: "column",
    width: "80%",
    height: "25%",
    borderColor: "black",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    shadowRadius: 6,
    shadowOpacity: 0.26,
    marginTop: 50,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    marginLeft: 40
  },
  ConfirmNumber: {
    borderColor: "purple",
    borderRadius: 10,
    borderWidth: 2,
    width: 65,
    height: 65,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default GuessScreen;
