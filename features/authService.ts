import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'; 
 

const API_URL = 'https://arkland-server.herokuapp.com/v1'


 
 
 
// Login user 
const login = async (value: any) => { 
  const response = await axios.post(API_URL + '/auth/login' , value)
  if (response.data) { 
    try {
      //  console.log('response',response.data)
    await AsyncStorage.setItem('userToken', response?.data?.accessToken)
    // await AsyncStorage.setItem('user', JSON.stringify(response?.data));
  } catch (e) {
     console.log(`isLoggedIn in error ${e}`)
  }
  }
  return response?.data
}
  

// Logout user
export const logout = () => {
  AsyncStorage.removeItem('user')
}
 

 

const authService = { 
  login, 
  logout,
}

export default authService
