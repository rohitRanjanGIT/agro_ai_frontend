import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Platform } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import PlanScreen from '../screens/PlanScreen';
import WeatherScreen from '../screens/WeatherScreen';
import AIAssistantScreen from '../screens/AIAssistantScreen';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name, isMiddleIcon }) => (
  <View style={{
    backgroundColor: focused ? '#E7F3EF' : 'transparent',
    padding: 8,
    borderRadius: isMiddleIcon ? 50 : 12,
    width: isMiddleIcon ? 60 : 45,
    height: isMiddleIcon ? 60 : 45,
    alignItems: 'center',
    justifyContent: 'center',
    ...(isMiddleIcon && {
      position: 'absolute',
      top: -30,
      backgroundColor: '#FFFFFF',
      borderWidth: 4,
      borderColor: focused ? '#2D6A4F' : '#E7F3EF',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    })
  }}>
    <FontAwesome5 
      name={name} 
      size={isMiddleIcon ? 24 : 20} 
      color={focused ? '#2D6A4F' : '#6B7280'}
    />
  </View>
);

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: Platform.OS === 'ios' ? 85 : 65,
            paddingBottom: Platform.OS === 'ios' ? 25 : 10,
            paddingTop: 10,
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#E5E7EB',
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
          tabBarActiveTintColor: '#2D6A4F',
          tabBarInactiveTintColor: '#6B7280',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
            marginTop: 5,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="home" />
            ),
          }}
        />
        <Tab.Screen 
          name="Camera" 
          component={CameraScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="camera" />
            ),
          }}
        />
        <Tab.Screen 
          name="AI Assistant" 
          component={AIAssistantScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="robot" isMiddleIcon={true} />
            ),
            tabBarLabel: () => null, // Hides the label for the middle tab
          }}
        />
        <Tab.Screen 
          name="Plan" 
          component={PlanScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="seedling" />
            ),
          }}
        />
        <Tab.Screen 
          name="Weather" 
          component={WeatherScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="cloud-sun" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
