import {View ,Text, StyleSheet } from "react-native";

function GameScreen() {
    return <View style={styles.screenContainer}>
       <Text>Game Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 24,
    }
})

export default GameScreen;