import { Text, StyleSheet } from "react-native";
import Colors from "../../constans/colors";

function Title({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}
// Opponent's Guess
const styles = StyleSheet.create({
    text: {
       fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
})

export default Title;