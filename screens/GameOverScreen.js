import {
  StyleSheet,
  View,
  Image,
  Text,
  useWindowDimensions,
  Dimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constans/colors";

function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 350;
  if (width < 380) {
    imageSize = 80;
  }
  if (height < 480) {
    imageSize = 150;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2,
  }

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle ]}>
        <Image
          style={styles.image}
          source={require("../assets/images/sucsses.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to guess
          the number <Text style={styles.hightlight}>{userNumber}</Text>.{" "}
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
      </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;
// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceHeight < 480 ? 150 : 350,
    // height: deviceHeight < 480 ? 150 : 350,
    // borderRadius: deviceWidth < 480 ? 75 : 175,
    // margin: deviceHeight < 480 ? 12 : 36,
    margin: 26,
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
    textAlign: "center",
    marginVertical: 24,
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
