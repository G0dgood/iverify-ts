import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'; 
 

const API_URL = 'https://api-test.iverify.ng'


 
  
// Login user 
const login = async ( ) => { 
    const userInfo = await AsyncStorage.getItem('user')  
  return userInfo
}
  

// Logout
export const logout = () => {
  AsyncStorage.removeItem('user')
}
 
// All Assigned Request
const allassignedrequest = async (user: { idToken: any; }) => {
  const config = {
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${user?.idToken}`,
         },
  };  
  const { data } = await axios.get(`https://api-test.iverify.ng/api/admin/requests?page=1&limit=20`, config)  
//  console.log('requests',data)
  //   try { 
  //   await AsyncStorage.setItem('projects', JSON.stringify(data[0]));
  // } catch (e) {
  //    console.log(`isLoggedIn in error ${e}`)
  // }
  
  return data
}
 

const authService = { 
  login, 
  logout,
  allassignedrequest
}

export default authService
