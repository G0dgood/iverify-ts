import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView, 
  TouchableOpacity,
} from "react-native";
import { Text, View, } from '../components/Themed';
import { useNavigation } from "@react-navigation/native";
import { Badge } from "react-native-elements";
import Header from "../components/Header";
import BannerSlider from "./BannerSlider"; 
// import { useAppSelector, useAppDispatch } from '../../hooks/useStore';
import {MaterialIcons,AntDesign,Entypo,FontAwesome5,Ionicons} from "@expo/vector-icons"; 
 

const Home = () => {
	// const { user } = useAppSelector((state: { auth: any; }) => state.auth)

  const navigation = useNavigation();
  const [greet, setGreet] = useState("");

  useEffect(() => {
    getHour();
  }, []);

  const getHour = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) setGreet("GOOD MORNING");
    else if (hour >= 12 && hour <= 17) setGreet("GOOD AFTERNOON");
    else if (hour >= 17 && hour <= 24) setGreet("GOOD EVENING");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainScroll}>
        <View>
          <Header />
          <Text style={styles.morning}>{greet}</Text>
          <Text style={styles.UserName}>Kelechi Adekunle</Text>
        </View>

        <BannerSlider />
      </View>
      <TouchableOpacity
        style={styles.Badge}
        onPress={() => navigation.navigate("Schedule")}>
        <Text style={styles.schedule}>New verification schedule </Text>
        <Badge value="2" status="warning" />
      </TouchableOpacity>
      <View style={styles.verifications}>
        <Text style={styles.schedule1}>Latest verifications</Text>
        <View style={styles.keyboardarrow}>
          <Text
            style={styles.Viewall}
            onPress={() => navigation.navigate("Reports")}>
            View all
          </Text>
          <Text>
            <MaterialIcons
              style={styles.arrowright}
              name="keyboard-arrow-right"
              size={22}
            />
          </Text>
        </View>
      </View>
      {/* Address Section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.LatestView}>
          <View style={styles.viewIcon}>
            <Text>
              <AntDesign style={styles.idcard} name="idcard" size={12} />
            </Text>
          </View>
          <View style={styles.UpNamedownName}>
            <Text style={styles.UpName}>Desmond Kelvin</Text>
            <Text style={styles.downName}>
              Employee verification (2days ago)
            </Text>
          </View>
          <View>
            <Text style={styles.LatestName}>
              <MaterialIcons
                style={styles.arrowrightName}
                name="keyboard-arrow-right"
                size={20}
              />
            </Text>
          </View>
        </View>
        <View style={styles.LatestView}>
          <View style={styles.viewIcon2}>
            <Text>
              <Entypo style={styles.idcard2} name="location" size={12} />
            </Text>
          </View>
          <View style={styles.UpNamedownName}>
            <Text style={styles.UpName}>Fegor Bola</Text>
            <Text style={styles.downName}>Tenant verification (2days ago)</Text>
          </View>
          <View>
            <Text style={styles.LatestName}> 
              <MaterialIcons
                style={styles.arrowrightName}
                name="keyboard-arrow-right"
                size={20}
              />
            </Text>
          </View>
        </View>
        <View style={styles.LatestView}>
          <View style={styles.viewIcon3}>
            <Text>
              <Ionicons style={styles.idcard3} name="business" size={12} />
            </Text>
          </View>
          <View style={styles.UpNamedownName}>
            <Text style={styles.UpName}>Blessing King</Text>
            <Text style={styles.downName}>PWA verification (2days ago)</Text>
          </View>
          <View>
            <Text style={styles.LatestName}>
              <MaterialIcons
                style={styles.arrowrightName}
                name="keyboard-arrow-right"
                size={20}
              />
            </Text>
          </View>
        </View>
        <View style={styles.LatestView}>
          <View style={styles.viewIcon2}>
            <Text>
              <Entypo style={styles.idcard2} name="location" size={12} />
            </Text>
          </View>
          <View style={styles.UpNamedownName}>
            <Text style={styles.UpName}>Kenneth Jennifer</Text>
            <Text style={styles.downName}>Tenant verification (2days ago)</Text>
          </View>
          <View>
            <Text style={styles.LatestName}>
              <MaterialIcons
                style={styles.arrowrightName}
                name="keyboard-arrow-right"
                size={20}
              />
            </Text>
          </View>
        </View>
        <View style={styles.LatestView}>
          <View style={styles.viewIcon}>
            <Text>
              <AntDesign style={styles.idcard} name="idcard" size={12} />
            </Text>
          </View>
          <View style={styles.UpNamedownName}>
            <Text style={styles.UpName}>Grace Adora</Text>
            <Text style={styles.downName}>
              Employee verification (3days ago)
            </Text>
          </View>
          <View>
            <Text style={styles.LatestName}>
              <MaterialIcons
                style={styles.arrowrightName}
                name="keyboard-arrow-right"
                size={20}
              />
            </Text>
          </View>
        </View>
        <View style={styles.LatestView}>
          <View style={styles.viewIcon4}>
            <Text>
              <FontAwesome5
                style={styles.idcard4}
                name="people-arrows"
                size={12}
              />
            </Text>
          </View>
          <View style={styles.UpNamedownName}>
            <Text style={styles.UpName}>Bukola Adenike</Text>
            <Text style={styles.downName}>
              Guarantor verification (3days ago)
            </Text>
          </View>
          <View>
            <Text style={styles.LatestName}>
              <MaterialIcons
                style={styles.arrowrightName}
                name="keyboard-arrow-right"
                size={20}
              />
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* <Footer /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  schedule1: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },

  // ViewLast: {
  //   marginBottom: 50,
  // },

  idcard: {
    color: "#0D8B8B",
  },
  idcard2: {
    color: "#51A3FF",
  },
  idcard3: {
    color: "#FD937C",
  },
  idcard4: {
    color: "#D777FB",
  },

  UpNamedownName: {
    position: "absolute",
    left: 60,
  },

  viewIcon: {
    backgroundColor: "#D9FDFB",
    padding: 12,
    borderRadius: 25,
    marginLeft: 5,
  },

  viewIcon2: {
    backgroundColor: "#D9E8FD",
    padding: 12,
    borderRadius: 25,
    marginLeft: 5,
  },

  viewIcon3: {
    backgroundColor: "#FEEAEA",
    padding: 12,
    borderRadius: 25,
    marginLeft: 5,
  },

  viewIcon4: {
    backgroundColor: "#F1D9FD",
    padding: 12,
    borderRadius: 25,
    marginLeft: 5,
  },

  downName: {
    color: "#AAA",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
  UpName: {
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
  },

  LatestName: {
    paddingTop: 5,
  },

  LatestView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 18,
    marginRight: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#BEC3D5",
    padding: 5,
    alignItems: "center",
    marginBottom: 18,
  },

  verifications: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  schedule: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    alignItems: "center",
  },

  arrowrightName: {
    color: "#BEC3D5",
  },
  arrowright: {
    color: "#007AFF",
  },
  Viewall: {
    color: "#007AFF",
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
  keyboardarrow: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  Badge: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 5,
    backgroundColor: "#FEEAEA",
    borderRadius: 5,
    marginLeft: 16,
    marginRight: 16,
    fontSize: 20,
    fontWeight: "bold",
  },

  UserName: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins_600SemiBold",
  },

  morning: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },

  mainContainer: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 35 : 10,
  },

  mainScroll: {
    padding: 10,
    maxHeight: 270,
  },
});
