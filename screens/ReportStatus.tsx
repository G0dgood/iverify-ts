import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import HeaderTwo from '../components/HeaderTwo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Appbar, DarkTheme, DefaultTheme, Provider, Surface, ThemeProvider, }
 from "react-native-paper";
import { TextInput } from 'react-native-paper';
export const TextInputwidth = Dimensions.get('window').width - 60
import { Text, View, } from '../components/Themed';
const ReportStatus = () => {


 const [showDropDown, setShowDropDown] = useState(false);
 const [showIdDropDown, setShowIdDropDown] = useState(false);
 const [verification, setVerification] = useState('Select Verification');
 const [idCardType, setIdCardType] = useState('');
 const [nightMode, setNightmode] = useState(false);

 const verificationList = [
  {
   label: "Employee verification",
   value: "Employee verification",
  },
  {
   label: "Tenant verification",
   value: "Tenant verification",
  },
  {
   label: "Guarantor verification ",
   value: "Guarantor verification ",
  },
  {
   label: "Previous Work Address",
   value: "Previous Work Address",
  },
 ];
 const iDCardList = [
  {
   label: "Passport",
   value: "Passport",
  },
  {
   label: "Work ID Card",
   value: "Work ID Card",
  },
  {
   label: "NIN ",
   value: "NIN ",
  },
  {
   label: "Voters Card",
   value: "Voters Card",
  },
 ];

 return (
  <View style={styles.ReportStatusContainer}>
   <View style={styles.ReportStatus}>
    <Text style={styles.ReportStatusText}>STATUS:</Text>
    <Text style={styles.ReportStatusText2}>Pending</Text>
   </View>
   <ScrollView>
    <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
     <View style={styles.VerificationTextInput}>
      <Provider theme={nightMode ? DarkTheme : DefaultTheme}>
       <View style={styles.spacerStyle} />

       <TextInput
        style={styles.VerificationSelect}
        label='Type of Verification'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE' />
       <TextInput
        style={styles.VerificationSelect}
        label='Full Name'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE' />
       <TextInput
        style={styles.VerificationSelect}
        label='Address'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE' />
       <TextInput
        style={styles.VerificationSelect}
        label='Phone Number'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE' />
       <TextInput
        style={styles.VerificationSelect}
        label='Previous Work Address'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
        multiline={true}
        numberOfLines={5} />

       <TextInput
        style={styles.VerificationSelect}
        label='ID Card Type'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />

       <TextInput
        style={styles.VerificationSelect}
        label='No file chosen'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
        multiline={true}
        numberOfLines={5} />
       <TextInput
        style={styles.VerificationSelect}
        label='ID Card No.'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Date of Visitation.'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Is the person known at the address.'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Is the residential address valid'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Capture picture'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Is the person known at the address'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Color of house'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Type of house'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Is the person known at the address'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Upload document if any'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Remarks'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE'
        multiline={true}
        numberOfLines={5}
       />

      </Provider>
     </View>
    </KeyboardAwareScrollView>
   </ScrollView>
  </View>
 );
};

export default ReportStatus;


const styles = StyleSheet.create({





 spacerStyleeee: {
  justifyContent: 'center',


  borderColor: 'red'
 },
 spacerStyle: {
  marginBottom: 15,
 },

 VerificationSelect: {
  marginTop: 15,
  backgroundColor: '#F7F8FA',
  borderRadius: 5,
  color: '#20549D',
  fontFamily: 'Poppins_400Regular',
 },

 VerificationTextInput: {
  width: TextInputwidth,
  alignSelf: 'center'
 },

 ReportStatusText2: {
  fontFamily: 'Poppins_400Regular',
  backgroundColor: '#FEEAEA',
  color: '#FC5E3B',
  paddingLeft: 5,
  paddingRight: 5,
 },
 ReportStatusText: {
  fontFamily: 'Poppins_600SemiBold',
  color: '#20549D',
  marginRight: 5,
 },

 ReportStatus: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignSelf: 'center'
 },

 ReportStatusContainer: {
  paddingTop: 30,
  // backgroundColor: '#fff',
  flex: 1,

 }

})