import { StyleSheet,  TextInput, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text, View, } from '../components/Themed';


import React from 'react';

const PasswordReset = ({ navigation }:any) => {

    return (
        <SafeAreaView style={styles.restContainal}>
            <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
                <AntDesign style={styles.arrowleft} name="arrowleft" size={30} onPress={() => navigation.navigate('Login')} />
                <View style={styles.passworddiv1}>
                    <Text> <Fontisto style={styles.unlocked} name="unlocked" size={93} /></Text>
                </View>
                <Text style={styles.passworRest}>Password Reset</Text>
                <Text style={styles.passworRestText}>Enter the email associated with your account and we will send an emai linstruction to reset your password.</Text>
                <TextInput placeholder='Agent ID' placeholderTextColor="#20549D" style={styles.passwordnput} />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordEmail')}>
                    <Text style={styles.textRest}>SEND INSTRUCTIONS</Text>
                </TouchableOpacity>

            </KeyboardAwareScrollView >

        </SafeAreaView>
    )
};

export default PasswordReset;


const styles = StyleSheet.create({
    restContainal: {
        backgroundColor: "white",
        height: '100%',
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
    arrowleft: {
        marginLeft: 20,
    },
    unlocked: {
        color: '#007AFF',
        alignSelf: 'center',
        position: 'absolute',
    },
    text3: {
        fontSize: 16,
        textAlign: 'center',
        color: '#20549D',
        marginTop: 32,
    },

    passwordnput: {
        height: 50,
        padding: 8,
        fontSize: 16,
        borderColor: '#BEC3D5',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 27,
        fontFamily: 'Poppins_400Regular'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 50,
        backgroundColor: '#007AFF',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 26,
    },
    textRest: {
        fontSize: 14,
        lineHeight: 21,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Poppins_600SemiBold',
    },
    passworddiv1: {
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
    passworRest: {
        marginTop: 48,
        fontSize: 22,
        color: '#04224E',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Poppins_800ExtraBold',
    },
    passworRestText: {
        marginRight: 40,
        marginLeft: 40,
        color: '#04224E',
        marginTop: 3,
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular'
    },



});
