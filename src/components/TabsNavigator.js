import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Scanner from '../Screens/Scanner/Scanner'
import QRList from '../Screens/ListOfElements/ListOfElements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const tabs = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <tabs.Navigator initialRouteName={Scanner}>
            <tabs.Screen
                name="Scanner"
                component={Scanner}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='qrcode-scan' size={size} color={color} />
                }} />
            <tabs.Screen
                name="List"
                component={QRList}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='format-list-bulleted' size={size} color={color} />
                }} />
        </tabs.Navigator>
    )

}

export default TabsNavigator;
