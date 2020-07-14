import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Button
} from "react-native";
import Header from "./Header";
import UserNumber from "./UserNumber";
import GuessScreen from "./GuessScreen";
const StartGameScreen = (props) => {
  const [userNumberState, setUserNumberState] = useState();
  const [userNumberConfirm, setuserNumberConfirm] = useState();
  const [userGuessStart, setuserGuessStart] = useState(false);
  const getuserNumber = (userNumber) => {
    setUserNumberState(userNumber);
    setuserNumberConfirm(true);
  };
  var confirmNumber = null;

  const StartGameScreen = () => {
    setuserNumberConfirm(false);
  };
  const guessStart = () => {
    setuserGuessStart(true);
  };

  const restartGame = () => {
    setUserNumberState(0);
    setuserNumberConfirm(false);
    setuserGuessStart(false);
  };

  if (userNumberConfirm) {
    confirmNumber = (
      <View style={styles.ConfirmScreen}>
        <Text style={{ marginTop: 20 }}>You Selected</Text>
        <View style={styles.ConfirmNumber}>
          <Text style={{ color: "purple" }}>{userNumberState}</Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Button title="Start Game" onPress={guessStart}></Button>
        </View>
      </View>
    );
  }

  if (userGuessStart) {
    return (
      <GuessScreen userInput={userNumberState} restartNewGame={restartGame} />
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header title="Guess Game"></Header>
        <UserNumber
          style={styles.userNumber}
          getUserNumberMethod={getuserNumber}
          inputValue={userNumberState}
          restartUserGame={restartGame}
        ></UserNumber>
        {confirmNumber}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center"
  },
  userNumber: {
    padding: 10
  },
  ConfirmScreen: {
    width: " 50%",
    height: 250,
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
    borderRadius: 10
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
export default StartGameScreen;
