import React from 'react'
import { View, Text } from 'react-native';
import {List} from 'react-native-paper'

const ListItem = ({item}) => {
    return (
       <View>
           
               
                   <List.Item title={item} />
               
           
           {/* <Text>{item}</Text> */}
       </View> 
    );
}

export default ListItem;