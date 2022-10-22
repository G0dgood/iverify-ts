import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import HeaderTwo from '../components/HeaderTwo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';
export const SLIDER_WIDTH = Dimensions.get('window').width - 160 * 2
export const Select = Dimensions.get('window').width - 40 * 2
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AwesomeAlert from 'react-native-awesome-alerts';
import Ionicons from 'react-native-vector-icons/Ionicons';
const scale = 375;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import { Text, View, } from '../components/Themed';
const Support = () => {

  const [selectedPurpose, setSelectedPurpose] = useState();
  const pickerRef = useRef();
  const scale = 375;

  const Purpose = [
    { label: 'Support', value: 'Support' },
    { label: 'Complain', value: 'Complain' },
    { label: 'Request', value: 'Request' },];


  const [showAlert, setShowAlert] = React.useState(false);



  const showAlerts = () => {
    setShowAlert(true)
  };

  const hideAlert = () => {
    setShowAlert(false)
  };

  const image = <Ionicons style={styles.userIcon} name="ios-checkmark-circle" size={130} />


  return (
    <View style={styles.SupportContainer}  >
      <ScrollView>
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>


          <View style={styles.SupportImageContainer}>
            <Text>
              <MaterialIcons style={styles.HeadphoneColor} name="headset-mic" size={70} />
            </Text>
          </View>
          <View style={styles.HeadphoneText}>
            <Text style={styles.SupportText}>Contact our support team by
              filling out the form below.
            </Text>
          </View>

          <View style={styles.SelectText}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              value={selectedPurpose}
              onValueChange={(value: any) => console.log(value)}
              placeholder={{ label: 'Purpose', value: null }}
              style={{
                ...styles,
                iconContainer: {
                  top: 10,
                  paddingRight: scaleFontSize(33)
                },
              }}
              items={Purpose}
              // @ts-ignore
              Icon={() => {
                return <MaterialIcons style={styles.InputIcon} name="keyboard-arrow-down" size={30} />
              }}
            />
          </View>
          <View style={styles.textAreaContainer}  >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Write message here..."
              placeholderTextColor="#aaa"
              numberOfLines={10}
              multiline={true} />

          </View>
          <TouchableOpacity style={styles.requestBtn} onPress={showAlerts}>
            <Text style={styles.requestBtnColor}>SEND REQUEST</Text>

          </TouchableOpacity>
        </KeyboardAwareScrollView >
      </ScrollView>
      <View >
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          // @ts-ignore
          title={image}
          titleStyle={styles.titleStyle2}
          contentContainerStyle={styles.container2}
          message="Account Updated Successfully"
          messageStyle={styles.messageStyle2}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          cancelButtonStyle={styles.cancelButton2}
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

    </View>
  );
};

export default Support;

const scaleFontSize = (fontSize: number) => {
  const ratio = fontSize / scale; // get ratio based on your standard scale
  const newSize = Math.round(ratio * deviceWidth);
  return newSize;
}


const styles = StyleSheet.create({
  userIcon: {
    color: '#32BEA6'
  },

  titleStyle2: {
    position: 'relative',
    top: -20
  },

  messageStyle2: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    width: 180,
    textAlign: 'center',
    color: "#04224E",
    position: 'relative',
    bottom: 20
  },

  cancelButton2: {
    backgroundColor: '#007AFF',
    position: 'relative',
    width: 181,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 20,
  },

  container2: {

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    width: 319,
    height: 314,
    borderRadius: 20,
  },

  editIcon: {
    color: '#E14ED2',
    fontSize: scaleFontSize(15),
  },

  requestBtnColor: {
    color: '#fff'
  },
  requestBtn: {
    height: 40,
    width: Select,
    borderWidth: 1,
    borderColor: '#BEC3D5',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#007AFF',
  },

  textAreaContainer: {
    borderColor: '#BEC3D5',
    borderWidth: 1,
    padding: 5,
    width: Select,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: 'top',

  },

  SelectText: {
    width: Select,
    alignSelf: 'center',
    marginBottom: 20,
  },

  inputIOS: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#BEC3D5',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    fontSize: scaleFontSize(16),

  },
  inputAndroid: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: '#aaa',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    fontSize: scaleFontSize(16),
  },


  SupportText: {
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
  },

  HeadphoneText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SLIDER_WIDTH,
    marginRight: SLIDER_WIDTH,
    marginBottom: 30,

  },
  HeadphoneColor: {
    color: '#007AFF',
  },
  InputIcon: {
    color: '#007AFF',
    position: 'relative',
    right: -20,
  },

  SupportImageContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#F2F8FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    marginBottom: 20,

  },

  SupportContainer: { 
    paddingTop:30,
    flex: 1,
  }

})