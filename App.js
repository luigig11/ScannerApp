import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Scanner from './src/Screens/Scanner'
import QRList from './src/Screens/ListOfElements'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/Redux/reducers/index'

const tabs = createBottomTabNavigator(); 

/* const intialState = {
  scanned: false,
  scannedList: []
}

const store = createStor(reducer, intialState); */

export default function App() {
  return (
    /* <Provider store={store}> */
      <NavigationContainer /* style={styles.container} */>
        <tabs.Navigator initialRouteName={Scanner}>
          <tabs.Screen name="Scanner" component={Scanner} />
          <tabs.Screen name="List" component={QRList} />
        </tabs.Navigator>
      </NavigationContainer>
    /* </Provider> */
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
