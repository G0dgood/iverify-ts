import React, { useState } from "react";
import {
  StyleSheet,
 
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { Text, View, } from '../components/Themed';
import { Dimensions } from "react-native";
import HeaderTwo from "../components/HeaderTwo";
import ButtonToggleGroup from "react-native-button-toggle-group";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Modal from "react-native-modal";
export const SLIDER_WIDTH = Dimensions.get("window").width - 80;
export const WIDTH = Dimensions.get("window").width - 40;
export const arrow = Dimensions.get("window").width - 125;
import Checkbox from "expo-checkbox";

const Reports = ({ navigation }: any) => {
  const [value, setValue] = React.useState("Employee");
  const [isModalVisible, setModalVisible] = useState(false);

  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.ReportsContainer}>
      {/* <HeaderTwo Titles={"REPORTS"} navigates={"Home"} /> */}
      <View>
        <View style={styles.ButtonToggle}>
          {/* @ts-ignore */}
          <ButtonToggleGroup
            highlightBackgroundColor={"#fff"}
            highlightTextColor={"#007AFF"}
            // inactiveBackgroundColor={'#aaa'}
            style={styles.Toggle}
            inactiveTextColor={"#BEC3D5"}
            values={["Employee", "Guarantor", "PWA", "Tenant"]}
            value={value}
            onSelect={(val) => setValue(val)}
          />
        </View>
        <View style={styles.FiterToggle}>
          <View style={styles.FiterToggleSearch}>
            <TextInput
              placeholder="Search here "
              placeholderTextColor="#BEC3D5"
              style={styles.Fiterinput}
            />
            <Ionicons style={styles.FiterSearchIcon} name="search" size={20} />
          </View>
          <View style={styles.SearchIconBtn}>
            <TouchableOpacity onPress={toggleModal}>
              <Ionicons style={styles.FiterBtnIcon} name="filter" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.FiterScrollView}>
          {/* <!-- Table starts here --> */}
          {value === "Employee" && (
            <View>
              <TouchableOpacity
                style={styles.FiterView}
                onPress={() => navigation.navigate("ReportStatus")}>
                <View style={styles.FiterNameUp}>
                  <Text >
                    <AntDesign
                      style={styles.EmployeeIcon}
                      name="idcard"
                      size={10}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Chioma Gregg</Text>
                    <Text style={styles.FiterNameBottom}>
                      Employee verification (2hrs ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp}>
                  <Text >
                    <AntDesign
                      style={styles.EmployeeIcon}
                      name="idcard"
                      size={10}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Desmond Kelvin</Text>
                    <Text style={styles.FiterNameBottom}>
                      Employee verification (2hrs ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp}>
                  <Text >
                    <AntDesign
                      style={styles.EmployeeIcon}
                      name="idcard"
                      size={10}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Esosah Rume</Text>
                    <Text style={styles.FiterNameBottom}>
                      Employee verification (2hrs ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp}>
                  <Text >
                    <AntDesign
                      style={styles.EmployeeIcon}
                      name="idcard"
                      size={10}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Zita Ikenna</Text>
                    <Text style={styles.FiterNameBottom}>
                      Employee verification (2hrs ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp}>
                  <Text >
                    <AntDesign
                      style={styles.EmployeeIcon}
                      name="idcard"
                      size={10}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Henry James</Text>
                    <Text style={styles.FiterNameBottom}>
                      Employee verification (2hrs ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          {value === "Guarantor" && (
            <View>
              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp2}>
                  <Text >
                    <FontAwesome5
                      style={styles.GuarantorIcon}
                      name="people-arrows"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Bukola Adenike</Text>
                    <Text style={styles.FiterNameBottom}>
                      Guarantor verification (3days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp2}>
                  <Text >
                    <FontAwesome5
                      style={styles.GuarantorIcon}
                      name="people-arrows"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Blessing Gibson</Text>
                    <Text style={styles.FiterNameBottom}>
                      Guarantor verification (3days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp2}>
                  <Text >
                    <FontAwesome5
                      style={styles.GuarantorIcon}
                      name="people-arrows"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Faith Okoli</Text>
                    <Text style={styles.FiterNameBottom}>
                      Guarantor verification (3days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp2}>
                  <Text >
                    <FontAwesome5
                      style={styles.GuarantorIcon}
                      name="people-arrows"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Zita Ikenna</Text>
                    <Text style={styles.FiterNameBottom}>Damilola Agbaje</Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp2}>
                  <Text >
                    <FontAwesome5
                      style={styles.GuarantorIcon}
                      name="people-arrows"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Fegor John</Text>
                    <Text style={styles.FiterNameBottom}>
                      Guarantor verification (3days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          {value === "PWA" && (
            <View>
              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp3}>
                  <Text >
                    <Ionicons
                      style={styles.PwaIcon}
                      name="business"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Pascal Godwin</Text>
                    <Text style={styles.FiterNameBottom}>
                      PWA verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp3}>
                  <Text >
                    <Ionicons
                      style={styles.PwaIcon}
                      name="business"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Loveth Lloyd</Text>
                    <Text style={styles.FiterNameBottom}>
                      PWA verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp3}>
                  <Text >
                    <Ionicons
                      style={styles.PwaIcon}
                      name="business"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Fred Amah</Text>
                    <Text style={styles.FiterNameBottom}>
                      PWA verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp3}>
                  <Text >
                    <Ionicons
                      style={styles.PwaIcon}
                      name="business"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Gilbert Nwanya</Text>
                    <Text style={styles.FiterNameBottom}>
                      PWA verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp3}>
                  <Text >
                    <Ionicons
                      style={styles.PwaIcon}
                      name="business"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Arinzechukwu Okoro</Text>
                    <Text style={styles.FiterNameBottom}>
                      PWA verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          {value === "Tenant" && (
            <View>
              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp4}>
                  <Text >
                    <Entypo
                      style={styles.TenantIcon}
                      name="location"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Kenneth Jennifer</Text>
                    <Text style={styles.FiterNameBottom}>
                      Tenant verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp4}>
                  <Text >
                    <Entypo
                      style={styles.TenantIcon}
                      name="location"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>
                      Onyinyechukwu Joshua
                    </Text>
                    <Text style={styles.FiterNameBottom}>
                      Tenant verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp4}>
                  <Text >
                    <Entypo
                      style={styles.TenantIcon}
                      name="location"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Tammy May</Text>
                    <Text style={styles.FiterNameBottom}>
                      Tenant verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp4}>
                  <Text >
                    <Entypo
                      style={styles.TenantIcon}
                      name="location"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Hope Daniel</Text>
                    <Text style={styles.FiterNameBottom}>
                      Tenant verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.FiterView}>
                <View style={styles.FiterNameUp4}>
                  <Text >
                    <Entypo
                      style={styles.TenantIcon}
                      name="location"
                      size={12}
                    />
                  </Text>
                </View>
                <View style={styles.FiterNameContainer}>
                  <View>
                    <Text style={styles.FiterNameTop}>Edidiong Bassey</Text>
                    <Text style={styles.FiterNameBottom}>
                      Tenant verification (2days ago)
                    </Text>
                  </View>
                  <View style={styles.FiterNameArrow}>
                    <Text>
                      <MaterialIcons
                        style={styles.FiterArrowright}
                        name="keyboard-arrow-right"
                        size={25}
                      />
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={styles.centeredView}>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={{ flex: 1 }}>
          <View>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>FILTER REPORTS</Text>
                <View style={styles.modalTextInput}>
                  <View style={styles.modalTextInputCOl}>
                    <View style={styles.modalTextInputMargin}>
                      <Text style={styles.modalInputColor}>Approved</Text>
                    </View>
                    <View>
                      <Text>
                        <Checkbox
                          style={styles.checkbox}
                          value={isChecked1}
                          onValueChange={setChecked1}
                          color={isChecked1 ? "#007AFF" : undefined}
                        />
                      </Text>
                    </View>
                  </View>
                  <View style={styles.modalTextInputCOl}>
                    <View>
                      <Text style={styles.modalInputColor}>Pending</Text>
                    </View>
                    <View>
                      <Text>
                        <Checkbox
                          style={styles.checkbox}
                          value={isChecked2}
                          onValueChange={setChecked2}
                          color={isChecked2 ? "#007AFF" : undefined}
                        />
                      </Text>
                    </View>
                  </View>
                  <View style={styles.modalTextInputCOl}>
                    <View>
                      <Text style={styles.modalInputColor}>Disapproved</Text>
                    </View>
                    <View>
                      <Text>
                        <Checkbox
                          style={styles.checkbox}
                          value={isChecked3}
                          onValueChange={setChecked3}
                          color={isChecked3 ? "#007AFF" : undefined}
                        />
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() =>
                    Alert.alert("Button with adjusted color pressed")
                  }>
                  <Text style={styles.modalButtonColor}>APPLY FILTER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Reports;

const styles = StyleSheet.create({
  Toggle: {
    // shadowOffset: 'red'
  },

  checkbox: {
    borderRadius: 10,
    color: "red",
  },
  modalCheck: {
    position: "absolute",
    margin: 0,
    padding: 0,
  },
  modalButtonColor: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },

  modalButton: {
    width: 181,
    height: 39,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 5,
  },

  modalInputColor: {
    color: "#20549D",
    fontFamily: "Poppins_400Regular",
  },
  modalTextInputMargin: {
    paddingRight: "50%",
  },

  modalTextInputCOl: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    alignItems: "flex-end",
    borderBottomColor: "#BEC3D5",
    borderBottomWidth: 1,
  },

  modalTextInput: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    width: SLIDER_WIDTH,
    height: 314,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30,
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
    padding: 10,
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

  FiterArrowright: {
    color: "#B1B5C5",
    alignItems: "center",
  },

  FiterNameArrow: {
    position: "absolute",
    left: arrow,
    marginTop: Platform.OS === "android" ? 7 : 4,
  },

  FiterNameBottom: {
    color: "#BEC3D5",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },

  FiterNameTop: {
    fontSize: 11,
    fontFamily: "Poppins_600SemiBold",
    marginRight: "5%",
  },

  FiterNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  FiterTextAlign2: {
    textAlign: "center",
    color: "#007AFF",
  },

  FiterNameUp4: {
    height: 30,
    width: 30,
    backgroundColor: "#D9E8FD",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  FiterNameUp3: {
    height: 30,
    width: 30,
    backgroundColor: "#FEEAEA",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  FiterNameUp2: {
    height: 30,
    width: 30,
    backgroundColor: "#F1D9FD",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  FiterNameUp: {
    height: 30,
    width: 30,
    backgroundColor: "#D9FDFB",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  FiterView: {
    height: 42,
    borderColor: "#aaa",
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    width: WIDTH,
  },

  FiterBtnIcon: {
    color: "#fff",
  },

  SearchIconBtn: {
    width: "12%",
    height: 40,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  FiterSearchIcon: {
    color: "#BEC3D5",
  },

  Fiterinput: {
    color: "#000",
    flex: 1,
    fontFamily: "Poppins_400Regular",
  },
  FiterToggleSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#aaa",
    backgroundColor: "#F6F6F6",
    width: "85%",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    padding: 8,
    borderWidth: 0.5,
  },

  FiterToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 30,
  },

  ButtonToggle: {
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "#F6F6F6",
    padding: 2,
    borderRadius: 6,
    borderColor: "#aaa",
    marginBottom: 30,
    borderWidth: 0.5,
  },

  ReportsContainer: {
    // flex: 1,
    height: "100%",
    // backgroundColor: "#fff",
  },
});
