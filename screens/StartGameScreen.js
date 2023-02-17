import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constans/colors";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNamber = parseInt(enteredNumber);

    if (isNaN(chosenNamber) || chosenNamber <= 0 || chosenNamber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okey",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    onPickedNumber(chosenNamber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  // instructionText: {
  //   color: Colors.accent500,
  //   fontSize: 24,
  // },
  // inputContainer: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 36,
  //   marginHorizontal: 24,
  //   padding: 16,
  //   backgroundColor: Colors.primary800,
  //   borderRadius: 8,
  //   elevation: 4,
  //   shadowColor: "black",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 6,
  //   shadowOpacity: 0.25,
  // },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
