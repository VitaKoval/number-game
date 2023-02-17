import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constans/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber
  );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(); 
        }
    },[currentGuess, userNumber, onGameOver])

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    direction === "lower"
      ? (maxBoundary = currentGuess)
      : (minBoundary = currentGuess);

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </PrimaryButton>
      </View>

      <View>
        <Text>Higher or Lower?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
  },
  // text: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     color: "#ddb52f",
  //     textAlign: 'center',
  //     borderWidth: 2,
  //     borderColor: "#ddb52f",
  //     padding: 12,
  // }
});

export default GameScreen;
