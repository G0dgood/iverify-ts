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

 const EMPLOYEE = [
  {
   serviceCode: "EMPLOYEE",
   requestId: "cl4zdkkx0121tk1yq80c12nh",
   requestItemId: "cl4zpnskx0121tk1yq80c12nh",
   data: {
    client: {
     value: "Adebunmi Owa",
     comment: "VERIFIED"
    },
    applicant: {
     designation: {
      value: "N/A",
      comment: ""
     },
     searchDate: {
      value: "23/01/2022",
      comment: ""
     },
     fullName: {
      value: "Olufemi Bunmi",
      comment: ""
     },
     residentialAddress: {
      value: "Olonode street",
      comment: ""
     },
     phoneNo: {
      value: "08122019274, 09012348904",
      comment: ""
     },
     meansOfId: {
      value: "N/A",
      comment: ""
     },
     guarantorsName: [
      {
       value: "ADEBOLA DANIEL FOLORUNSHO 08070363393",
       comment: "VERIFIED"
      },
      {
       value: "SEGUN-JACOB AGNES OMOWUNMI 08065706199",
       comment: "VERIFIED"
      }
     ],
     guarantorsAddress: [
      {
       value: "ADEBOLA DANIEL FOLORUNSHO RESIDENTIAL ADDRESS: 17A ABIODUN OLUSOLA MAGODO GRA PHASE 2, LAGOS WORK ADDRESS: SHELL NIG. E & P COMPANY",
       comment: "VERIFIED"
      },
      {
       value: "SEGUN-JACOB AGNES OMOWUNMI RESIDENTIAL ADDRESS: BLOCK 7, FLAT 5 OZOLUA WARD UNIVERSITY OF LAGOS. WORK ADDRESS: UNIVERSITY OF LAGOS MEDICAL CENTER, AKIKA, YABA, LAGOS",
       comment: "VERIFIED"
      }
     ],
     previousWork: {
      value: "FINA TRUST MICROFINANCE BANK 46 TOYIN STREET, IKEJA, LAGOS",
      comment: "VERIFIED"
     }
    },
    searchReport: {
     fullName: {
      value: "Adebunmi Owa",
      comment: "VERIFIED"
     },
     socialMediaName: {
      value: "N/A",
      comment: ""
     },
     residentialAddress: {
      value: "25 OGUNJIRIN STREET, ARAROMI QUARTERS, KETU, LAGOS",
      comment: "THE EMPLOYEE IS A RESIDENT OF THE ADDRESS PROVIDED"
     },
     employmentReport: {
      value: "FINA TRUST MICROFINANCE BANK 46 TOYIN STREET, IKEJA, LAGOS",
      comment: "EMPLOYEE KNOWN: YES DURATION: 28/06/2021 – 24/11/2021 CONDUCT: GOOD REASON FOR LEAVING: VOLUTARY RESIGNATION"
     },
     guarantors: [
      {
       value: "ADEBOLA DANIEL FOLORUNSHO RESIDENTIAL ADDRESS: 17A ABIODUN OLUSOLA MAGODO GRA PHASE 2, LAGOS",
       comment: "CONSENT GIVEN RELATIONSHIP: BROTHER THE GUARANTOR IS A RESIDENT OF THE ADDRESS PROVIDED WE CAN NOT CONFIRM THE WORK ADDRESS. GUARANTOR CLAIMS HE WORKS FROM HOME"
      },
      {
       value: "SEGUN-JACOB AGNES OMOWUNMI RESIDENTIAL ADDRESS: BLOCK 7, FLAT 5 OZOLUA WARD UNIVERSITY OF LAGOS",
       comment: "CONSENT GIVEN RELATIONSHIP: FAMILY FRIENDS THE GUARANTOR HAS KNOWN THE EMPLOYEE FOR OVER 20 YEARS THE GUARANTOR IS A RESIDENT AT THE ADDRESS PROVIDED THE GUARANTOR IS KNOWN AT THE WORK ADDRESS PROVIDED"
      }
     ]
    },
    observation: {
     value: "ALL INFORMATION PRESENTED IS CONSISTENT WITH THE REPORT FOUND UPON SEARCH",
     comment: ""
    },
    visuals: [
     {
      description: "VISUALS OF EMPLOYEE’S RESIDENTIAL ADDRESS - ADDRESS 25 OGUNJIRIN STREET, ARAROMI QUARTERS, KETU, LAGOS",
      imageUrl: "https://via.placeholder.com/150C/"
     }
    ]
   }
  }
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
      <View style={styles.spacerStyle} />

      <View>
       <TextInput
        style={styles.VerificationSelect}
        label='Type of Verification'
        mode='outlined'
        selectionColor='#BEC3D5'
        outlineColor='#BEC4CD'
        activeOutlineColor='#E4E6EE' />
      </View>

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