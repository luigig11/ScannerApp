import React from 'react';
import { View, StyleSheet, FlatList, Dimensions, TextInput, Pressable } from 'react-native';
/* import { StatusBar } from 'expo-status-bar'; */
import { connect } from 'react-redux'
import { Appbar, Divider, List } from 'react-native-paper'
import { setQRList, setQuery, setFilteredList } from '../Redux/actions/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { useCallback } from 'react';
import {withTheme} from 'react-native-paper'


const WINDOW_WIDTH = Dimensions.get('window').width

const QRList = ({ QrString, filteredList, setFilteredList, setQuery, query, theme }) => {
    /* const textValue = query;
    const [focusBar, setFocusBar] = useState(false);
    const [focusText, setFocusText] = useState(false); */
    console.log(theme)
    const onhandleSearch = (query) => {
        setQuery(query);
        setFilteredList(query)
        console.log(`the posibble matches are: ${filteredList}`)
        console.log(`filterList: ${filteredList}`)
    }

    /* const handlePress = () => {
        console.log('Se presiono el icono')
        focusBar ? setFocusBar(false) : setFocusBar(true) 
            
    } */

    /* const handleBlur = (query) => {
        console.log(query)
    } */
    
  /*   useEffect(() => {
        setFocusText(true)
    }, [focusText]) */

    /* useFocusEffect(
        useCallback(() => {                       
            return () => {
                
            }
        }, [])
    ); */
        
    const renderItemSeparator = () => <Divider /* style={styles.divider} *//>
    const keyExtractor = (item, index) => `${item}${Math.random()}`

    return (

        <View style={[{backgroundColor: theme.colors.surface}]} >
            {console.log(`decoded QrString: ${QrString}, id: ${QrString.length}`)}
            <Appbar.Header style={styles.container}>
                {/* <Pressable>
                    {
                        focusBar 
                        ? <Icon name='close' size={30} color={color}  onPress={handlePress}/>
                        : <Icon name='magnify' size={30} color={color} onPress={handlePress}/>
                        
                    }
                    
                </Pressable> */}

                <TextInput 
                    onChangeText={onhandleSearch} 
                    value={query} 
                    placeholder='Search...' 
                    style={[styles.searchbar, {backgroundColor: theme.colors.background}]} /* multiline={false} */ 
                    underlineColorAndroid = "transparent" 
                    placeholderTextColor = {theme.colors.placeholder} 
                    /* onBlur={handleBlur}  */                   
                />
            </Appbar.Header>
            <FlatList
                data={filteredList}
                renderItem={({ item }) => <List.Item title='QR Data' description={item} left={() => <List.Icon icon="qrcode" />} />}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {        
        flexDirection: 'row',
        justifyContent: 'center'        
    },
    searchbar: {
        /* backgroundColor: '#e4e6eb', */
        /*backgroundColor: '#6200ee', 
        margin: 3,
        justifyContent: 'center',
        width: WINDOW_WIDTH - 10,
        height: 40,
        borderRadius: 3, 
        color:'white',     
        borderColor: 'red',*/
        /* backgroundColor: '#1e376f', */
        /* borderRadius: 3, */
        /* backgroundColor: theme.colors.surface, */
        /* flex: 1, */
        /* justifyContent: 'center', */
        fontSize: 18,
        /* alignSelf: 'auto', */ 
        width: WINDOW_WIDTH - 20,
        /* color: 'white', */
        marginBottom: 0,
        /* borderBottomColor: '#6200ee', */
        borderColor: '#1e376f',
        borderWidth: 1.5,
        /* borderBottomWidth: 1.5,
        paddingLeft: 8,        
        borderTopLeftRadius: 2 */
        borderRadius: 10,
        paddingLeft: 8
        
        
    }
})

const mapDispatchToProps = {
    setQRList,
    setFilteredList,
    setQuery
}

const mapStateToProps = state => {
    return {
        QrString: state.QrString,
        filteredList: state.filteredList
    }
}

export default connect(mapStateToProps, mapDispatchToProps) ( withTheme(QRList));