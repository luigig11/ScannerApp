import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/Redux/reducers/index'
import { DefaultTheme, Provider as PaperProvider, } from 'react-native-paper'
import TabsNavigator from './src/components/TabsNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffffff'
  }
}

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
      <PaperProvider theme={theme}>
        <NavigationContainer >
          <TabsNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

