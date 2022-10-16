import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';
import { AntDesign, Feather, FontAwesome, FontAwesome5, Fontisto, Foundation, Ionicons } from '@expo/vector-icons';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { Pressable, View } from 'react-native';
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
          headerShown: false,
         headerStyle: {
           backgroundColor: Colors[colorScheme].tint,
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
           fontFamily: 'Poppins_500Medium',
         },
       }}>

         <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
         <Stack.Screen name="SplashScreen" component={SplashScreen} />
         <Stack.Screen
           name="Login"
           component={Login}
           options={{ gestureEnabled: false }}
         />
         <Stack.Screen name="PasswordReset" component={PasswordReset} />
         <Stack.Screen name="PasswordEmail" component={PasswordEmail} />
         <Stack.Screen name="AboutUs" component={AboutUs} />
         {/* <Stack.Screen name="Home" component={Home} /> */}


         <Stack.Screen name="Reports" component={Reports} />
         <Stack.Screen
           name="PersonalInformation"
           component={PersonalInformation}
         />
         <Stack.Screen
           name="PasswordSecurity"
           component={PasswordSecurity}
         />
         <Stack.Screen name="Support" component={Support} />
         <Stack.Screen name="Verification" component={Verification} />
         <Stack.Screen name="ReportStatus" component={ReportStatus} />
         <Stack.Screen name="Schedule" component={Schedule} /> 
         <Stack.Screen name="Notification" component={Notification} options={{ title: 'Notification' }} />
         <Stack.Screen name="Accounts" component={Accounts} options={{ title: 'Accounts' }} />
         {/* <Stack.Screen name="AboutUs" component={AboutUs} options={{ title: 'AboutUs' }} /> */}
         <Stack.Group screenOptions={{ presentation: 'modal' }}>
           <Stack.Screen name="Modal" component={ModalScreen} />
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
          tabBarActiveTintColor: Colors[colorScheme].tint,
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={({ navigation }: RootTabScreenProps<'Home'>) => ({
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="qr-code" color={color} size={size} />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
          })}
        />
        {/* <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}
        <BottomTab.Screen
          name="Schedule"
          component={Schedule}
          options={{
            title: "Schedule",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="calendar" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Reports"
          component={Reports}
          options={{
            title: "Reports",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="profile" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Accounts"
          component={Accounts}
          options={{
            title: "Accounts",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle-o" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>

    );
  }
export default AuthStack;
  

