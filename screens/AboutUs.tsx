import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text, Platform } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Zocial from 'react-native-vector-icons/Zocial';
import { FontAwesome, Zocial, Ionicons, AntDesign } from '@expo/vector-icons';  


const AboutUs = ({ navigation }:any) => {


  return (
    <SafeAreaView style={styles.infoContainer}>
      <StatusBar style="auto" />
      <AntDesign style={styles.arrowleft} name="arrowleft" size={25} onPress={() => navigation.navigate('Accounts')} />
      <Text style={styles.companyinfo}> COMPANY INFO </Text>
      <Text style={styles.AboutUsText}>About us</Text>
      <Text style={styles.AboutUsSubText}>We are focused on solving and digitizing Nigeria’s biggest identity challenges, through Company, Certificate, Employee, Tenant and Property Verification for individuals and businesses.
      </Text>
      <View style={styles.aboutLine} />
      <View style={styles.textAddress}>
        <View style={styles.locationCover}>

          <Ionicons name="location-outline" style={styles.locationIcon} size={30} />
        </View>
        <View style={styles.address}>
          <Text style={styles.address1}>The Brunswick Courts, 7/9 Adebisi Oyenola Street Idado Estate, Lekki Epe express way Lagos, Nigeria.</Text>

        </View>
      </View>
      <View style={styles.textAddress}>
        <View style={styles.locationCover}>

          <FontAwesome name="phone-square" style={styles.locationIcon} size={30} />
        </View>
        <View style={styles.address}>
          <Text style={styles.address}>+234 809 066 6746 </Text>
          <Text style={styles.address}>+234 809 066 6745 </Text>

        </View>
      </View>
      <View style={styles.textAddress}>
        <View style={styles.locationCover}>

          <Zocial name="email" size={30} style={styles.locationIcon} />
        </View>
        <View style={styles.address}>
          <Text style={styles.address}>info@iverify.ng</Text>
          <Text style={styles.address}>support@iverify.ng</Text>

        </View>
      </View>

    </SafeAreaView>
  )
};


export default AboutUs;


const styles = StyleSheet.create({

  infoContainer: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },

  address1: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular'
  },
  address: {
    fontSize: 12,
    flex: 1,
    marginRight: 60,
    fontFamily: 'Poppins_400Regular'
  },

  locationIcon: {
    color: '#007AFF',
    justifyContent: 'center',
    textAlign: 'center'
  },

  locationCover: {

    marginLeft: 40,
    marginRight: 15,
  },

  textAddress: {
    flexDirection: 'row',
    paddingTop: 24,
  },

  aboutLine: {
    borderBottomColor: '#BEC3D5',
    borderBottomWidth: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
  },

  arrowleft: {
    marginTop: 20,
    marginLeft: 20,
  },

  companyinfo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold',
  },
  AboutUsText: {
    marginLeft: 40,
    marginTop: 40,
    fontWeight: '900',
    fontSize: 30,
    fontFamily: 'Poppins_800ExtraBold'
  },
  AboutUsSubText: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 5,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular'

  }
})