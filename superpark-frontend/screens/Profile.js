import * as React from 'react';
import {View, Text} from "react-native";

import sampleStyles from '../constants/SampleStyles';

function ProfileScreen() {
  
    return (
      <View style={sampleStyles.container}>
        <Text style={sampleStyles.labelText}>Profile Screen</Text>
      </View>
    );
}

export default ProfileScreen;