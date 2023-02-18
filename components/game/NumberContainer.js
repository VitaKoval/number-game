import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

import Colors from '../../constans/colors';

function NumberContainer({ children }) {
    const { width } = useWindowDimensions();

    // styles depend on window width/height
    const paddingDistance = width < 380 ? 12 : 24;
    const marginDistance = width < 380 ? 12 : 24;
    const fontSizeDimensions = width < 380 ? 28 : 36;

    return (
        <View style={[styles.container, {padding: paddingDistance, margin: marginDistance}]}>
            <Text style={[styles.numberText, {fontSize: fontSizeDimensions}]}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
    }
})