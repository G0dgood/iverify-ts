import React from 'react';
import { StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonToggleGroup from 'react-native-button-toggle-group';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Text, View, } from '../components/Themed';
const PersonalInformation = () => {

  const [value, setValue] = React.useState('Personal');
  const [showAlert, setShowAlert] = React.useState(false);



  const showAlerts = () => {
    setShowAlert(true)
  };

  const hideAlert = () => {
    setShowAlert(false)
  };

  const image = <Ionicons style={styles.userIcon} name="ios-checkmark-circle" size={130} />

  return (
    <View style={styles.PersonalInformationContainer} lightColor="#fff" darkColor="#000">

      <View style={styles.InformationIconContainer}>
        <Text>
          <Feather style={styles.userIcon1} name="user" size={70} />
        </Text>
      </View>
      <View style={styles.ButtonToggleInfo}>
        {/* @ts-ignore */}
        <ButtonToggleGroup
          highlightBackgroundColor={'#fff'}
          highlightTextColor={'#007AFF'}
          // inactiveBackgroundColor={'#aaa'}
          inactiveTextColor={'#BEC3D5'}
          values={['Personal', 'Bank', 'NOK']}
          value={value}
          onSelect={(val: React.SetStateAction<string>) => setValue(val)}
        />
      </View>
      {/* Personal Information Section */}
      <View>
        {value === "Personal" &&
          <View style={styles.PersonalInformationView}>
            <View  >
              <View style={styles.modalTextInput}>
                <View style={styles.modalTextInputCOl}>
                  <View style={styles.modalTextInputMargin}>
                    <Text style={styles.infoInputColor}>First Name</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      Kelechi
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Last Name</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      Adekunle
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Phone</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      08162680095
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Email</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      johndoe@gmail.com
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Age</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      Nov, 18th 1990
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Gender</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      Male
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Address</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      Lekki Gardens Phase II
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.infoInputButton} onPress={showAlerts}>
              <Text style={styles.infoInputSaveButton}>SAVE CHANGES</Text>
            </TouchableOpacity>
          </View>}
      </View>
      {/* Bank Infomation */}
      <View>
        {value === "Bank" &&
          <View style={styles.PersonalInformationView}>
            <View  >
              <View style={styles.modalTextInput}>
                <View style={styles.modalTextInputCOl}>
                  <View style={styles.modalTextInputMargin}>
                    <Text style={styles.infoInputColor}>Account Name</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>Kelechi Adekunle
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Account Number</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      2178005104
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Bank Name</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      Providus Bank
                    </Text>
                  </View>
                </View>

              </View>
            </View>
            <TouchableOpacity style={styles.infoInputButton} onPress={showAlerts}>
              <Text style={styles.infoInputSaveButton}>SAVE CHANGES</Text>
            </TouchableOpacity>
          </View>}
      </View>
      {/* NOK Information */}
      <View>
        {value === "NOK" &&
          <View style={styles.PersonalInformationView}>
            <View  >
              <View style={styles.modalTextInput}>
                <View style={styles.modalTextInputCOl}>
                  <View style={styles.modalTextInputMargin}>
                    <Text style={styles.infoInputColor}>Next of Kin </Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      James Adekunle
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Relationship</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      Brother
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Phone</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      08032090933
                    </Text>
                  </View>
                </View>
                <View style={styles.modalTextInputCOl}>
                  <View><Text style={styles.infoInputColor}>Address</Text></View>
                  <View>
                    <Text style={styles.infoInputColor}>
                      Road 4 house 5 VGC
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.infoInputButton} onPress={showAlerts}>
              <Text style={styles.infoInputSaveButton}>SAVE CHANGES</Text>
            </TouchableOpacity>
          </View>}
      </View>

      <View >
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          // @ts-ignore
          title={image}
          titleStyle={styles.titleStyle}
          contentContainerStyle={styles.container}
          message="Account Updated Successfully"
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


    </View>
  );
}

export default PersonalInformation;


const styles = StyleSheet.create({
  titleStyle: {
    position: 'relative',
    top: -20
  },

  messageStyle: {
    fontSize: 20,
    fontWeight: '800',
    width: 180,
    textAlign: 'center',
    color: "#04224E",
    position: 'relative',
    bottom: 20
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
  },

  container: {

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    width: 319,
    height: 314,
    borderRadius: 20,
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },


  infoInputSaveButton: {
    color: '#fff',
  },

  infoInputButton: {
    width: 255,
    height: 39,
    backgroundColor: "#007AFF",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
    alignSelf: 'center',
    borderRadius: 5,
  },

  PersonalInformationView: {
    marginRight: 28,
    marginLeft: 28,
  },

  infoInputColor: {
    color: '#9CA5C5',
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',

  },


  modalTextInputMargin: {
    paddingRight: '10%',

  },

  modalTextInputCOl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? 12 : 20,
    alignItems: 'flex-end',
    borderBottomColor: '#BEC3D5',
    borderBottomWidth: 1
  },

  modalTextInput: {

    flexDirection: 'column',
    justifyContent: 'space-between',

  },

  ButtonToggleInfo: {
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#F6F6F6',
    padding: 2,
    borderRadius: 6,
    borderColor: '#aaa',
    marginBottom: 10,
    borderWidth: 0.5,
    marginTop: 20,
  },

  userIcon1: {
    color: '#007AFF'
  },
  userIcon: {
    color: '#32BEA6'
  },

  InformationIconContainer: {

    width: 150,
    height: 140,
    backgroundColor: '#F2F8FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 100,

  },

  PersonalInformationContainer: {
    flex: 1,
    // backgroundColor: '#fff'
  }

})