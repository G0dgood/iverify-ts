import { TouchableOpacity, ScrollView, StyleSheet, Platform, Alert, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { MaterialIndicator, UIActivityIndicator } from 'react-native-indicators'
import { View, Text } from '../components/Themed'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import { useAppSelector } from '../hooks/useStore'
import { ProgressBar } from 'react-native-paper'
// import { baseUrl } from '../shared/baseUrl'
import * as Haptics from "expo-haptics";
const DetailsPage = () => {

	const { user } = useAppSelector((state: { auth: any; }) => state.auth)
	const route = useRoute();
	// @ts-ignore
	const { requestId } = route.params;


	const [data, setdata] = useState<any>([]);
	const [isError, setisError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [greet, setGreet] = useState("");
	const [messages, setMessages] = useState("");
	const [id, setid] = useState("");

	React.useEffect(() => {
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user?.idToken}`,
			},
		};

		setLoading(true);
		axios
			.get(`https://api-test.iverify.ng/api/requests/details/${requestId}`, config)
			.then((res) => {
				setdata(res?.data);
				// console.log("DetailsPage", res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log('err', err);
				setMessages(err?.message);
				setLoading(false);
				setisError(true);
			});
	}, [user?.idToken]);

	const [datax, setdatax] = useState<any>([]);




	useEffect(() => {
		if (isError === true) {
			Alert.alert("Hello!", messages, [{ text: "OK" }]);
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
		}
		setTimeout(() => {
			setisError(false);
		}, 2000);
		setTimeout(() => {
			setMessages("");
		}, 5000);
	}, []);

	console.log('Details', data)
	useEffect(() => {
		if (data) {
			try {
				setdatax(data?.employees);
			} catch (err) {
				console.log(err);
			}
		}
	}, [data]);

	return (
		<View style={styles.container}>
			{loading && <ProgressBar progress={0.3} color={'#007AFF'} indeterminate={loading} />}
			<View style={styles.pdetailsContainer} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">

				<View style={styles.generaldetailsContainer}>

					<View style={styles.generaldetail}  >
						{datax?.map((item: any, index: any) => (
							<View key={index}>
								<Text style={styles.pldetailsTitle}>{item?.fullName}</Text>
							</View>
						))}


						{/* <View style={styles.pldetailsTitleSub}>
							<View>
								<Text style={styles.TitleSub}>  </Text>
								<Text >  SQM </Text>
							</View>
							<View>
								<Text style={styles.vertical} />
							</View>
							<View>
								<Text style={[styles.TitleSub, { color: "green" }]}> ffff</Text>
								<Text style={{}} > ffff </Text>
							</View>
						</View> */}

					</View>
				</View>
				<ScrollView
					style={[{ paddingBottom: 80 }]}
					showsVerticalScrollIndicator={false}>
					<View>
						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >DETAILS</Text>
						</View>
						{datax?.map((item: any, index: any) => (
							<View style={styles.PersonalInformationView} key={index}>
								<View style={{ borderRadius: 5 }}>
									<View style={styles.modalTextInput}>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>ID:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{item?.id}
												</Text>
											</View>
										</View>

										<View>
											<View style={styles.modalTextInputCOl}>
												<View style={styles.modalTextInputMargin}>
													<Text style={styles.infoInputColor}>Service:</Text>
												</View>
												<View>
													<Text style={styles.infoInputColor}>
														gggg
													</Text>
												</View>
											</View>
											<View style={styles.modalTextInputCOl}>
												<View><Text style={styles.infoInputColor}>Fee:</Text>
												</View>
												<View>
													<Text style={styles.infoInputColor}>
														gggg
													</Text>
												</View>
											</View>
											<View style={styles.modalTextInputCOl}>
												<View>
													<Text style={styles.infoInputColor}>Payment Reference:</Text>
												</View>
												<View>
													<Text style={styles.infoInputColor}>
														ffff
													</Text>
												</View>
											</View>
										</View>

										<View style={styles.modalTextInputCOl}>
											<View>
												<Text style={styles.infoInputColor}>Status:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{item?.status}
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View><Text style={styles.infoInputColor}>Created:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													ffff
												</Text>
											</View>
										</View>
									</View>
								</View>
								<View style={styles.buttom}   >
								</View>
							</View>
						))}

						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >REQUEST DETAILS</Text>
						</View>
						{datax?.map((item: any, index: any) => (
							<View style={styles.PersonalInformationView} key={index}>
								<View>
									<View style={styles.modalTextInput}>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Status:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{item?.status}
												</Text>
											</View>
										</View>

										<View>
											<View style={styles.modalTextInputCOl}>
												<View style={styles.modalTextInputMargin}>
													<Text style={styles.infoInputColor}>BIODATA:</Text>
												</View>
												{/* <View>
												<Text style={styles.infoInputColor}>
													ffff
												</Text>
											</View> */}
											</View>
											<View style={styles.modalTextInputCOl}>
												<View><Text style={styles.infoInputColor}>Full Name:</Text>
												</View>
												<View>
													<Text style={styles.infoInputColor}>
														{item?.fullName}
													</Text>
												</View>
											</View>
											<View style={styles.modalTextInputCOl}>
												<View>
													<Text style={styles.infoInputColor}>Phone No.:</Text>
												</View>
												<View>
													<Text style={styles.infoInputColor}>
														{item?.phoneNo === null ? "N/A" : item?.phoneNo}
													</Text>
												</View>
											</View>
										</View>


										<View style={styles.modalTextInputCOl}>
											<View>
												<Text style={styles.infoInputColor}>National Identity Number (NIN):</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													gggg
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View><Text style={styles.infoInputColor}>ADDRESS:</Text>
											</View>
											{/* <View>
											<Text style={styles.infoInputColor}>
												gggg
											</Text>
										</View> */}
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>ADDRESS:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													ggg
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>WORK HISTORY</Text>
											</View>
											{/* <View>
											<Text style={styles.infoInputColor}>
												ggg
											</Text>
										</View> */}
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Residential address:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													ggg
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>WORK HISTORY:</Text>
											</View>
											{/* <View>
											<Text style={styles.infoInputColor}>
												ggg
											</Text>
										</View> */}
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Previous Work Name:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													ggg
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Previous Work Address:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{item?.previousWorkName === null ? 'N/A' : item?.previousWorkName}
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>GUARANTOR - 1:</Text>
											</View>
											{/* <View>
											<Text style={styles.infoInputColor}>
												ggg
											</Text>
										</View> */}
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Full Name:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													ggg
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Full Name:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													ggg
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Residential Address:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													ggg
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Date of birth:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{item?.dob === null ? 'N/A' : item?.dob}
												</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
						))}
						<View style={styles.buttom}   >
						</View>

						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >
								Requester</Text>
						</View>
						{datax?.map((item: any, index: any) => (
							<View style={styles.PersonalInformationView} key={index}>
								<View style={{ borderRadius: 5 }}>
									<View style={styles.modalTextInput}>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>CUSTOMER INFORMATION:</Text>
											</View>
										</View>
										{/* <View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>CUSTOMER INFORMATION:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												gggg
											</Text>
										</View>
									</View> */}

										<View>
											<View style={styles.modalTextInputCOl}>
												<View style={styles.modalTextInputMargin}>
													<Text style={styles.infoInputColor}>First Name:</Text>
												</View>
												<View>
													<Text style={styles.infoInputColor}>
														gggg
													</Text>
												</View>
											</View>
											<View style={styles.modalTextInputCOl}>
												<View><Text style={styles.infoInputColor}>Last Name:</Text>
												</View>
												<View>
													<Text style={styles.infoInputColor}>
														gggg
													</Text>
												</View>
											</View>
											<View style={styles.modalTextInputCOl}>
												<View>
													<Text style={styles.infoInputColor}>Email:</Text>
												</View>
												<View>
													<Text style={styles.infoInputColor}>
														ffff
													</Text>
												</View>
											</View>
										</View>

										<View style={styles.modalTextInputCOl}>
											<View>
												<Text style={styles.infoInputColor}>Date Joined:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													fff
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View>
												<Text style={styles.infoInputColor}>WORKSPACE INFORMATION:</Text>
											</View>
											{/* <View>
											<Text style={styles.infoInputColor}>
												ffff
											</Text>
										</View> */}
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Name:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													gggg
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Domain:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													gggg
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Type:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													gggg
												</Text>
											</View>
										</View>
									</View>
								</View>
								<View style={styles.buttom}   >
								</View>
							</View>
						))}
						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >
								PAYMENT</Text>
						</View>

						<View style={styles.PersonalInformationView}>
							<View style={{ borderRadius: 5 }}>
								<View style={styles.modalTextInput}>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>CUSTOMER INFORMATION:</Text>
										</View>
									</View>
									{/* <View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>CUSTOMER INFORMATION:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												gggg
											</Text>
										</View>
									</View> */}

									<View>
										<View style={styles.modalTextInputCOl}>
											<View style={styles.modalTextInputMargin}>
												<Text style={styles.infoInputColor}>Transaction Ref.:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{data?.payment?.trxRef}
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View><Text style={styles.infoInputColor}>Status:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													{data?.payment?.status}
												</Text>
											</View>
										</View>
										<View style={styles.modalTextInputCOl}>
											<View>
												<Text style={styles.infoInputColor}>Service Cost:</Text>
											</View>
											<View>
												<Text style={styles.infoInputColor}>
													NGN {data?.payment?.amount}
												</Text>
											</View>
										</View>
									</View>

									<View style={styles.modalTextInputCOl}>
										<View>
											<Text style={styles.infoInputColor}>Total Cost:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												NGN {data?.payment?.amount}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View>
											<Text style={styles.infoInputColor}>Quantity:</Text>
										</View>
										{/* <View>
											<Text style={styles.infoInputColor}>
												ffff
											</Text>
										</View> */}
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Provider:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{data?.payment?.provider}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>OTHER INFORMATION:</Text>
										</View>
										{/* <View>
											<Text style={styles.infoInputColor}>
												gggg
											</Text>
										</View> */}
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>No.of Retry:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{data?.payment?.numRetries}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Payment ID:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{data?.payment?.id}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Created At:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{data?.payment?.createdAt}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Last Updated:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{data?.payment?.updatedAt}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Comments</Text>
										</View>
									</View>
									<TextInput
										placeholder="Comments"
										placeholderTextColor="#B9B7B7"
										style={styles.signupinput}
									// value={values.email}
									// onChangeText={handleChange('email')}
									/>
									<TouchableOpacity style={[styles.introNextTouch]}  	 >

										<Text style={styles.introNext}>Sign In</Text>
									</TouchableOpacity>
									{/* <View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Last Updated:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{data?.payment?.updatedAt}
											</Text>
										</View>
									</View> */}
								</View>
							</View>
							<View style={styles.buttom}   >
							</View>
						</View>
					</View>
				</ScrollView >
			</View >
		</View >
	)
}

export default DetailsPage


const styles = StyleSheet.create({
	introNext: {
		textAlign: "center",
		fontFamily: 'Poppins_700Bold',
		color: "#fff",
		borderRadius: 5,
		fontWeight: "700",
		flexDirection: "row",
	},

	introNextTouch: {
		justifyContent: "center",
		borderRadius: 8,
		backgroundColor: "#990000",
		marginTop: Platform.OS === "ios" ? 40 : 30,
		fontFamily: 'Poppins_500Medium',
		height: 70
	},
	signupinput: {
		padding: 25,
		borderWidth: 1,
		borderRadius: 4,
		fontSize: 14,
		borderColor: "#EEEEEE",
		backgroundColor: "#FBFBFB",
		marginTop: 14,
		fontFamily: 'Poppins_400Regular'
	},

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
		borderRadius: 10
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