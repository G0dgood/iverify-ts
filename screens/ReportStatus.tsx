// import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
// import HeaderTwo from '../components/HeaderTwo';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { Appbar, DarkTheme, DefaultTheme, Provider, Surface, ThemeProvider, }
//  from "react-native-paper";
// import { TextInput } from 'react-native-paper';
// export const TextInputwidth = Dimensions.get('window').width - 60
// import { Text, View, } from '../components/Themed';
// const ReportStatus = () => {


//  const [showDropDown, setShowDropDown] = useState(false);
//  const [showIdDropDown, setShowIdDropDown] = useState(false);
//  const [verification, setVerification] = useState('Select Verification');
//  const [idCardType, setIdCardType] = useState('');
//  const [nightMode, setNightmode] = useState(false);

//  const verificationList = [
//   {
//    label: "Employee verification",
//    value: "Employee verification",
//   },
//   {
//    label: "Tenant verification",
//    value: "Tenant verification",
//   },
//   {
//    label: "Guarantor verification ",
//    value: "Guarantor verification ",
//   },
//   {
//    label: "Previous Work Address",
//    value: "Previous Work Address",
//   },
//  ];
//  const iDCardList = [
//   {
//    label: "Passport",
//    value: "Passport",
//   },
//   {
//    label: "Work ID Card",
//    value: "Work ID Card",
//   },
//   {
//    label: "NIN ",
//    value: "NIN ",
//   },
//   {
//    label: "Voters Card",
//    value: "Voters Card",
//   },
//  ];

//  const EMPLOYEE = [
//   {
//    serviceCode: "EMPLOYEE",
//    requestId: "cl4zdkkx0121tk1yq80c12nh",
//    requestItemId: "cl4zpnskx0121tk1yq80c12nh",
//    data: {
//     client: {
//      value: "Adebunmi Owa",
//      comment: "VERIFIED"
//     },
//     applicant: {
//      designation: {
//       value: "N/A",
//       comment: ""
//      },
//      searchDate: {
//       value: "23/01/2022",
//       comment: ""
//      },
//      fullName: {
//       value: "Olufemi Bunmi",
//       comment: ""
//      },
//      residentialAddress: {
//       value: "Olonode street",
//       comment: ""
//      },
//      phoneNo: {
//       value: "08122019274, 09012348904",
//       comment: ""
//      },
//      meansOfId: {
//       value: "N/A",
//       comment: ""
//      },
//      guarantorsName: [
//       {
//        value: "ADEBOLA DANIEL FOLORUNSHO 08070363393",
//        comment: "VERIFIED"
//       },
//       {
//        value: "SEGUN-JACOB AGNES OMOWUNMI 08065706199",
//        comment: "VERIFIED"
//       }
//      ],
//      guarantorsAddress: [
//       {
//        value: "ADEBOLA DANIEL FOLORUNSHO RESIDENTIAL ADDRESS: 17A ABIODUN OLUSOLA MAGODO GRA PHASE 2, LAGOS WORK ADDRESS: SHELL NIG. E & P COMPANY",
//        comment: "VERIFIED"
//       },
//       {
//        value: "SEGUN-JACOB AGNES OMOWUNMI RESIDENTIAL ADDRESS: BLOCK 7, FLAT 5 OZOLUA WARD UNIVERSITY OF LAGOS. WORK ADDRESS: UNIVERSITY OF LAGOS MEDICAL CENTER, AKIKA, YABA, LAGOS",
//        comment: "VERIFIED"
//       }
//      ],
//      previousWork: {
//       value: "FINA TRUST MICROFINANCE BANK 46 TOYIN STREET, IKEJA, LAGOS",
//       comment: "VERIFIED"
//      }
//     },
//     searchReport: {
//      fullName: {
//       value: "Adebunmi Owa",
//       comment: "VERIFIED"
//      },
//      socialMediaName: {
//       value: "N/A",
//       comment: ""
//      },
//      residentialAddress: {
//       value: "25 OGUNJIRIN STREET, ARAROMI QUARTERS, KETU, LAGOS",
//       comment: "THE EMPLOYEE IS A RESIDENT OF THE ADDRESS PROVIDED"
//      },
//      employmentReport: {
//       value: "FINA TRUST MICROFINANCE BANK 46 TOYIN STREET, IKEJA, LAGOS",
//       comment: "EMPLOYEE KNOWN: YES DURATION: 28/06/2021 – 24/11/2021 CONDUCT: GOOD REASON FOR LEAVING: VOLUTARY RESIGNATION"
//      },
//      guarantors: [
//       {
//        value: "ADEBOLA DANIEL FOLORUNSHO RESIDENTIAL ADDRESS: 17A ABIODUN OLUSOLA MAGODO GRA PHASE 2, LAGOS",
//        comment: "CONSENT GIVEN RELATIONSHIP: BROTHER THE GUARANTOR IS A RESIDENT OF THE ADDRESS PROVIDED WE CAN NOT CONFIRM THE WORK ADDRESS. GUARANTOR CLAIMS HE WORKS FROM HOME"
//       },
//       {
//        value: "SEGUN-JACOB AGNES OMOWUNMI RESIDENTIAL ADDRESS: BLOCK 7, FLAT 5 OZOLUA WARD UNIVERSITY OF LAGOS",
//        comment: "CONSENT GIVEN RELATIONSHIP: FAMILY FRIENDS THE GUARANTOR HAS KNOWN THE EMPLOYEE FOR OVER 20 YEARS THE GUARANTOR IS A RESIDENT AT THE ADDRESS PROVIDED THE GUARANTOR IS KNOWN AT THE WORK ADDRESS PROVIDED"
//       }
//      ]
//     },
//     observation: {
//      value: "ALL INFORMATION PRESENTED IS CONSISTENT WITH THE REPORT FOUND UPON SEARCH",
//      comment: ""
//     },
//     visuals: [
//      {
//       description: "VISUALS OF EMPLOYEE’S RESIDENTIAL ADDRESS - ADDRESS 25 OGUNJIRIN STREET, ARAROMI QUARTERS, KETU, LAGOS",
//       imageUrl: "https://via.placeholder.com/150C/"
//      }
//     ]
//    }
//   }
//  ];

//  return (
//   <View style={styles.ReportStatusContainer}>
//    <View style={styles.ReportStatus}>
//     <Text style={styles.ReportStatusText}>STATUS:</Text>
//     <Text style={styles.ReportStatusText2}>Pending</Text>
//    </View>
//    <ScrollView>
//     <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
//      <View style={styles.VerificationTextInput}>
//       <View style={styles.spacerStyle} />

//       <View>
//        <TextInput
//         style={styles.VerificationSelect}
//         label='Type of Verification'
//         mode='outlined'
//         selectionColor='#BEC3D5'
//         outlineColor='#BEC4CD'
//         activeOutlineColor='#E4E6EE' />
//       </View>

//       <TextInput
//        style={styles.VerificationSelect}
//        label='Full Name'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE' />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Address'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE' />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Phone Number'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE' />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Previous Work Address'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//        multiline={true}
//        numberOfLines={5} />

//       <TextInput
//        style={styles.VerificationSelect}
//        label='ID Card Type'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />

//       <TextInput
//        style={styles.VerificationSelect}
//        label='No file chosen'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//        multiline={true}
//        numberOfLines={5} />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='ID Card No.'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Date of Visitation.'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Is the person known at the address.'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Is the residential address valid'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Capture picture'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Is the person known at the address'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Color of house'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Type of house'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Is the person known at the address'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Upload document if any'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//       />
//       <TextInput
//        style={styles.VerificationSelect}
//        label='Remarks'
//        mode='outlined'
//        selectionColor='#BEC3D5'
//        outlineColor='#BEC4CD'
//        activeOutlineColor='#E4E6EE'
//        multiline={true}
//        numberOfLines={5}
//       />

//      </View>
//     </KeyboardAwareScrollView>
//    </ScrollView>
//   </View>
//  );
// };

// export default ReportStatus;


// const styles = StyleSheet.create({





//  spacerStyl1113e: {
//   justifyContent: 'center',


//   borderColor: 'red'
//  },
//  spacerStyle: {
//   marginBottom: 15,
//  },

//  VerificationSelect: {
//   marginTop: 15,
//   backgroundColor: '#F7F8FA',
//   borderRadius: 5,
//   color: '#20549D',
//   fontFamily: 'Poppins_400Regular',
//  },

//  VerificationTextInput: {
//   width: TextInputwidth,
//   alignSelf: 'center'
//  },

//  ReportStatusText2: {
//   fontFamily: 'Poppins_400Regular',
//   backgroundColor: '#FEEAEA',
//   color: '#FC5E3B',
//   paddingLeft: 5,
//   paddingRight: 5,
//  },
//  ReportStatusText: {
//   fontFamily: 'Poppins_600SemiBold',
//   color: '#20549D',
//   marginRight: 5,
//  },

//  ReportStatus: {
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignSelf: 'center'
//  },

//  ReportStatusContainer: {
//   paddingTop: 30,
//   // backgroundColor: '#fff',
//   flex: 1,

//  }

// })




import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, TextInput, ScrollView, Button, Image, Dimensions } from 'react-native';
// import FormInput from '../../components/FormInput';
import { List } from 'react-native-paper';
import * as Haptics from 'expo-haptics';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ReportStatus = ({ navigation }: any) => {

  const route = useRoute();
  // @ts-ignore
  const { name } = route.params;

  const [email, setEmail] = useState('johndoe@yahoo.com');
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();




  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);


  const [client, setclient] = useState<any>('')
  const [clientscomment, setclientscomment] = useState<any>('')
  const [designation, setdesignation] = useState<any>('')
  const [designationcomment, setdesignationcomment] = useState<any>('')
  const [searchDate, setsearchDate] = useState<any>('')
  const [searchDatecomment, setsearchDatecomment] = useState<any>('')
  const [fullName, setfullName] = useState<any>('')
  const [fullNamecomment, setfullNamecomment] = useState<any>('')
  const [residentialAddress, setresidentialAddress] = useState<any>('')
  const [residentialAddresscomment, setresidentialAddresscomment] = useState<any>('')
  const [phoneNo, setphoneNo] = useState<any>('')
  const [phoneNocomment, setphoneNocomment] = useState<any>('')
  const [meansOfId, setmeansOfId] = useState<any>('')
  const [meansOfIdcomment, setmeansOfIdcomment] = useState<any>('')
  const [guarantorsName, setguarantorsName] = useState<any>('')
  const [guarantorsNamecomment, setguarantorsNamebcomment] = useState<any>('')
  const [guarantorsNamecomment2, setguarantorsNamebcomment2] = useState<any>('')
  const [guarantorsAddress, setguarantorsAddress] = useState<any>('')
  const [guarantorsAddresscomment1, setguarantorsAddresscomment1] = useState<any>('')
  const [guarantorsAddresscomment2, setguarantorsAddresscomment2] = useState<any>('')
  const [previousWork, setpreviousWork] = useState<any>('')
  const [previousWorkcomment, setpreviousWorkcomment] = useState<any>('')
  const [socialMediaName, setsocialMediaName] = useState<any>('')
  const [socialMediaNamecomment, setsocialMediaNamecomment] = useState<any>('')
  const [employmentReport, setemploymentReport] = useState<any>('')
  const [employmentReportcomment, setemploymentReportcomment] = useState<any>('')
  // const [guarantors1, setguarantors1] = useState<any>('')
  // const [guarantors1comment, setguarantors1comment] = useState<any>('')
  // const [guarantors2, setguarantors2] = useState<any>('')
  // const [guarantors2comment, setguarantors2comment] = useState<any>('')
  const [observation, setobservation] = useState<any>('')
  const [observationcomment, setobservationcomment] = useState<any>('')
  const [visuals, setvisuals] = useState<any>('')
  const [visualscomment, setvisualscomment] = useState<any>('')
  const [visualsimageUrl, setvisualsimageUrl] = useState<any>('')



  useEffect(() => {
    setclient('inputContainer')
    setdesignation('')
    setsearchDate('')
    setfullName('')
    setresidentialAddress('')
    setphoneNo('')
    setmeansOfId('')
    setguarantorsName('')
    setguarantorsAddress('')
    setpreviousWork('')
    setsocialMediaName('')
    setemploymentReport('')
    // setguarantors1('')
    // setguarantors2('')
    setvisuals('')
    setobservation('')
  }, [])







  const [Loading, setLoading] = useState<any>(false);
  const [id, setid] = useState('')
  const [ids, setids] = useState(false)

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded1);
  const [expanded1, setExpanded1] = React.useState(true);
  const handlePress1 = () => setExpanded1(!expanded1);
  const [expanded2, setExpanded2] = React.useState(true);
  const handlePress2 = () => setExpanded2(!expanded2);
  const [expanded3, setExpanded3] = React.useState(true);
  const handlePress3 = () => setExpanded3(!expanded3);
  const [expanded4, setExpanded4] = React.useState(true);
  const handlePress4 = () => setExpanded4(!expanded4);
  const [expanded5, setExpanded5] = React.useState(true);
  const handlePress5 = () => setExpanded5(!expanded5);
  const [expanded6, setExpanded6] = React.useState(true);
  const handlePress6 = () => setExpanded6(!expanded6);
  const [expanded7, setExpanded7] = React.useState(true);
  const handlePress7 = () => setExpanded7(!expanded7);
  const [expanded8, setExpanded8] = React.useState(true);
  const handlePress8 = () => setExpanded8(!expanded8);
  const [expanded9, setExpanded9] = React.useState(true);
  const handlePress9 = () => setExpanded9(!expanded9);
  const [expanded10, setExpanded10] = React.useState(true);
  const handlePress10 = () => setExpanded10(!expanded10);
  const [expanded11, setExpanded11] = React.useState(true);
  const handlePress11 = () => setExpanded11(!expanded10);
  const [expanded12, setExpanded12] = React.useState(true);
  const handlePress12 = () => setExpanded12(!expanded10);
  const [expanded13, setExpanded13] = React.useState(true);
  const handlePress13 = () => setExpanded13(!expanded10);

  const handlePaymentConfirmed = () => {
    navigation.replace('PaymentConfirmed')
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  }


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      // @ts-ignore
      setImage(result.uri);
    }
  };

  // const pickImage1 = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     // @ts-ignore
  //     setImage1(result.uri);
  //   }
  // };
  // const pickImage12 = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     // @ts-ignore
  //     setImage2(result.uri);
  //   }
  // };


  const handleLogin = async () => {
    setLoading(false)
    if (!ids) {
      setTimeout(() => {
        setLoading(true)
        setids(true)
      }, 2000);

    }

  }


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{name}</Text>

      <List.Section >
        {/* client  */}
        <List.Accordion
          title="Client"
          expanded={expanded1}
          onPress={handlePress1}>
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              {client}
            </Text>
            <TextInput
              value={clientscomment}
              onChangeText={setclientscomment}
              style={styles.input}
              placeholder={'client comment'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>


        {/* Designation  */}
        <List.Accordion
          title="Customer Information"
          expanded={expanded2}
          onPress={handlePress2}>
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              Designation
            </Text>
            <TextInput
              value={designation}
              style={styles.input}
              numberOfLines={1}
              placeholder={'Designation'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>

        {/* Search Date */}
        <List.Accordion
          title="Search Date"
          expanded={expanded3}
          onPress={handlePress3}>
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              searchDate
            </Text>
            <TextInput
              value={searchDate}
              style={styles.input}
              numberOfLines={1}
              placeholder={'Search Date'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>


        {/* fullName */}
        <List.Accordion
          title="FullName"
          expanded={expanded4}
          onPress={handlePress4}>

          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              fullName
            </Text>
            <TextInput
              value={fullName}
              style={styles.input}
              numberOfLines={1}
              placeholder={'fullName'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>

        { }
        <List.Accordion
          title="Residential Address" >
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              residentialAddress
            </Text>
            <TextInput
              value={residentialAddress}
              style={styles.input}
              placeholder={'residentialAddress'}
              placeholderTextColor="#1113"
            />
          </View>

        </List.Accordion>

        {/* meansOfId */}
        <List.Accordion
          title="Phone No"
          expanded={expanded5}
          onPress={handlePress5}>

          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              phoneNo
            </Text>
            <TextInput
              value={phoneNo}
              style={styles.input}
              numberOfLines={1}
              placeholder={'phoneNo'}
              placeholderTextColor="#1113"
            />
          </View>

        </List.Accordion>

        {/* Mean so fId */}
        <List.Accordion
          title="Means Of Identification"
          expanded={expanded6}
          onPress={handlePress6}>
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              meansOfId
            </Text>
            <TextInput
              value={meansOfId}
              style={styles.input}
              // numberOfLines={1}
              placeholder={'meansOfId'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>

        {/* Guarantors Name */}
        <List.Accordion
          title="Guarantors Name"
          expanded={expanded7}
          onPress={handlePress7}>
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              Guarantors Name
            </Text>
            <TextInput
              value={guarantorsName}
              style={styles.input}
              placeholder={'Guarantors Name'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>



        {/* Guarantors Address */}
        <List.Accordion
          title="Guarantors Address"
          expanded={expanded8}
          onPress={handlePress8}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              Guarantors Address
            </Text>
            <TextInput
              value={guarantorsAddresscomment1}
              style={styles.input}
              placeholder={'Guarantors Address Comment 1'}
              placeholderTextColor="#1113"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={guarantorsAddresscomment2}
              style={styles.input}
              placeholder={'Guarantors Address comment 2'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>

        {/* Previous Work */}
        <List.Accordion
          title="Previous Work"
          expanded={expanded9}
          onPress={handlePress9}>
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              Previous Work
            </Text>
            <TextInput
              value={previousWorkcomment}
              style={styles.input}
              placeholder={'previous Work Comment'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>


        {/* Social Media Name */}
        <List.Accordion
          title="Social Media Name"
          expanded={expanded10}
          onPress={handlePress10}>
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              socialMediaName
            </Text>
            <TextInput
              value={socialMediaNamecomment}
              style={styles.input}
              placeholder={'Social Media Name comment'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>


        {/* fullName */}
        <List.Accordion
          title="Employment Report"
          expanded={expanded9}
          onPress={handlePress9}>

          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              employmentReportcomment
            </Text>
            <TextInput
              value={employmentReportcomment}
              style={styles.input}
              numberOfLines={1}
              placeholder={'Employment Report comment'}
              placeholderTextColor="#1113"
            />
          </View>

        </List.Accordion>


        <List.Accordion
          title="Observation"
          expanded={expanded10}
          onPress={handlePress10}>
          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              Observation
            </Text>
            <TextInput
              value={observationcomment}
              style={styles.input}
              placeholder={'Observation comment'}
              placeholderTextColor="#1113"
            />
          </View>
        </List.Accordion>

        {/* Visuals */}
        <List.Accordion
          title="Visuals"
          expanded={expanded11}
          onPress={handlePress11}>

          <View style={styles.inputContainer}>
            <Text style={styles.textTitle}>
              Visuals
            </Text>
            <TextInput
              value={visualscomment}
              style={styles.input}
              numberOfLines={1}
              placeholder={'visuals comment'}
              placeholderTextColor="#1113"
            />
          </View>

        </List.Accordion>


        <List.Accordion
          title="Visuals ImageUrl" >
          <View style={styles.inputContainer}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Button title="	Take a photo" onPress={pickImage} />
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
          </View>
        </List.Accordion>
        {/* <List.Accordion
          title="Passpord Photograph" >
          <View style={styles.inputContainer}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Button title="	Take a photo" onPress={pickImage} />
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Capture ID Card" >
          <View style={styles.inputContainer}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Button title="Capture ID Card" onPress={pickImage1} />
              {image1 && <Image source={{ uri: image1 }} style={{ width: 200, height: 200 }} />}
            </View>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Capture Signature" >

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Button title="Capture Signature" onPress={pickImage12} />
            {image2 && <Image source={{ uri: image2 }} style={{ width: 200, height: 200, }} />}
          </View>
        </List.Accordion> */}
      </List.Section>
      <View style={styles.Submit}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handlePaymentConfirmed}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default ReportStatus;


const styles = StyleSheet.create({
  inputbutton: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: "green",
    right: 10,
    top: 30,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputbutton1: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: "red",
    right: 10,
    top: 30,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Submit: { marginBottom: 100, },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#012168',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Poppins_400Regular',
  },

  textTitle: {
    marginBottom: 6,
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold'
  },

  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#333',

    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    padding: 20,
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Poppins_400Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins_400Regular',
    color: 'grey',
  },
});
