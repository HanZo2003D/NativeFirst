import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store'; // Ensure Redux is set up

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#327958', // Active tab color
        tabBarInactiveTintColor: '#888', // Inactive tab color
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 58,
          paddingBottom: 10,
        },
        tabBarBadgeStyle: {
          backgroundColor: 'red',
          color: 'white',
          fontSize: 12,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
