import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { Text, View, } from '../components/Themed';
import { Avatar } from "react-native-elements";
import HeaderThree from "../components/HeaderThree";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import { logoutUser } from "../features/authSlice";
import { useAppSelector, useAppDispatch } from '../hooks/useStore';
import * as Haptics from 'expo-haptics';
import AsyncStorage from "@react-native-async-storage/async-storage";
export const WIDTH3 = Dimensions.get("window").width - 40;
export const arrow3 = Dimensions.get("window").width - 120;
// import { auth } from "../firebase/config";

const Accounts = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  console.log('user', user)
  // ojinnnakapascal + 2@gmail.com

  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("Login");
  //     })
  //     .catch((error) => alert(error.message));

  // };

  // const logoutUser = () => {
  //   AsyncStorage.removeItem('user')
  // }

  // React.useEffect(() => {
  //  setLoading(true);
  //  axios
  //   .get(baseUrl + `/projects/${itemId}`, config)
  //   .then((res) => {
  //    setProjectDetails(res.data);
  //    setViews(res?.data);
  //    setLoading(false);
  //   })
  //   .catch((err) => {
  //    console.log(err);
  //    setMessages(err?.message);
  //    setLoading(false);
  //    setError(true);
  //   });
  //  return () => {
  //  };
  // }, []);
  return (
    <View style={styles.AccountsContainer}>
      <View style={styles.Avater}>
        <View style={styles.AvaterImage}>
          {/* @ts-ignore */}
          <Avatar
            size={120}
            rounded
            source={require("../assets/images/john.png")}
            title="Profile"
            containerStyle={{ backgroundColor: "grey" }}>
            <View style={styles.AvaterAccessoryIcon}>

              <Ionicons name="camera-outline" size={22} />

            </View>
          </Avatar>
        </View>
      </View>

      <View style={styles.AvaterID}>
        <Text style={styles.AvaterIDText}>{user?.email} </Text>
      </View>

      <View style={styles.AvaterID2}>
        <Text style={styles.AvaterIDText2}>{user?.displayName} </Text>
      </View>

      <TouchableOpacity
        style={styles.AvaterIDInfo}
        onPress={() => navigation.navigate("PersonalInformation")}>
        <View style={styles.AvaterIDColor}>
          <Text style={styles.colorAvater}>
            <Feather name="user" size={12} />
          </Text>
        </View>
        <View style={styles.infoArrowLeft}>
          <View>
            <Text style={styles.AvaterIDColorText}>Personal information</Text>
          </View>
          <View style={styles.arrowrightMove}>
            <Text>
              <MaterialIcons
                style={styles.arrowrightColor}
                name="keyboard-arrow-right"
                size={25}
              />
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.AvaterIDInfo}
        onPress={() => navigation.navigate("PasswordSecurity")}>
        <View style={styles.AvaterIDColor}>
          <Text style={styles.colorAvater}>
            <Feather name="lock" size={12} />
          </Text>
        </View>
        <View style={styles.infoArrowLeft}>
          <View>
            <Text style={styles.AvaterIDColorText}>Security</Text>
          </View>
          <View style={styles.arrowrightMove}>
            <Text>
              <MaterialIcons
                style={styles.arrowrightColor}
                name="keyboard-arrow-right"
                size={25}
              />
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.AvaterIDInfo}
        onPress={() => navigation.navigate("Support")}>
        <View style={styles.AvaterIDColor}>
          <Text style={styles.colorAvater}>
            <Feather name="headphones" size={12} />
          </Text>
        </View>
        <View style={styles.infoArrowLeft}>
          <View>
            <Text style={styles.AvaterIDColorText}>Contact support</Text>
          </View>
          <View style={styles.arrowrightMove}>
            <Text>
              <MaterialIcons
                style={styles.arrowrightColor}
                name="keyboard-arrow-right"
                size={25}
              />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* onPress={handleSignOut} */}
      {/* @ts-ignore */}
      <TouchableOpacity style={styles.AvaterIDInfo2} onPress={() => dispatch(logoutUser(), Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy))}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  logoutText: {
    color: "#FF4622",
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    // textAlign: 'center'
  },

  arrowrightMove: {
    position: "absolute",
    left: arrow3,
  },

  arrowrightColor: {
    color: "#B1B5C5",
  },

  infoArrowLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  colorAvater: {
    color: "#007AFF",
  },

  AvaterIDColorText: {
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins_600SemiBold",
  },

  AvaterIDColor: {
    width: 30,
    height: 30,
    backgroundColor: "#D9E8FD",
    borderRadius: 50,
    margin: 5,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "#007AFF",
  },

  AvaterIDInfo2: {
    height: 42,
    borderColor: "#FEEAEA",
    borderWidth: 0.8,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    width: WIDTH3,
    justifyContent: "center",
    backgroundColor: "#FEEAEA",
  },
  AvaterIDInfo: {
    height: 42,
    borderColor: "#BEC3D5",
    borderWidth: 0.8,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: WIDTH3,
  },

  AvaterIDText: {
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    color: "#007AFF",
    width: "100%"
  },
  AvaterIDText2: {
    textAlign: "center",
    fontSize: 24,
    color: "#04224E",
    fontFamily: "Poppins_600SemiBold",
  },

  AvaterID: {
    height: 18,
    backgroundColor: "#D9E8FD",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 10,
    paddingHorizontal:4
  },
  AvaterID2: {
    alignSelf: "center",
    marginTop: 8,
    marginBottom: Platform.OS === "android" ? 20 : 42,
  },

  AvaterAccessoryIcon: {
    height: 30,
    width: 30,
    position: "absolute",
    right: -8,
    bottom: 20,
    // backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  AvaterImage: {
    justifyContent: "center",
    alignItems: "center",
  },

  Avater: {
    height: 155,
    width: 155,
    backgroundColor: "#D9E8FD",
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 100,
  },

  AccountsContainer: {
    height: "100%",
    flexDirection: "column",
    // backgroundColor: "#fff",
  },
});
