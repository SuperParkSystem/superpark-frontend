import {bootstrapDarkColors} from "./Colors";

const sampleStyles = {
    container: {
        backgroundColor: bootstrapDarkColors.background,
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
        color: bootstrapDarkColors.text,
        marginBottom: 5,
    },
    valueText: {
        fontSize: 20,
        color: bootstrapDarkColors.textMuted,
        fontWeight: 500,
    },
    button: {
        width: 80,
        height: 40,
        backgroundColor: bootstrapDarkColors.primary,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    largeButton: {
        width: 120,
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
}

export default sampleStyles;