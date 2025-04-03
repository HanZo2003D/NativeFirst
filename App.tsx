import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/Signup';

import Tabs from './src/screens/tabs/NavigaterTab';
import DetailScreen from './src/screens/DetailScreen';
import store from './src/store/store';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {Provider} from 'react-redux';

const RootStack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="login" component={Login} />
          <RootStack.Screen name="Tabs" component={Tabs} />
          <RootStack.Screen name="signup" component={SignUp} />

          <RootStack.Screen name="Detail" component={DetailScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
