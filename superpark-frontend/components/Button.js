import { TouchableOpacity, StyleSheet, Text } from "react-native";

import bootstrapDarkColors from "../constants/Colors";

const CustomButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 40,
        backgroundColor: bootstrapDarkColors.primary,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: bootstrapDarkColors.text,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default CustomButton;