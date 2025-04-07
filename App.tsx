import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/Signup';
import Tabs from './src/screens/tabs/NavigaterTab';

import store from './src/store/store';
import {Provider} from 'react-redux';
import CartScreen from './src/screens/tabs/CartScreen';
import OptVerfication from './src/screens/auth/OptVerfication';
import DetailScreen from './src/screens/DetailScreen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

const RootStack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, styles.horizontal]}>
        <Provider store={store}>
          <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
              <RootStack.Screen name="Tabs" component={Tabs} />
              <RootStack.Screen name="login" component={Login} />
              <RootStack.Screen name="Otp" component={OptVerfication} />
              <RootStack.Screen name="signup" component={SignUp} />
              <RootStack.Screen name="Detail" component={DetailScreen} />
              <RootStack.Screen name="Cart" component={CartScreen} />
            </RootStack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
