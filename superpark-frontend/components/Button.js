import { TouchableOpacity, StyleSheet, Text } from "react-native";

import sampleStyles from "../constants/SampleStyles";

const CustomButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={sampleStyles.button} onPress={onPress}>
            <Text style={sampleStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const CustomLargeButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={sampleStyles.largeButton} onPress={onPress}>
            <Text style={sampleStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export {CustomButton, CustomLargeButton};