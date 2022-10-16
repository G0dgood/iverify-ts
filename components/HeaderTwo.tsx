import React from 'react';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const HeaderTwo = ({ Titles, navigates }: any) => {



 const navigation = useNavigation();

 return (
  <SafeAreaView style={styles.mainContainer}>
   <View style={styles.headerarrowleft}>

    <Text onPress={() => navigation.navigate(navigates)}>
     <AntDesign style={styles.arrowleft} name="arrowleft" size={25} />
    </Text>
   </View>
   <View>
    <Text style={styles.headerTitle}>{Titles}</Text>
   </View>
   <TouchableOpacity style={styles.profileImage} onPress={() => navigation.navigate('Accounts')}>
    <ImageBackground style={styles.imageHeader} source={require('../assets/images/john.png')} />
   </TouchableOpacity>
  </SafeAreaView>
 )
};

export default HeaderTwo;


const styles = StyleSheet.create({

 headerarrowleft: {
  alignItems: 'center',
  justifyContent: 'center'
 },

 headerTitle: {
  marginTop: 30,
  textAlign: 'center',
  fontFamily: 'Poppins_600SemiBold',

 },

 arrowleft: {
  marginLeft: 20,
 },
 mainContainer: {
  alignItems: 'center',
  // justifyContent: 'center',
  // backgroundColor: "#fff",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 10,
  marginLeft: 20,
  marginRight: 20,
  marginBottom: 20,
  paddingTop: Platform.OS === 'android' ? 25 : 0,
 },

 imageHeader: {
  width: 40,
  height: 40,

 },


 profileImage: {
  borderRadius: 5,
  width: 40,
  height: 40,
  overflow: 'hidden',

 }

});