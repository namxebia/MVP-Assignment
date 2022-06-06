/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './src/app/store';
import Splash from './src/organisms/Splash';
import DashBoard from './src/screens/DashBoard';
import Login from './src/screens/Login';
import MPIN from './src/screens/MPIN';
import Register from './src/screens/Register';
import {getDeviceId} from './src/slices/authSlice';

const Stack = createNativeStackNavigator();
const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const deviceId = useSelector(getDeviceId);

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(myTimeout);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Splash />
      ) : (
        <Stack.Navigator
          initialRouteName={deviceId ? 'Login' : 'Register'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MPIN" component={MPIN} />
          <Stack.Screen name="DashBoard" component={DashBoard} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  const persisor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
