import { TouchableOpacity, ScrollView, StyleSheet, Platform, Alert, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View, Text } from '../components/Themed'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import { useAppSelector } from '../hooks/useStore'
import { ProgressBar } from 'react-native-paper'
import * as Haptics from "expo-haptics";
import moment from 'moment'
import { baseUrl } from '../shared/baseUrl'


const DetailsPage = ({ navigation }: any) => {

	const { user } = useAppSelector((state: { auth: any; }) => state.auth)
	const route = useRoute();
	// @ts-ignore
	const { name, requestId, category, Id } = route.params;


	const [data, setdata] = useState<any>([]);
	const [data1, setdata1] = useState<any>([]);
	const [data2, setdata2] = useState<any>([]);
	const [datax, setdatax] = useState<any>([]);
	const [isError, setisError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [items1, setItems1] = useState([]);
	const [items2, setItems2] = useState([]);
	const [items3, setItems3] = useState([]);
	const [messages, setMessages] = useState("");
	const [requestItemId, setrequestItemId] = useState("");


	React.useEffect(() => {
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user?.idToken}`,
			},
		};

		setLoading(true);
		axios
			.get(baseUrl + `/requests/details/${Id}`, config)
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



	useEffect(() => {
		if (data) {
			try {
				setdatax(data?.employees);
			} catch (err) {
				console.log(err);
			}
		}
	}, [data]);

	useEffect(() => {
		if (data) {
			try {
				setdata1(data?.tenants);
			} catch (err) {
				console.log(err);
			}
		}
	}, [data]);

	useEffect(() => {
		if (data) {
			try {
				setdata2(data?.certificates);
			} catch (err) {
				console.log(err);
			}
		}
	}, [data]);

	useEffect(() => {
		if (datax) {
			try {
				setItems1(datax);
				setrequestItemId(datax[0]?.id);
			} catch (err) {
				console.log(err);
			}
		} else if (data1) {
			try {
				setItems2(data1);
				setrequestItemId(data1[0]?.id);
			} catch (err) {
				console.log(err);
			}
		} else if (data2) {
			try {
				setItems3(data2);
				setrequestItemId(data2[0]?.id);
			} catch (err) {
				console.log(err);
			}
		}
	}, [datax, data1, data2]);



	const Card = ({ value, index }: any) => {
		return (
			<View style={styles.PersonalInformationView} key={index}>
				<View style={{ borderRadius: 5 }}>
					<View style={styles.modalTextInput}>
						<View style={styles.modalTextInputCOl}>
							<View style={styles.modalTextInputMargin}>
								<Text style={styles.infoInputColor}>ID:</Text>
							</View>
							<View>
								<Text style={styles.infoInputColor}>
									{value?.id}
								</Text>
							</View>
						</View>

						<View>
							<View style={styles.modalTextInputCOl}>
								<View style={styles.modalTextInputMargin}>
									<Text style={styles.infoInputColorheader}>Service:</Text>
								</View>
								<View>
									<Text style={styles.infoInputColor}>
										{value?.service?.name}
									</Text>
								</View>
							</View>
							<View style={styles.modalTextInputCOl}>
								<View><Text style={styles.infoInputColor}>Fee:</Text>
								</View>
								<View>
									<Text style={styles.infoInputColor}>
										NGN {data?.payment?.amount}
									</Text>
								</View>
							</View>
							<View style={styles.modalTextInputCOl}>
								<View>
									<Text style={styles.infoInputColor}>Payment Reference:</Text>
								</View>
								<View>
									<Text style={styles.infoInputColor}>
										N/A
									</Text>
								</View>
							</View>
						</View>

						<View style={styles.modalTextInputCOl}>
							<View>
								<Text style={styles.infoInputColor}>Status:</Text>
							</View>
							<View style={styles.infoInputColorbg}>
								<Text style={styles.infoInputColorbc}>
									{value?.status}
								</Text>
							</View>
						</View>
						<View style={styles.modalTextInputCOl}>
							<View><Text style={styles.infoInputColor}>Created:</Text>
							</View>
							<View>
								<Text style={styles.infoInputColor}>
									{moment(value?.createdAt).format("DD-MMM-YY")}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.buttom}   >
				</View>
			</View>
		);
	};

	const Card1 = ({ value, index }: any) => {
		return (
			<View style={styles.PersonalInformationView} key={index}>
				<View style={styles.modalTextInput}>
					<View>
						<View style={styles.modalTextInputCOl}>
							<View style={styles.modalTextInputMargin}>
								<Text style={styles.infoInputColorheader}>BIODATA:</Text>
							</View>
						</View>
						<View style={styles.modalTextInputCOl}>
							<View><Text style={styles.infoInputColor}>Full Name:</Text>
							</View>
							<View>
								<Text style={styles.infoInputColor}>
									{value?.fullName}
								</Text>
							</View>
						</View>
						<View style={styles.modalTextInputCOl}>
							<View>
								<Text style={styles.infoInputColor}>Phone No.:</Text>
							</View>
							<View>
								<Text style={styles.infoInputColor}>
									{value?.phoneNo === null ? "N/A" : value?.phoneNo}
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
								{value?.idType === null ? "N/A" : value?.idType}
							</Text>
						</View>
					</View>
					<View style={styles.modalTextInputCOl}>
						<View style={styles.modalTextInputMargin}>
							<Text style={styles.infoInputColor}>ADDRESS:</Text>
						</View>
						<View>
							<Text style={styles.infoInputColor}>
								{value?.residentialAddress === null ? "N/A" : value?.residentialAddress}
							</Text>
						</View>
					</View>
					<View style={styles.modalTextInputCOl}>
						<View style={styles.modalTextInputMargin}>
							<Text style={styles.infoInputColorheader}>WORK HISTORY</Text>
						</View>
					</View>
					<View style={styles.modalTextInputCOl}>
						<View style={styles.modalTextInputMargin}>
							<Text style={styles.infoInputColor}>Residential address:</Text>
						</View>
						<View>
							<Text style={styles.infoInputColor}>
								{value?.workAddress === null ? "N/A" : value?.workAddress}
							</Text>
						</View>
					</View>
					<View style={styles.modalTextInputCOl}>
						<View style={styles.modalTextInputMargin}>
							<Text style={styles.infoInputColorheader}>WORK HISTORY:</Text>
						</View>
					</View>
					<View style={styles.modalTextInputCOl}>
						<View style={styles.modalTextInputMargin}>
							<Text style={styles.infoInputColor}>Previous Work Name:</Text>
						</View>
						<View>
							<Text style={styles.infoInputColor}>
								N//A
							</Text>
						</View>
					</View>
					<View style={styles.modalTextInputCOl}>
						<View style={styles.modalTextInputMargin}>
							<Text style={styles.infoInputColor}>Previous Work Address:</Text>
						</View>
						<View>
							<Text style={styles.infoInputColor}>
								{value?.previousWorkName === null ? 'N/A' : value?.previousWorkName}
							</Text>
						</View>
					</View>
					<View style={styles.modalTextInputCOl}>
						<View style={styles.modalTextInputMargin}>
							<Text style={styles.infoInputColorheader}>GUARANTOR - 1:</Text>
						</View>
					</View>
					<View style={styles.modalTextInputCOl}>
						<View style={styles.modalTextInputMargin}>
							<Text style={styles.infoInputColor}>Residential Address:</Text>
						</View>
						<View>
							<Text style={styles.infoInputColor}>
								{value?.guarantors?.address === null ? 'N/A' : value?.guarantors?.address}
							</Text>
						</View>
					</View>
					<View style={styles.modalTextInputCOl}>
						<View style={styles.modalTextInputMargin}>
							<Text style={styles.infoInputColor}>Date of birth:</Text>
						</View>
						<View>
							<Text style={styles.infoInputColor}>
								{value?.guarantors?.dob === null ? 'N/A' : value?.guarantors?.dob}
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	};


	return (
		<View style={styles.container}>
			{loading && <ProgressBar progress={0.3} color={'#007AFF'} indeterminate={loading} />}
			<View style={styles.pdetailsContainer} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">

				<View style={styles.generaldetailsContainer}>

					<View style={styles.generaldetail}  >
						{!datax ? '' : datax?.map((item: any, index: any) => (
							<View key={index}>
								<Text style={styles.pldetailsTitle}>{item?.fullName}</Text>
							</View>
						))}
						{!data1 ? '' : data1?.map((item: any, index: any) => (
							<View key={index}>
								<Text style={styles.pldetailsTitle}>{item?.fullName}</Text>
							</View>
						))}
						{!data2 ? '' : data2?.map((item: any, index: any) => (
							<View key={index}>
								<Text style={styles.pldetailsTitle}>{item?.fullName}</Text>
							</View>
						))}


						{/* <TouchableOpacity style={styles.pldetailsTitleSub} onPress={() =>
							navigation.navigate("ReportStatus", {
								screen: "ReportStatus",
								name: name,
								requestId: requestId,
								category: category,
								requestItemId: requestItemId,
								Employee: items1,
								Certificate: items3,
								Tenant: items2,
							})
						}>
							<Text style={styles.pldetailsTitlestyle} >Verify</Text>
						</TouchableOpacity> */}
					</View>
				</View>
				<ScrollView
					style={[{ paddingBottom: 80 }]}
					showsVerticalScrollIndicator={false}>
					<View>
						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >DETAILS</Text>
						</View>

						{!datax ? '' : datax?.map((item: any, index: any) => (
							<Card key={index} value={item} />
						))}
						{!data1 ? '' : data1?.map((item: any, index: any) => (
							<Card key={index} value={item} />
						))}
						{!data2 ? '' : data2?.map((item: any, index: any) => (
							<Card key={index} value={item} />
						))}

						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >REQUEST DETAILS</Text>
						</View>


						{!datax ? '' : datax?.map((item: any, index: any) => (
							<Card1 key={index} value={item} />
						))}
						{!data1 ? '' : data1?.map((item: any, index: any) => (
							<Card1 key={index} value={item} />
						))}
						{!data2 ? '' : data2?.map((item: any, index: any) => (
							<Card1 key={index} value={item} />
						))}
						<View style={styles.buttom}   >
						</View>

						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >REQUESTER</Text>
						</View>
						{/* {datax?.map((item: any, index: any) => (
						
						))} */}
						{!datax ? '' : datax?.map((item: any, index: any) => (
							<Card1 key={index} value={item} />
						))}
						{!data1 ? '' : data1?.map((item: any, index: any) => (
							<Card1 key={index} value={item} />
						))}
						{!data2 ? '' : data2?.map((item: any, index: any) => (
							<Card1 key={index} value={item} />
						))}
						<View style={styles.buttom}   >
						</View>
						<View style={styles.containerAccount} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" >
							<Text style={styles.containerTitle} >PAYMENT</Text>
						</View>

						<View style={styles.PersonalInformationView}>
							<View style={{ borderRadius: 5 }}>
								<View style={styles.modalTextInput}>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColorheader}>CUSTOMER INFORMATION:</Text>
										</View>
									</View>

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
											<Text style={styles.infoInputColorheader}>Quantity:</Text>
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
											<Text style={styles.infoInputColorheader}>OTHER INFORMATION:</Text>
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
												{moment(data?.payment?.createdAt).format("DD-MMM-YY")}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Last Updated:</Text>
										</View>
										<View>
											<Text style={styles.infoInputColor}>
												{moment(data?.payment?.updatedAt).format("DD-MMM-YY")}
											</Text>
										</View>
									</View>
									<View style={styles.modalTextInputCOl}>
										<View style={styles.modalTextInputMargin}>
											<Text style={styles.infoInputColor}>Comments</Text>
										</View>
									</View>
									{/* <TextInput
										placeholder="Comments"
										placeholderTextColor="#B9B7B7"
										style={styles.signupinput}
									// value={values.email}
									// onChangeText={handleChange('email')}
									/> */}
									<TouchableOpacity style={[styles.introNextTouch]} onPress={() =>
										navigation.navigate("ReportStatus", {
											screen: "ReportStatus",
											name: name,
											requestId: requestId,
											category: category,
											requestItemId: requestItemId,
											Employee: items1,
											Certificate: items3,
											Tenant: items2,
										})
									}	 >

										<Text style={styles.introNext}>Add Comment</Text>
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
		backgroundColor: "#007AFF",
		marginTop: Platform.OS === "ios" ? 40 : 30,
		fontFamily: 'Poppins_500Medium',
		padding: 10

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
	// vertical: {
	// 	height: '100%',
	// 	width: 1,
	// 	backgroundColor: '#909090',
	// },

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
	infoInputColorbg: {
		fontSize: 14,
		fontFamily: 'Poppins_400Regular',
		backgroundColor: "rgb(243, 240, 255)",
		padding: 5,
	},
	infoInputColorbc: {
		fontSize: 14,
		fontFamily: 'Poppins_600SemiBold',
		color: 'rgb(132, 94, 247)',
		fontWeight: "bold"
	},
	infoInputColorheader: {
		fontSize: 14,
		fontFamily: 'Poppins_600SemiBold',
		color: "#007AFF",

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
		flexDirection: 'column',
		justifyContent: 'center',
		width: 150,
		height: 40,
		borderRadius: 5,
		alignItems: 'center',
		backgroundColor: '#007AFF'
	},

	pldetailsTitlestyle: {
		color: "#fff",
		fontWeight: 'bold',
		fontFamily: "Poppins_600SemiBold",
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