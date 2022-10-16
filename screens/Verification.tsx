import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import HeaderTwo from '../components/HeaderTwo';
import DropDown from "react-native-paper-dropdown";
import { Appbar, DarkTheme, DefaultTheme, Provider, Surface, ThemeProvider, } from "react-native-paper";
import { Text, View, } from '../components/Themed';
export const TextInputwidth = Dimensions.get('window').width - 60

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Verification = () => {

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
  <SafeAreaView style={styles.VerificationContainer}>
   <HeaderTwo Titles={'VERIFICATION'} navigates={'Schedule'} />
   <ScrollView>
    <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
     <View style={styles.VerificationTextInput} >
      <Provider theme={nightMode ? DarkTheme : DefaultTheme}>
       <View style={styles.spacerStyle} />
       <DropDown
        label={"Type of Verification"}
        mode={"outlined"}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={verification}
        setValue={setVerification}
        list={verificationList}
        // @ts-ignore
        style={styles.VerificationSelect}
        selectionColor='gray'
        outlineColor='#BEC4CD'
        activeOutlineColor='#007AFF'
       />
       <TextInput
        style={styles.VerificationSelect}
        label='Full Name'
        mode='outlined'
        selectionColor='gray'
        outlineColor='#BEC4CD'
        activeOutlineColor='#007AFF' />
       <TextInput
        style={styles.VerificationSelect}
        label='Address'
        mode='outlined'
        selectionColor='gray'
        outlineColor='#BEC4CD'
        activeOutlineColor='#007AFF' />
       <TextInput
        style={styles.VerificationSelect}
        label='Phone Number'
        mode='outlined'
        selectionColor='gray'
        outlineColor='#BEC4CD'
        activeOutlineColor='#007AFF' />
       <TextInput
        style={styles.VerificationSelect}
        label='Previous Work Address'
        mode='outlined'
        selectionColor='gray'
        outlineColor='#BEC4CD'
        activeOutlineColor='#007AFF'
        multiline={true}
        numberOfLines={5} />
       <View style={styles.spacerStyle} />
       <View style={styles.spacerStyleeee}>
        <DropDown
         label={"ID Card Type"}
         mode={"outlined"}
         visible={showIdDropDown}
         showDropDown={() => setShowIdDropDown(true)}
         onDismiss={() => setShowIdDropDown(false)}
         value={idCardType}
         setValue={setIdCardType}
         list={iDCardList}
         style={{ color: 'red' }}
         // selectionColor='gray'
         // outlineColor='#BEC4CD'
         // activeOutlineColor='#007AFF'
         activeColor='#000'
         // errorText={colors.error}
         // dropDownContainerMaxHeight={30}
         // theme={true}
         // @ts-ignore
         dropDownStyle={{ color: 'red', justifyContent: 'center', alignSelf: 'center' }}
        // dropDownItemSelectedTextStyle={{ color: 'red' }}
        // dropDownItemSelectedStyle={{ color: 'red' }}
        // dropDownItemStyle={{ color: 'red' }}
        // dropDownItemTextStyle={{ color: 'red' }}
        // activityIndicatorColor='red'
        // itemContainerStyle='red'
        />

        <TextInput
         style={styles.VerificationSelect}
         label='No file chosen'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
         multiline={true}
         numberOfLines={5} />
        <TextInput
         style={styles.VerificationSelect}
         label='ID Card No.'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Date of Visitation.'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Is the person known at the address.'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Is the residential address valid'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Capture picture'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Is the person known at the address'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Color of house'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Type of house'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Is the person known at the address'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Upload document if any'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
        />
        <TextInput
         style={styles.VerificationSelect}
         label='Remarks'
         mode='outlined'
         selectionColor='gray'
         outlineColor='#BEC4CD'
         activeOutlineColor='#007AFF'
         multiline={true}
         numberOfLines={5}
        />
        <View style={styles.spacerStyle} />
        <TouchableOpacity style={styles.VerificationButton}>
         <Text style={styles.VerificationButtonText}>Upload Report</Text>
        </TouchableOpacity>

       </View>
      </Provider>
     </View>
    </KeyboardAwareScrollView>

   </ScrollView>
  </SafeAreaView>
 );
};

export default Verification;

const styles = StyleSheet.create({

 VerificationButtonText: {
  color: '#fff',
  fontFamily: 'Poppins_600SemiBold',
 },

 VerificationButton: {
  height: 42,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#007AFF',
  borderRadius: 5,
 },

 spacerStyleeee: {
  justifyContent: 'center',


  borderColor: 'red'
 },
 spacerStyle: {
  marginBottom: 15,
 },

 VerificationSelect: {
  marginTop: 15,
  backgroundColor: '#fff',
  borderRadius: 5,
  borderColor: 'red',
  color: '#20549D',
  fontFamily: 'Poppins_400Regular',
 },

 VerificationTextInput: {
  width: TextInputwidth,
  alignSelf: 'center'
 },

 VerificationContainer: {
  backgroundColor: '#fff',
  flex: 1,
  justifyContent: 'center',
 }

})