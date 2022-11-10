import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import moment from "moment";
import { Text, View } from "../components/Themed";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "react-native-elements";
import BannerSlider from "./BannerSlider";
import { useAppSelector, useAppDispatch } from "../../iverify/hooks/useStore";
import { MaterialIcons, AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { allassignedrequest, reset } from "../features/verifySlice";
import * as Haptics from "expo-haptics";
import Skeleton from "../components/LoaderSkeleton";
import { logoutUser } from "../features/authSlice";
import { setUserInfo } from "../features/authSlice";
const Home = () => {
  const { user, isSuccess, message } = useAppSelector((state) => state.auth);
  const {
    data: datav,
    isSuccess: success,
    isLoading,
  } = useAppSelector((state) => state.verify);

  React.useEffect(() => {
    userInfo();
  }, [isSuccess]);

  const userInfo = async () => {
    try {
      const info = await AsyncStorage.getItem("user");

      dispatch(setUserInfo(JSON.parse(info)));
    } catch (e) {
      console.log(`isLoggedIn in error ${e}`);
    }
  };
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const [datas, setdatas] = useState([]);
  const [isError, setisError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [greet, setGreet] = useState("");

  useEffect(() => {
    dispatch(allassignedrequest(user));
  }, [user]);

  useEffect(() => {
    if (datav) {
      try {
        setdatas(datav);
      } catch (err) {
        console.log(err);
      }
    }
  }, [datav]);

  const data = datas?.data?.filter((obj) => {
    return obj?.service?.category !== "CERTIFICATE";
  });

  // useEffect(() => {
  //   if (datav === null) {
  //     // @ts-ignore
  //     dispatch(
  //       logoutUser(),
  //       Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  //     );
  //     dispatch(reset());
  //   }
  // }, [dispatch, message, navigation, datav]);

  useEffect(() => {
    if (isError === true) {
      Alert.alert("Hello!", message, [{ text: "OK" }]);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    setTimeout(() => {
      setisError(false);
    }, 2000);
    setTimeout(() => {
      dispatch(reset());
    }, 5000);
  }, []);

  useEffect(() => {
    getHour();
  }, [isSuccess]);

  console.log("user", user);

  // // @ts-ignore
  const COMPLETED = data?.filter((obj) => {
    return obj?.status === "COMPLETED";
  });
  // // @ts-ignore
  const ONGOING = data?.filter((obj) => {
    return obj?.status === "ONGOING_VERIFICATION";
  });
  // // @ts-ignore
  const CANCELLED = data?.filter((obj) => {
    return obj?.status === "CANCELLED";
  });
  // // @ts-ignore
  const REJECTED = data?.filter((obj) => {
    return obj?.status === "REJECTED";
  });
  // // @ts-ignore
  const pending = data?.filter((obj) => {
    return obj?.status !== "COMPLETED";
  });

  const Schedule = data?.filter((obj) => {
    return obj?.status !== "COMPLETED";
  });
  // console.log("pending", pending?.length);
  const getHour = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) setGreet("GOOD MORNING");
    else if (hour >= 12 && hour <= 17) setGreet("GOOD AFTERNOON");
    else if (hour >= 17 && hour <= 24) setGreet("GOOD EVENING");
  };

  // @ts-ignore
  // const info = datav?.data?.filter((obj) => {
  //   return obj?.status === "COMPLETED";
  // });

  const Card = ({ value }) => {
    return (
      <View style={styles.LatestView}>
        <View
          style={
            value?.service?.category === "EMPLOYEE"
              ? styles.viewIcon
              : value?.service?.category === "TENANT"
              ? styles.viewIcon2
              : styles.viewIcon3
          }>
          <Text>
            {value?.service?.category === "EMPLOYEE" ? (
              <AntDesign style={styles.idcard} name="idcard" size={12} />
            ) : value?.service?.category === "TENANT" ? (
              <Entypo style={styles.idcard2} name="location" size={12} />
            ) : (
              value?.service?.category === "CERTIFICATE" && (
                <Ionicons style={styles.idcard3} name="business" size={12} />
              )
            )}
          </Text>
        </View>
        <View style={styles.UpNamedownName}>
          <Text style={styles.UpName}>
            {value?.requester?.user?.firstName}{" "}
            {value?.requester?.user?.lastName} {"  "}
            <Text style={styles.ScheduleNameTop2}>
              ₦{value?.payment?.amount}
            </Text>
          </Text>
          <View style={styles.downNameDate}>
            <Text style={styles.downName}>{value?.service?.description} </Text>
            {""}
            <Text style={styles.downNameSide}>
              {" "}
              {moment(value?.createdAt).format("DD-MMM-YY")}
            </Text>
          </View>
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
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainScroll}>
        <View>
          <Text style={styles.morning}>{greet}</Text>
          <Text style={styles.UserName}>{user?.displayName}</Text>
        </View>

        <BannerSlider
          loading={loading}
          count={data?.length}
          completed={COMPLETED?.length}
          ongoing={ONGOING?.length}
          canclled={CANCELLED?.length}
          rejected={REJECTED?.length}
          pending={pending?.length}
        />
      </View>
      <TouchableOpacity
        style={styles.Badge}
        onPress={() => navigation.navigate("Schedule")}>
        <Text style={styles.schedule}>New verification schedule </Text>
        <Badge value={!Schedule ? 0 : Schedule?.length} status="warning" />
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
        {isLoading ? (
          <Skeleton />
        ) : (
          <View>
            {datav === null ? (
              <View style={styles.mainEmoji}>
                <Ionicons
                  name="ios-folder-open-outline"
                  size={120}
                  color="#D9E8FD"
                />
                <View>
                  <Text style={styles.ticket}>No Data Found!</Text>
                </View>
              </View>
            ) : (
              data?.map((item, index) => {
                return (
                  // @ts-ignore
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate("DetailsPage", {
                        Id: item?.payment?.requestId,
                        requestId: item?.id,
                        name: item?.service?.description,
                        category: item?.service?.category,
                        clientinfo: item,
                      })
                    }>
                    <Card key={index} value={item} />
                  </TouchableOpacity>
                );
              })
            )}
          </View>
        )}
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  ticket: {
    color: "#007AFF",
    fontFamily: "Poppins_600SemiBold",
  },

  downNameDate: { flexDirection: "row" },

  ScheduleNameTop2: {
    fontSize: 10,
    fontFamily: "Poppins_600SemiBold",
    paddingEnd: 10,
    // paddingLeft: 10
    color: "red",
    backgroundColor: "#FEEAEA",
  },
  mainEmoji: {
    margin: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
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
  downNameSide: {
    color: "#AAA",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    marginLeft: 20,
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
    fontFamily: "Poppins_600SemiBold",
    alignItems: "center",
    color: "#000",
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
    alignItems: "center",
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
    maxHeight: 230,
  },
});
