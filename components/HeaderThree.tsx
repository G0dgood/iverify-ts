import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const HeaderThree = ({ Titles, navigate }: any) => {



    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.mainContainerHeaderThree}>
            <View>
                <Text onPress={() => navigation.navigate(navigate)}>
                    <AntDesign name="arrowleft" size={25} />
                </Text>
            </View>
            <View>
                <Text style={styles.headerTitle}>{Titles}</Text>
            </View>
            <Text >
                <AntDesign style={styles.imageHeader} name="infocirlce" size={25} onPress={() => navigation.navigate('AboutUs')} />
            </Text>

        </SafeAreaView>
    )
};

export default HeaderThree;


const styles = StyleSheet.create({

    headerTitle: {
        marginTop: 30,
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',

    },


    mainContainerHeaderThree: {
        // backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },

    imageHeader: {
        width: 40,
        height: 40,
        color: '#007AFF'
    },



});