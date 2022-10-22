import { TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { MaterialIndicator, UIActivityIndicator } from 'react-native-indicators'
import { View, Text } from '../components/Themed'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import { useAppSelector } from '../hooks/useStore'
// import { baseUrl } from '../shared/baseUrl'

const DetailsPage = (data: unknown) => {

	const { user } = useAppSelector((state: { auth: any; }) => state.auth)
	const route = useRoute();
	// @ts-ignore
	// const { id } = route.params;

 

	// const [data, setdata] = useState<any>([]);
	// const [isError, setisError] = useState(false);
	// const [loading, setLoading] = useState(false);
	// const [greet, setGreet] = useState("");
	// const [messages, setMessages] = useState("");

	// React.useEffect(() => {
	// 	const config = {
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Authorization: `Bearer ${user?.accessToken}`,
	// 		},
	// 	};

	// 	setLoading(true);
	// 	axios
	// 		.get(baseUrl + `/properties/${id}`, config)
	// 		.then((res) => {
	// 			setdata(res?.data);
	// 			// console.log("requests", res.data);
	// 			setLoading(false);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			setMessages(err?.message);
	// 			setLoading(false);
	// 			setisError(true);
	// 		});
	// }, [user?.accessToken]);


	const [family_name, setfamily_name] = useState('')
	const [given_name, setgiven_name] = useState('')
	const [other_names, setother_names] = useState('')
	const [mobile_number, setmobile_number] = useState('')
	const [other_mobile_number, setother_mobile_number] = useState('')
	const [email, setemail] = useState('')
	const [nationality, setnationality] = useState('')
	const [dob, setdob] = useState('')
	const [residential_address, setresidential_address] = useState('')
	const [correspondence_address, setcorrespondence_address] = useState('')
	const [occupation, setoccupation] = useState('')
	const [name_of_employer, setname_of_employer] = useState('')
	const [address_of_employer, setaddress_of_employer] = useState('')
	const [next_of_kin, setnext_of_kin] = useState('')
	const [mobile_number_next_of_kin, setmobile_number_next_of_kin] = useState('')
	const [relationship_to_next_of_kin, setrelationship_to_next_of_kin] = useState('')
	const [bespoke_combinations, setbespoke_conbination] = useState('');
	const [special_request, setspecial_request] = useState('');
	const [payment_option, setpayment_option] = useState('Direct Financing');
	const [Token, setToken] = useState('');
	const [initials, setinitials] = useState<any>([]);



	// useEffect(() => {
	// 	try { 
	// 		if (80) {
	// 			setfamily_name(data?.client[0]?.family_name)
	// 			setgiven_name(data?.client[0]?.given_name)
	// 			setother_names(data?.client[0]?.other_names)
	// 			setgiven_name(data?.client[0]?.given_name)
	// 			setmobile_number(data?.client[0]?.mobile_number)
	// 			setother_mobile_number(data?.client[0]?.other_mobile_number)
	// 			setemail(data?.client[0]?.email)
	// 			setnationality(data?.client[0]?.nationality)
	// 			setdob(data?.client[0]?.dob)
	// 			setresidential_address(data?.client[0]?.residential_address)
	// 			setcorrespondence_address(data?.client[0]?.correspondence_address)
	// 			setoccupation(data?.client[0]?.occupation)
	// 			setname_of_employer(data?.client[0]?.name_of_employer)
	// 			setaddress_of_employer(data?.client[0]?.address_of_employer)
	// 			setmobile_number_next_of_kin(data?.client[0]?.mobile_number_next_of_kin)
	// 			setrelationship_to_next_of_kin(data?.client[0]?.relationship_to_next_of_kin)
	// 			setbespoke_conbination(data?.client[0]?.bespoke_conbination)
	// 			setspecial_request(data?.client[0]?.special_request)
	// 			setpayment_option(data?.client[0]?.payment_option)
	// 		}
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// }, [data])

 

	// if (loading) {
	// 	return (
	// 		< UIActivityIndicator color='red' size={30} style={styles.loading} />
	// 	);
	// }



	return (
		<View style={styles.container}>
			<View style={styles.pdetailsContainer} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">


				<View style={styles.generaldetailsContainer}>
					<View style={styles.generaldetail}  >
						<View>
							<Text style={styles.pldetailsTitle}>Apartment Details</Text>
						</View>

						<View style={styles.pldetailsTitleSub}>
							<View>
								<Text style={styles.TitleSub}>{data?.apartmentId} </Text>
								<Text >{data?.size} SQM </Text>
							</View>
							<View>
								<Text style={styles.vertical} />
							</View>
							<View>
								<Text style={[styles.TitleSub, { color: "green" }]}> ${data?.price}</Text>
								<Text style={{}} > {data?.status}</Text>
							</View>
						</View>

					</View>
				</View>
				<ScrollView
					style={[{ paddingBottom: 80 }]}
					showsVerticalScrollIndicator={false}>
					<View>
						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >Employment & Education</Text>
						</View>

						<View style={styles.PersonalInformationView}>
							<View>
								<View style={styles.modalTextInput}>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>OCCUPATION :</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{family_name}
											</Text>
										</View>
									</View>

									<View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>NAME OF EMPLOYER :</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{name_of_employer}
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View><Text style={styles.infoInputColor}>ADDRESS OF EMPLOYER :</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{address_of_employer}
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View>
												<Text style={styles.infoInputColor}>CORRESPONDENCE ADDRESS :</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{correspondence_address}
												</Text>
											</View> 
										</View> 
									</View> 
									<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
										<Text style={styles.containerTitle} >Additional Information</Text>
									</View>

									<View style={styles.modalTextInputCOl}>
										<View>
											<Text style={styles.infoInputColor}>Payment Option:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{payment_option}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View><Text style={styles.infoInputColor}>SPECIAL REQUEST :</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{special_request}
											</Text>
										</View>
									</View>
									{/* <View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>SPECIAL REQUEST :</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												Yes
											</Text>
										</View>
									</View> */}
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Payment spread :</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{payment_option}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Payment monthly :</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{payment_option}
											</Text>
										</View>
									</View>
								</View>
							</View>
							<View style={styles.buttom}   >
							</View>
						</View>

						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >Personal Information</Text>
						</View>
						<View style={styles.PersonalInformationView}>
							<View>
								<View style={styles.modalTextInput}>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Unit price:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{special_request}
											</Text>
										</View>
									</View>

									<View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>OTHER NAMES:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{other_names}
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View><Text style={styles.infoInputColor}>PHONE NUMBER:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{mobile_number}
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View>
												<Text style={styles.infoInputColor}>EMAIL ADDRESS :</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{email}
												</Text>
											</View>
										</View>
									</View>


									<View style={styles.modalTextInputCOl}>
										<View><Text style={styles.infoInputColor}>DATE OF BIRTH :</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{dob}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View><Text style={styles.infoInputColor}>MARITAL STATUS :</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{/* {data?.client[0]?.dob} */}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>NEXT OF KIN :</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{next_of_kin}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>NATIONALITY</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{nationality}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCONext}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>RESIDENTIAL ADDRESS</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{residential_address}
											</Text>
										</View>
									</View>
									<View>

										<View style={styles.modalTextInputCONext}>
											<Text style={styles.infoInputColor}>CORRESPONDENCE ADDRESS:</Text>
											<Text style={styles.infoInputColor}>
												{correspondence_address}
											</Text>
										</View>
									</View>

								</View>
							</View>
						</View>
						<View style={styles.buttom}   >
						</View>
					</View>
				</ScrollView >
			</View >
		</View >
	)
}

export default DetailsPage


const styles = StyleSheet.create({
	loading: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	vertical: {
		height: '100%',
		width: 1,
		backgroundColor: '#909090',
	},
	TitleSub: {
		fontWeight: 'bold',
	},

	container: {
		flex: 1,
	},

	modalTextInputMargin: {
		paddingRight: '10%',

	},

	PersonalInformationView: {
		marginRight: 20,
		marginLeft: 20,

	},
	modalTextInput: {

		flexDirection: 'column',
		justifyContent: 'space-between',

	},

	modalTextInputCOl: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: Platform.OS === 'android' ? 12 : 20,

		borderBottomColor: '#BEC3D5',
		borderBottomWidth: 1
	},
	modalTextInputCONext: {
		flexDirection: 'column',
		// justifyContent: 'space-between',
		paddingTop: Platform.OS === 'android' ? 12 : 20,

		borderBottomColor: '#BEC3D5',
		borderBottomWidth: 1
	},


	infoInputColor: {
		fontSize: 14,
		fontFamily: 'Poppins_400Regular',

	},

	AccountDetailsflex: {
		flexDirection: "row",
		justifyContent: 'space-between',
	},

	buttom: {
		borderRadius: 4,
		marginTop: 25,
		height: 10,

	},

	buttomText: {
		padding: 10,
		textAlign: 'center',
		color: "#fff",

	},

	containerAccount: { paddingTop: 20, paddingLeft: 20, paddingBottom: 10, },

	containerAccount1: {
		padding: 20,
		borderBottomColor: "#D1D1D1",
		borderBottomWidth: 1,


	},
	AccountDetails: { flexDirection: "row", borderRadius: 20, justifyContent: 'space-between' },
	AccountDetailsText: { paddingLeft: 18 },
	PoppinsText: { fontFamily: 'Poppins_400Regular' },

	containerTitle: {
		fontSize: 13,
		fontFamily: 'Poppins_700Bold',
		fontWeight: 'bold',
	},

	details3: {
		color: "#aa4b18",
		fontWeight: 'bold',
	},
	details1: {
		fontFamily: "Poppins_400Regular",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	details2: {
		fontFamily: "Poppins_400Regular",
		fontWeight: "bold",
	},

	detailsMargin: {
		margin: 20,
	},


	proJecAdd: {
		color: "#000"
	},

	proJectButtons: {
		marginRight: 5,
		borderWidth: 2,
		paddingHorizontal: 20,
		paddingTop: 10,
		paddingBottom: 20,
		marginVertical: 5,
		borderRadius: 5,
		borderColor: "#aa4b18",
		color: "#aa4b18",
		fontFamily: "Poppins_700Bold"
	},
	pldetailsTitleSub: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 150,
		borderRadius: 50,
		alignItems: 'center',
	},

	generaldetailsContainer: {
		fontFamily: "Poppins_400Regular",
		// marginLeft: 20,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 5,
		width: "100%",
		borderRadius: 20,
	},

	pldetailsTitle: {
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
	},


	generaldetail: {
		width: "100%",
		height: 50,
		borderRadius: 10,
		// marginBottom: 10,
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	pdetailsContainer: {
		flex: 1,
		padding: 10,
	},
	generaldetails: {
		width: "100%",
		height: 100,
		borderRadius: 10,
		marginBottom: 10,
	}

})