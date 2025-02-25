import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

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

const PaymentConfirmation = ({ amountPaid, paymentMethod, invoiceNumber, date }) => {
    const [hovered, setHovered] = useState(null);
    const [clicked, setClicked] = useState(null);

    return (
        <View style={styles.mainContainer}>
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
                    onPress={() => setClicked('done')}
                >
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: modernColors.background,
    },
    paymentBox: {
        width: '90%',
        maxWidth: 500,
        padding: 30,
        borderRadius: 15,
        backgroundColor: modernColors.cardBg,
        alignItems: 'center',
    },
    icon: {
        width: 80,
        height: 80,
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
        padding: 15,
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
        fontSize: 16,
        color: modernColors.text,
        textAlign: 'center',
        marginVertical: 10,
    },
    contactText: {
        fontSize: 14,
        color: modernColors.textMuted,
        textAlign: 'center',
        marginBottom: 20,
    },
    confirmButton: {
        backgroundColor: modernColors.primary,
        padding: 15,
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

export default PaymentConfirmation;