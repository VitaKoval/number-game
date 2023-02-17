import { StyleSheet, View, Image, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constans/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/sucsses.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.hightlight}>X</Text> rounds to
          guess the number <Text style={styles.hightlight}>Y</Text>.{" "}
        </Text>
          </View>
          <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 175,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
      fontFamily: "open-sans",
      fontSize: 24,
      textAlign: 'center',
      marginVertical: 24,
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
