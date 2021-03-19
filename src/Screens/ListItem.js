import React from 'react'
import { View, Text } from 'react-native';

const ListItem = ({item}) => {
    return (
       <View>
           <Text>{item}</Text>
       </View> 
    );
}

export default ListItem;