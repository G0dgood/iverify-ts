import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';
import { AntDesign, Feather, FontAwesome, FontAwesome5, Fontisto, Foundation, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { Pressable, Image, StyleSheet } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import { Avatar } from 'react-native-elements';
import Accounts from '../screens/Accounts';
import Reports from '../screens/Reports';
import Schedule from '../screens/Schedule';
import Home from '../screens/Home';
import Colors from '../constants/Colors';
import AboutUs from '../screens/AboutUs';
import Login from '../screens/Login';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import PasswordEmail from '../screens/PasswordEmail';
import PasswordReset from '../screens/PasswordReset';
import PasswordSecurity from '../screens/PasswordSecurity';
import PersonalInformation from '../screens/PersonalInformation';
import ReportStatus from '../screens/ReportStatus';
import SplashScreen from '../screens/SplashScreen';
import Support from '../screens/Support';
import Verification from '../screens/Verification';
import Notification from '../screens/Notification';
import DetailsPage from '../screens/DetailsPage';



const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator();


function AuthStack() {


  const [Token, setToken] = useState();
  const [Title, setTitle] = useState();


  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('title')
  //     // @ts-ignore
  //     setToken(value)
  //   } catch (e) {
  //     console.log(`isLoggedIn in error ${e}`)
  //   }
  // }
  // getData()

  // useEffect(() => {
  //   if (Token) {
  //     setTitle(Token)
  //   }
  // }, [Token])



  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator initialRouteName="HomeD" screenOptions={{
      // headerShown: false,
      headerStyle: { backgroundColor: Colors[colorScheme].TopTab },
      headerTintColor: Colors[colorScheme].headerTintColor,
      headerTitleStyle: { fontWeight: 'bold', fontFamily: 'Poppins_500Medium', },
      headerShadowVisible: false,
    }}>

      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation}
        options={({ navigation }) => ({
          title: 'Personal Information', headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('AboutUs', { screen: 'Modal' })}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={28}
                color={Colors[colorScheme].text}
              // style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="PasswordSecurity" component={PasswordSecurity} options={{ title: 'Password Security' }} />
      <Stack.Screen name="Support" component={Support} options={{ title: 'Support' }} />
      <Stack.Screen name="Verification" component={Verification} options={{ title: 'Verification' }} />
      <Stack.Screen name="ReportStatus" component={ReportStatus} options={({ navigation }) => ({
        title: 'Report Status',
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Accounts')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <Image style={styles.imageHeader2} source={require('../assets/images/john.png')} />
          </Pressable>
        ),

      })} />
      <Stack.Screen name="Schedule" component={Schedule} options={{ title: 'Schedule' }} />
      <Stack.Screen name="Accounts" component={Accounts} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        {/* <Stack.Screen name="Modal" component={ModalScreen} /> */}
        <Stack.Screen name="DetailsPage" component={DetailsPage} options={{ title: 'Details Page' }} />
        <Stack.Screen name="Notification" component={Notification} options={{ title: 'Notification' }} />
        <Stack.Screen name="AboutUs" component={AboutUs} options={{ title: 'About Us' }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}




function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].buttonTab,
        // headerShadowVisible: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerTitle: '',
          headerShadowVisible: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="qr-code" color={color} size={size} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Accounts')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Image style={styles.imageHeader} source={require('../assets/images/john.png')} />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Notification')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialCommunityIcons name="bell" size={25} color={Colors[colorScheme].text} style={{ marginLeft: 15 }} />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Schedule"
        component={Schedule}
        options={({ navigation }: RootTabScreenProps<'Schedule'>) => ({
          title: 'Schedule',
          tabBarIcon: ({ color, size }) => <FontAwesome name="calendar" color={color} size={size} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Accounts')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Image style={styles.imageHeader} source={require('../assets/images/john.png')} />
            </Pressable>
          ),

        })}
      />
      <BottomTab.Screen
        name="Reports"
        component={Reports}
        options={({ navigation }: RootTabScreenProps<'Reports'>) => ({
          title: 'Reports',
          tabBarIcon: ({ color, size }) => <AntDesign name="profile" color={color} size={size} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Accounts')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Image style={styles.imageHeader} source={require('../assets/images/john.png')} />
            </Pressable>
          ),

        })}
      />
      <BottomTab.Screen
        name="Accounts"
        component={Accounts}
        options={({ navigation }: RootTabScreenProps<'Accounts'>) => ({
          title: 'Accounts',
          tabBarIcon: ({ color, size }) => <FontAwesome name="user-circle-o" color={color} size={size} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('AboutUs')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].buttonTab}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      // options={{
      //   title: "Accounts",
      //   tabBarIcon: ({ color, size }) => (
      //     <FontAwesome name="user-circle-o" color={color} size={size} />
      //   ),
      // }}
      />
    </BottomTab.Navigator>

  );
}
export default AuthStack;

const styles = StyleSheet.create({

  imageHeader: {
    marginRight: 15,
    width: 30,
    height: 30,
    borderRadius: 5
  },
  imageHeader2: {
    width: 30,
    height: 30,
    borderRadius: 5
  },
})
