import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Scanner from './src/Screens/Scanner'
import QRList from './src/Screens/ListOfElements'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/Redux/reducers/index'
import { Provider as PaperProvider, Avatar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const tabs = createBottomTabNavigator();

const intialState = {
  QrString: [],
  scanned: false,
  focus: false,
  hasPermission: null, 
  filteredList: [],
  query: ''
}

const store = createStore(reducer, intialState);

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer /* style={styles.container} */>
          <tabs.Navigator initialRouteName={Scanner}>
            <tabs.Screen name="Scanner" component={Scanner} options={{tabBarIcon: ({color, size}) => <Icon name='qrcode-scan' size={size} color={color} />}} />
            <tabs.Screen name="List" component={QRList} options={{tabBarIcon: ({color, size}) => <Icon name='format-list-bulleted' size={size} color={color} />}}/>
          </tabs.Navigator>
        </NavigationContainer>        
      </PaperProvider>
    </Provider>
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
