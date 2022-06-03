/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Splash from './src/organisms/Splash';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TextInput from './src/molecules/TextInput';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(myTimeout);
  }, []);
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   height: '100%',
  // };

  return (
    <NavigationContainer>
      {isLoading ? (
        <Splash />
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
      {/* <SafeAreaView>
        {isLoading ? (
          <Splash />
        ) : (
          // <ScrollView
          //   contentInsetAdjustmentBehavior="automatic"
          //   style={styles.scrollView}>
          //   <View style={styles.content}>
         
          //   </View>
          // </ScrollView>
        )}
      </SafeAreaView> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  content: {},

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
