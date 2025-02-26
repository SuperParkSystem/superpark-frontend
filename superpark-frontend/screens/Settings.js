import * as React from 'react';
import {View, Text} from "react-native";

import sampleStyles from '../constants/SampleStyles';

export default function SettingScreen() {
    return (
        <View style={sampleStyles.container}>
            <Text style={sampleStyles.labelText}>Setting Screen</Text>
        </View>
    );
}