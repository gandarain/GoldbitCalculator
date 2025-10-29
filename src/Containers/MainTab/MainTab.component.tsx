import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from '@react-native-vector-icons/material-design-icons'

import Colors from '../../Assets/Colors'
import ProfileScreen from '../Profile'

import styles from './MainTab.styles'

const Tab = createBottomTabNavigator()

const renderTabBarIcon = (color: string, size: number) => (
  <MaterialIcons color={color} name="account" size={size} />
)

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.BLUE,
        tabBarInactiveTintColor: Colors.GREY,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle
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
