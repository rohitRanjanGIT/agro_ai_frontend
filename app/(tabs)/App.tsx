// import React from 'react';
// import BottomTabNavigator from '../../navigation/BottomTabNavigator';

// export default function App() {
//   return <BottomTabNavigator />;
// }
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../../navigation/BottomTabNavigator';
import LoginScreen from '../../screens/LoginScreen'
import SignupScreen from '../../screens/SignupScreen'; 
import LandingPage from '../../screens/LandingPage.js'; 

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginState = async () => {
      try {
        const loggedIn = await AsyncStorage.getItem('isLoggedIn');
        console.log(loggedIn);
        
        setIsLoggedIn(loggedIn === 'true');
      } catch (error) {
        console.error('Error checking login state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginState();
  }, []);

  if (isLoading) {
    return null; // Show a splash screen or loader if needed
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
          // <BottomTabNavigator />
        ) : (
          <>
            <Stack.Screen name="Landing" component={LandingPage} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
