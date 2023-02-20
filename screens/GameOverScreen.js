import { StyleSheet, View, Image, Text, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constans/colors";

function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    // styles depend on window width/height
    const imageDimensions = height < 480 ? 150 : 350;
    const marginImageDimensions = height < 480 ? 12 : 36;
    const borderRadiusDimensions = width < 480 ? 75 : 175;

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, {width: imageDimensions, height: imageDimensions, borderRadius: borderRadiusDimensions, margin: marginImageDimensions}]}>
        <Image
          style={styles.image}
          source={require("../assets/images/sucsses.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to
                  guess the number <Text style={styles.hightlight}>{userNumber}</Text>.{" "}
        </Text>
          </View>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
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
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
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
