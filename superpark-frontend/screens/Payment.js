import { useState } from "react";
import { View,Text, StyleSheet } from "react-native"

const PaymentScreen = () => {
    // temporary states to show random data before integration with backend
    //NOTE: INTEGRATION WITH BACKEND NEEDS TO BE ADDED
    const [durationHr, setDuration] = useState(1);
    const [durationMin, setDurationMin] = useState(13);
    const [durationSec, setDurationSec] = useState(54);
    const [rate, setRate] = useState(3.4);

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.labelText}>Session ID: </Text>
                <Text style={styles.valueText}>{5}</Text>
            </View>

            <View style={styles.textView}>
                <Text style={styles.labelText}>Driver ID: </Text>
                <Text style={styles.valueText}>{17}</Text>
            </View>

            <View style={styles.textView}>
                <Text style={styles.labelText}>Duration: </Text>
                <Text style={styles.valueText}>{durationHr} hr {durationMin} min {durationSec} sec</Text>
            </View>

            <View style={styles.textView}>
                <Text style={styles.labelText}>Cost: </Text>
                <Text style={styles.valueText}> {(durationHr * 3600 + durationMin * 60 + durationSec) * rate}</Text>
            </View>

            
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },
    textView: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    labelText: {
        fontSize: 20,
        color: '#B0B0B0',
        marginBottom: 5,
    },
    valueText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 500,
    },
});

export default PaymentScreen;