import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Scanner from './src/Screens/Scanner'
import QRList from './src/Screens/ListOfElements'

const tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer /* style={styles.container} */>
      <tabs.Navigator initialRouteName={Scanner}>
        <tabs.Screen name="Scanner" component={Scanner} />
        <tabs.Screen name="List" component={QRList} />
      </tabs.Navigator>      
    </NavigationContainer>

  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
