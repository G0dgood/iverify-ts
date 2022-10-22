import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Text, View, } from '../components/Themed';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Dimensions } from "react-native";
export const WIDTH2 = Dimensions.get("window").width - 40;
export const arrow2 = Dimensions.get("window").width - 125;
import Modal from "react-native-modal";
import { useAppSelector } from "../hooks/useStore";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
export const SLIDER_WIDTH = Dimensions.get("window").width - 80;
export const SLIDER_WIDTH2 = Dimensions.get("window").width - 250;
export const button = Dimensions.get("window").width - 300;
export const Height1 = Dimensions.get("window").height - 470;
export const Height2 = Dimensions.get("window").height - 330;

const Schedule = ({ navigation }: any) => {
  const route = useRoute();
  // @ts-ignore
  // const { id } = route.params;

  const {
    data,
    isSuccess,
    isLoading,
  } = useAppSelector((state) => state.verify);



  const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };
  // const toggleModalClose = () => {
  //   setModalVisible(isModalVisible);
  // };
  const handlesDetailsPage = () => {
    navigation.navigate("DetailsPage")
  }
  // , { id }
  // @ts-ignore
  const Schedule = data?.data?.filter((obj) => {
    return obj?.status !== "COMPLETED";
  })
  console.log('Schedule', Schedule?.requestId)

  return (
    <View style={styles.ScheduleContainer} lightColor="#fff" darkColor="#000">

      <ScrollView style={styles.ScheduleScrollView}>
        {/* @ts-ignore */}
        {Schedule?.map((item: any, index: any) => {
          return (
            <TouchableOpacity style={styles.ScheduleView} onPress={() => navigation.navigate("DetailsPage")}>
              <View style={item?.service?.category === "EMPLOYEE"
                ? styles.viewIcon
                : item?.service?.category === "TENANT"
                  ? styles.viewIcon2
                  : styles.viewIcon3}>
                <Text style={styles.ScheduleTextAlign}>
                  {item?.service?.category === "EMPLOYEE" ? (
                    <AntDesign style={styles.idcard} name="idcard" size={12} />
                  ) : item?.service?.category === "TENANT" ? (
                    <Entypo style={styles.idcard2} name="location" size={12} />
                  ) : (
                    item?.service?.category === "CERTIFICATE" && (
                      <Ionicons style={styles.idcard3} name="business" size={12} />
                    )
                  )}
                </Text>
              </View>
              <View style={styles.ScheduleNameContainer}>
                <View>
                  <Text style={styles.ScheduleNameTop}>
                    {item?.requester?.user?.firstName}{"  "}
                    {item?.requester?.user?.lastName}{"  "}
                    <Text style={styles.ScheduleNameTop2}>₦{item?.payment?.amount}</Text>
                  </Text>
                  <Text style={styles.ScheduleNameBottom}>
                    {item?.service?.description}
                  </Text>
                </View>
                <View style={styles.ScheduleNameArrow}>
                  <Text>
                    <MaterialIcons
                      style={styles.ScheduleArrowright}
                      name="keyboard-arrow-right"
                      size={25}
                    />
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
        {/* <TouchableOpacity style={styles.ScheduleView}>
          <View style={styles.ScheduleNameUp2}>
            <Text style={styles.ScheduleTextAlign2}>
              <Entypo name="location" size={10} />
            </Text>
          </View>
          <View style={styles.ScheduleNameContainer}>
            <View  >
              <Text style={styles.ScheduleNameTop}>
                Bukola Henry
                <Text style={styles.ScheduleNameTop2}> ₦2,500</Text>
              </Text>
              <Text style={styles.ScheduleNameBottom}>
                Address verification (2hrs ago)
              </Text>
            </View>
            <View style={styles.ScheduleNameArrow}>
              <Text>
                <MaterialIcons
                  style={styles.ScheduleArrowright}
                  name="keyboard-arrow-right"
                  size={25}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity> */}

        <View style={styles.centeredView}>
          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            style={{ flex: 1 }}>
            <View>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.modalBackgroudColor}>
                    <Text >
                      <AntDesign
                        style={styles.idcard}
                        name="idcard"
                        size={40}
                      />
                    </Text>
                  </View>

                  <View  >
                    <Text style={styles.modalTitle}>EMPLOYEE VERIFICATION</Text>
                  </View>

                  <View style={styles.modalTextInput}>
                    <View style={styles.modalTextInputCOl}>
                      <View style={styles.modalTextInputMargin}>
                        <Text  >Name:</Text>
                      </View>
                      <View>
                        <Text  >
                          Desmond Kelvin
                        </Text>
                      </View>
                    </View>
                    <View style={styles.modalTextInputCOl}>
                      <View>
                        <Text  >Address:</Text>
                      </View>
                      <View>
                        <Text  >
                          45 Ikorodu road
                        </Text>
                      </View>
                    </View>
                    <View style={styles.modalTextInputCOl}>
                      <View>
                        <Text  >Phone:</Text>
                      </View>
                      <View>
                        <Text  >08162680095</Text>
                      </View>
                    </View>
                    <View style={styles.modalTextInputCOl}>
                      <View>
                        <Text  >
                          Delivery Time:
                        </Text>
                      </View>
                      <View>
                        <Text  >2 Days</Text>
                      </View>
                    </View>
                    <View style={styles.modalTextInputCOl}>
                      <View>
                        <Text  >Amount:</Text>
                      </View>
                      <View>
                        <Text >₦2,500</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.ScheduleModalButton}>
                    <TouchableOpacity style={styles.ScheduleButton1}>
                      <Text style={styles.ScheduleModalButtonText}>REJECT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.ScheduleButton2}
                      onPress={() => navigation.navigate("Verification")}>
                      <Text style={styles.ScheduleModalButtonText}>ACCEPT</Text>
                    </TouchableOpacity>
                  </View>
                  {/* <TouchableOpacity style={styles.modalButton} onPress={() => Alert.alert('Button with adjusted color pressed')}>
          <Text style={styles.modalButtonColor} >APPLY FILTER</Text>
         </TouchableOpacity> */}
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({

  idcard2: {
    color: "#51A3FF",
  },
  idcard3: {
    color: "#FD937C",
  },
  idcard4: {
    color: "#D777FB",
  },
  ScheduleModalButtonText: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
  },

  ScheduleButton2: {
    width: Platform.OS === "android" ? 90 : button,
    height: 40,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  ScheduleButton1: {
    width: Platform.OS === "android" ? 90 : button,
    height: 40,
    backgroundColor: "#CB0404",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    marginRight: 40,
  },

  ScheduleModalButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },

  modalTextInputMargin: {
    width: SLIDER_WIDTH2,
  },

  modalTextInputCOl: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    alignItems: "flex-end",
    borderBottomColor: "#BEC3D5",
    borderBottomWidth: 1,
  },

  modalTextInput: {
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },

  modalTitle: {
    marginTop: 10,
    fontFamily: "Poppins_600SemiBold",
  },

  idcard: {
    color: "#0D8B8B",
  },

  modalBackgroudColor: {
    height: 80,
    width: 80,
    backgroundColor: "#D9FDFB",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    width: SLIDER_WIDTH,
    height: 370,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",

    justifyContent: "flex-start",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    backgroundColor: "#F7F8FA",

    width: "100%",
    color: "#9CA5C5",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },

  TenantIcon: {
    color: "#007AFF",
  },
  PwaIcon: {
    color: "#FC5E3B",
  },
  GuarantorIcon: {
    color: "#DD40BA",
  },
  EmployeeIcon: {
    color: "#0D8B8B",
  },

  FiterScrollView: {
    height: "100%",
  },

  ScheduleArrowright: {
    color: "#B1B5C5",
  },

  ScheduleTextAlign: {
    textAlign: "center",
    color: "#0D8B8B",
  },
  ScheduleTextAlign2: {
    textAlign: "center",
    color: "#007AFF",
  },

  ScheduleScrollView: {
    marginTop: 20,
  },

  ScheduleNameTop2: {
    fontSize: 10,
    fontFamily: "Poppins_600SemiBold",
    paddingEnd: 10,
    // paddingLeft: 10
    color: "red",
    backgroundColor: "#FEEAEA",
  },
  ScheduleNameTop: {
    fontSize: 11,
    fontFamily: "Poppins_600SemiBold",
    paddingRight: 5,
  },

  ScheduleNameBottom: {
    color: "#BEC3D5",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },

  ScheduleNameArrow: {
    position: "absolute",
    left: arrow2,
    marginTop: 4,
  },

  viewIcon: {
    backgroundColor: "#D9FDFB",
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  viewIcon2: {
    backgroundColor: "#D9E8FD",
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  viewIcon3: {
    backgroundColor: "#FEEAEA",
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  viewIcon4: {
    backgroundColor: "#F1D9FD",
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },



  ScheduleNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ScheduleView: {
    height: 42,
    borderColor: "#aaa",
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    width: WIDTH2,
  },

  ScheduleContainer: {
    flex: 1,
    height: "100%",
    // backgroundColor: "#fff",
  },
});
