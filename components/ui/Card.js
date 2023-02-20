import { Text, StyleSheet, View, useWindowDimensions } from "react-native";
import Colors from "../../constans/colors";

function Card({ children }) {
  const { width } = useWindowDimensions();

  // styles depend on window width/height
  const marginTopDistance = width < 380 ? 18 : 36;

    return (
        <View style={[styles.card, {marginTop: marginTopDistance}]}>{children}</View>
    )
}
export default Card;

const styles = StyleSheet.create({
   card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})

