import React from "react";
import { StyleSheet, SafeAreaView,  TouchableOpacity, Platform } from "react-native"; 
import { MaterialIcons, AntDesign } from "@expo/vector-icons"; 
import { Text, View, } from '../components/Themed';
const PasswordEmail = ({ navigation }:any) => (
    <SafeAreaView style={styles.resetMailContainer}>
        <AntDesign style={styles.arrowleft} name="arrowleft" size={30} onPress={() => navigation.navigate('PasswordReset')} />
        <View style={styles.mailSent}>
            <Text> <MaterialIcons style={styles.emailRead} name="mark-email-read" size={93} /></Text>
        </View>
        <Text style={styles.CheckMail}>Check your mail</Text>
        <Text style={styles.instructions}>We have sent a pasword reset
            instructions to your email.</Text>
        <Text style={styles.checkSpam}>Did you not receive the email? Check your spam or try another email</Text>
        <TouchableOpacity style={styles.instructionsBtn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.instructionsBtnText}>GO BACK TO LOG IN</Text>
        </TouchableOpacity>

    </SafeAreaView>
);

export default PasswordEmail


const styles = StyleSheet.create({
    resetMailContainer: {
        backgroundColor: "white",
        height: '100%',
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
    arrowleft: {
        marginLeft: 20,
    },

    emailRead: {
        color: '#007AFF',
        alignSelf: 'center',
        position: 'absolute',
    },

    instructionsBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 50,
        backgroundColor: '#007AFF',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 38,

    },

    instructionsBtnText: {
        fontSize: 14,
        lineHeight: 21,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Poppins_600SemiBold',
    },

    mailSent: {
        width: 200,
        height: 194,
        backgroundColor: '#F2F8FF',
        borderRadius: 100,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
    },

    CheckMail: {
        marginTop: 48,
        fontSize: 22,
        color: '#04224E',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Poppins_600SemiBold',
    },
    instructions: {
        marginRight: 80,
        marginLeft: 80,
        color: '#04224E',
        marginTop: 3,
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular'
    },
    checkSpam: {
        marginRight: 50,
        marginLeft: 50,
        color: '#04224E',
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular'
    },


})