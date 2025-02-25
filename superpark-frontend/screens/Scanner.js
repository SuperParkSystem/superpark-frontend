import * as React from 'react';
import {View, Text, Button, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

import sampleStyles from '../constants/SampleStyles';
import {CustomLargeButton} from '../components/Button';

// camera screen view
const CameraScreen = ({scanned, setScanned, setData}) => {
    // size of cutout box
    const innerSize = 300;
    const {width, height} = Dimensions.get('window');

    return (
        <CameraView
        style={styles.cameraStyle}
        facing='back'
        active={!scanned}
        barcodeScannerSettings={{
            barcodeTypes: ['qr'],
        }}
        onBarcodeScanned={({data}) => {
            setScanned(true);
            setData(data);
        }}
        >
            {/* Top section */}
            <View style={{ width, height: (height - innerSize) / 2, backgroundColor: "black", opacity: 0.5 }} />

            {/* Middle section (left + cutout + right) */}
            <View style={{ flexDirection: "row" }}>
                <View style={{ width: (width - innerSize) / 2, height: innerSize, backgroundColor: "black", opacity: 0.5 }} />
                <View style={{ width: innerSize, height: innerSize, backgroundColor: "transparent" }} />
                <View style={{ width: (width - innerSize) / 2, height: innerSize, backgroundColor: "black", opacity: 0.5 }} />
            </View>

            {/* Bottom section */}
            <View style={{ width, height: (height - innerSize) / 2, backgroundColor: "black", opacity: 0.5 }} />
        </CameraView>
    );
}

// temporary function to show url obtained from qr code
const DataScreen = ({data, setScanned}) => {
    return (
        <View>
            <Text style={sampleStyles.labelText}>Barcode Data: </Text> 
            <Text style={sampleStyles.valueText}>{data}</Text>
            <CustomLargeButton title={'Scan Again'} onPress={() => setScanned(false)} />
        </View>
    );
}

const ScannerScreen = () => {
    // states for camera permissions and settings
    const [perms, reqPerms] = useCameraPermissions();
    const [scanned, setScanned] = React.useState(false);
    const [data, setData] = React.useState('');

    if (!perms) {
        return <View />;
    }

    if (!perms.granted) {
        return (
            <View>
                <Text>Permission is needed to view camera</Text>
                <Button onPress={reqPerms} title="Grant Permissions" />
            </View>
        );
    }
  
    return (
        <View style={sampleStyles.container}>
            {!scanned?
            <CameraScreen scanned={scanned} setScanned={setScanned} setData={setData}/>
            :<DataScreen data={data} setScanned={setScanned} />}
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraStyle: {
        width: '100%',
        height: '100%',
    },
})

export default ScannerScreen;