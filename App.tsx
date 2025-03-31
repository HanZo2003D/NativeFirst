import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Map from './src/screens/Map';
import GridExample from './src/screens/MapGrid';
import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/Signup';

import Tabs from './src/screens/tabs/NavigaterTab';

const RootStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Tabs" component={Tabs} />
        <RootStack.Screen name="signup" component={SignUp} />
        <RootStack.Screen name="login" component={Login} />
        <RootStack.Screen name="home" component={Home} />
        <RootStack.Screen name="about" component={About} />
        <RootStack.Screen name="map" component={Map} />
        <RootStack.Screen name="gogo" component={GridExample} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
