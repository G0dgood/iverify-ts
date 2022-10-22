import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Dimensions, ScrollView, Platform } from 'react-native';
import HeaderThree from '../components/HeaderThree';
import Feather from 'react-native-vector-icons/Feather';
import AwesomeAlert from 'react-native-awesome-alerts';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const SLIDER_WIDTH = Dimensions.get('window').width - 160 * 2
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export const WIDTH2 = Dimensions.get('window').width - 60
export const arrow2 = Dimensions.get('window').width - 125
import { Text, View, } from '../components/Themed';

const PasswordSecurity = () => {

  const [showAlert1, setShowAlert1] = React.useState(false);

  const showAlerts = () => {
    setShowAlert1(true)
  };

  const hideAlert = () => {
    setShowAlert1(false)
  };

  const image = <Ionicons style={styles.userIcon} name="ios-checkmark-circle" size={130} />


  return (
    <View style={styles.PasswordSecurityContainer}>
      <ScrollView>
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
          <View style={styles.PasswordSecurityIconContainer}>
            <Text style={styles.PasswordSecurityIcon}>
              <Feather name="lock" size={60} />
            </Text>
          </View>
          <View>
            <Text style={styles.SecurityIconText}>Fill out the form below
              to change your password.
            </Text>
          </View>
          <View>
            <TextInput placeholder='Old Password' placeholderTextColor="#20549D" style={styles.Securityinput} />
            <TextInput placeholder='New Password' placeholderTextColor="#20549D" style={styles.Securityinput} />
            <TextInput placeholder='Confirm Password' placeholderTextColor="#20549D" style={styles.Securityinput} />
            <TouchableOpacity style={styles.SecurityinputButton} onPress={showAlerts}><Text style={styles.SecurityinputButtonColor}>SAVE CHANGES</Text></TouchableOpacity>
          </View>

          <View >
            <AwesomeAlert
              show={showAlert1}
              showProgress={false}
              // @ts-ignore  
              title={image}
              titleStyle={styles.titleStyle}
              contentContainerStyle={styles.container}
              message="Password Changed Successfully"
              messageStyle={styles.messageStyle}
              closeOnTouchOutside={false}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              cancelButtonStyle={styles.cancelButton}
              showConfirmButton={false}
              cancelText="Close"
              // confirmText={'Close'}
              // confirmButtonStyle=
              // confirmButtonColor={styles.cancelButton}
              // confirmButtonTextStyle=
              onCancelPressed={() => {
                hideAlert();
              }}
              onConfirmPressed={() => {
                hideAlert();
              }} />
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
};

export default PasswordSecurity;


const styles = StyleSheet.create({

  userIcon: {
    color: '#007AFF',
  },

  container: {

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    width: 319,
    height: 314,
    borderRadius: 20,
  },

  titleStyle: {
    position: 'relative',
    top: -20
  },

  messageStyle: {
    fontSize: 20,
    fontWeight: '800',
    width: 200,
    textAlign: 'center',
    color: "#04224E",
    position: 'relative',
    bottom: 20,
    fontFamily: 'Poppins_600SemiBold',
  },

  cancelButton: {
    backgroundColor: '#007AFF',
    position: 'relative',
    width: 181,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 20,
    fontFamily: 'Poppins_400Regular',
  },

  SecurityinputButtonColor: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
  },

  SecurityinputButton: {
    marginBottom: 26,
    width: 300,
    height: 50,
    borderColor: '#BEC3D5',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
  },

  Securityinput: {
    marginBottom: 26,
    width: 300,
    height: 50,
    borderColor: '#BEC3D5',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
  },

  SecurityIconText: {
    fontSize: 15,
    textAlign: 'center',
    marginLeft: SLIDER_WIDTH,
    marginRight: SLIDER_WIDTH,
    marginTop: 25,
    marginBottom: Platform.OS === 'android' ? 35 : 42,
    fontFamily: 'Poppins_400Regular',

  },

  PasswordSecurityIcon: {
    color: '#007AFF',
  },

  PasswordSecurityIconContainer: {
    width: 140,
    height: 140,
    backgroundColor: '#F2F8FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: Platform.OS === 'android' ? 10 : 20,

  },

  PasswordSecurityContainer: {
    // backgroundColor: '#fff',
    flex: 1,
  }


})