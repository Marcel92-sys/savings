import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import DashboardScreen from './Screens/DashboardScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUp'>
      {/* <View style={styles.container}>
        <Text>Open the shit</Text>
        <StatusBar style="auto" />
      </View> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
