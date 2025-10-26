import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from '@react-native-vector-icons/material-design-icons'

import ProfileScreen from '../Profile'

const Tab = createBottomTabNavigator()

const renderTabBarIcon = (color: string, size: number) => (
  <MaterialIcons color={color} name="eye-outline" size={size} />
)

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#ddd'
        }
      }}
    >
      <Tab.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => renderTabBarIcon(color, size)
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
