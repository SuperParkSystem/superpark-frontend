import { useState } from "react";
import { View,Text, StyleSheet} from "react-native"

import {CustomButton} from "../components/Button";
import sampleStyles from "../constants/SampleStyles";

const PaymentScreen = () => {
    // temporary states to show random data before integration with backend
    //NOTE: INTEGRATION WITH BACKEND NEEDS TO BE ADDED
    const [durationHr, setDuration] = useState(1);
    const [durationMin, setDurationMin] = useState(13);
    const [durationSec, setDurationSec] = useState(54);
    const [rate, setRate] = useState(3.4);

    return (
        <View style={sampleStyles.container}>
            <View style={sampleStyles.textView}>
                <Text style={sampleStyles.labelText}>Session ID: </Text>
                <Text style={sampleStyles.valueText}>{5}</Text>
            </View>

            <View style={sampleStyles.textView}>
                <Text style={sampleStyles.labelText}>Driver ID: </Text>
                <Text style={sampleStyles.valueText}>{17}</Text>
            </View>

            <View style={sampleStyles.textView}>
                <Text style={sampleStyles.labelText}>Duration: </Text>
                <Text style={sampleStyles.valueText}>{durationHr} hr {durationMin} min {durationSec} sec</Text>
            </View>

            <View style={sampleStyles.textView}>
                <Text style={sampleStyles.labelText}>Cost: </Text>
                <Text style={sampleStyles.valueText}> {(durationHr * 3600 + durationMin * 60 + durationSec) * rate}</Text>
            </View>

            <View style={sampleStyles.textView}>
                <CustomButton title={'Pay'} onPress={() => alert('Payment Confirmed')} />
            </View>
        </View>
    );
    
}

export default PaymentScreen;