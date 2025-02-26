import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Platform } from 'react-native';

const modernColors = {
    background: "#000000", // Black Background
    text: "#FFFFFF", // White Text
    textMuted: "#B0B0B0", // Light Grey Label Text
    primary: "#007BFF", // Blue for Buttons and Important Elements
    darkBlue: "#003366", // Dark Blue for Clicked Button Borders
    inputBg: "#1E1E1E", // Grey for Input Boxes
    cardBg: "#48484A", // Dark Grey for Containers
    buttonText: "#FFFFFF", // White for Button Text
};

const PaymentConfirmation = ({ amountPaid, paymentMethod, invoiceNumber, date, setPay }) => {
    const [hovered, setHovered] = useState(null);
    const [clicked, setClicked] = useState(null);

    return (
            <View style={styles.paymentBox}>
                {/* Icon */}
                <Image source={{ uri: 'https://img.icons8.com/fluency/96/paid.png' }} style={styles.icon} />
                <Text style={styles.headerText}>Payment Successful</Text>
                
                {/* Animated Success Message */}
                <Text style={styles.successMessage}>Your payment has been processed successfully.</Text>
                
                <View 
                    style={[styles.infoSection, hovered === 'amount' && styles.hoverEffect]}
                    onMouseEnter={() => setHovered('amount')} 
                    onMouseLeave={() => setHovered(null)}
                >
                    <Text style={styles.labelText}>Amount Paid:</Text>
                    <Text style={styles.valueText}>${amountPaid}</Text>
                </View>
                
                <View 
                    style={[styles.infoSection, hovered === 'method' && styles.hoverEffect]}
                    onMouseEnter={() => setHovered('method')} 
                    onMouseLeave={() => setHovered(null)}
                >
                    <Text style={styles.labelText}>Payment Method:</Text>
                    <Text style={styles.valueText}>{paymentMethod}</Text>
                </View>
                
                <View 
                    style={[styles.infoSection, hovered === 'invoice' && styles.hoverEffect]}
                    onMouseEnter={() => setHovered('invoice')} 
                    onMouseLeave={() => setHovered(null)}
                >
                    <Text style={styles.labelText}>Invoice Number:</Text>
                    <Text style={styles.valueText}>{invoiceNumber}</Text>
                </View>
                
                <View 
                    style={[styles.infoSection, hovered === 'date' && styles.hoverEffect]}
                    onMouseEnter={() => setHovered('date')} 
                    onMouseLeave={() => setHovered(null)}
                >
                    <Text style={styles.labelText}>Date:</Text>
                    <Text style={styles.valueText}>{date}</Text>
                </View>
                
                <Text style={styles.thankYouText}>Thank you for using our service!</Text>
                <Text style={styles.contactText}>For inquiries, contact support@parkinglot.com</Text>
                
                <TouchableOpacity 
                    style={[styles.confirmButton, clicked === 'receipt' && styles.clickedEffect]}
                    onPress={() => setClicked('receipt')}
                >
                    <Text style={styles.buttonText}>Download Receipt</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={[styles.confirmButton, clicked === 'done' && styles.clickedEffect]}
                    onPress={() => {setClicked('done'), setPay(false)}}
                >
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
            </View>
    );
};

const PaymentScreen = () => {
    // temporary states to show random data before integration with backend
    //NOTE: INTEGRATION WITH BACKEND NEEDS TO BE ADDED
    const [durationHr, setDuration] = useState(1);
    const [durationMin, setDurationMin] = useState(13);
    const [durationSec, setDurationSec] = useState(54);
    const [rate, setRate] = useState(3.4);

    const [pay, setPay] = useState(false);

    const today = new Date(Date.now());

    return (
        <View style={styles.mainContainer}>
            {!pay?
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
                <TouchableOpacity 
                    style={styles.confirmButton}
                    onPress={() => setPay(true)}
                >
                    <Text style={styles.buttonText}>Pay</Text>
                </TouchableOpacity>
            </View>
            :
            <PaymentConfirmation 
            amountPaid={100}
            paymentMethod={'Card'}
            invoiceNumber={'14234'}
            date={today.toDateString()}
            setPay={setPay}
            />  
            }
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
    mainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: modernColors.background,
    },
    paymentBox: {
        height: '90%',
        width: '90%',
        maxWidth: 500,
        padding: 10,
        borderRadius: 15,
        backgroundColor: modernColors.cardBg,
        alignItems: 'center',
    },
    icon: {
        display: Platform.OS == 'web' ? 'none' : '' ,
        width: 80,
        height: 60,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: modernColors.text,
    },
    successMessage: {
        fontSize: 16,
        color: modernColors.text,
        textAlign: 'center',
        marginBottom: 15,
    },
    infoSection: {
        width: '100%',
        height: Platform.OS == 'web' ? '15%' : '10%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: modernColors.inputBg,
    },
    hoverEffect: {
        borderWidth: 2,
        borderColor: modernColors.primary,
    },
    clickedEffect: {
        borderWidth: 2,
        borderColor: modernColors.darkBlue,
    },
    labelText: {
        fontSize: 14,
        color: modernColors.textMuted,
        marginBottom: 5,
    },
    valueText: {
        fontSize: 20,
        color: modernColors.text,
        fontWeight: '500',
    },
    thankYouText: {
        display: Platform.OS == 'web' ? 'none' : '',
        fontSize: 16,
        color: modernColors.text,
        textAlign: 'center',
        marginVertical: 10,
    },
    contactText: {
        display: Platform.OS == 'web' ? 'none' : '',
        fontSize: 14,
        color: modernColors.textMuted,
        textAlign: 'center',
        marginBottom: 20,
    },
    confirmButton: {
        backgroundColor: modernColors.primary,
        padding: Platform.OS == 'web' ? 12 : 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 14,
        color: modernColors.buttonText,
        fontWeight: 'bold',
    },
});



export default PaymentScreen;