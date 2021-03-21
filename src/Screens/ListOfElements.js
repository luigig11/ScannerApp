import React from 'react';
import { View, StyleSheet, FlatList, Dimensions, TextInput } from 'react-native';
/* import { StatusBar } from 'expo-status-bar'; */
import {connect} from 'react-redux'
import {Appbar, List} from 'react-native-paper'
import {setQRList, setQuery, setFilteredList} from '../Redux/actions/index'


const WINDOW_WIDTH = Dimensions.get('window').width

const QRList = ({QrString, filteredList, setFilteredList, setQuery, query}) => {

   const onhandleSearch = (query) => {        
        setQuery(query);        
        setFilteredList(query)
        console.log(`the posibble matches are: ${filteredList}`)
        console.log(`filterList: ${filteredList}`)
    } 

    return (
        
        <View style={ styles.container} >
            {console.log(`decoded QrString: ${QrString}, id: ${QrString.length}`)}
            <Appbar.Header>               
                <TextInput onChangeText={onhandleSearch} value={query} placeholder='Search...'style={styles.searchbar} />
            </Appbar.Header>           
            <FlatList                 
                data={filteredList}
                renderItem={({item}) => <List.Item title={item} left={() => <List.Icon icon="qrcode" /> }/>}
                /* keyExtractor={(data) => data.length.toString()} */
            />           
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1        
    },
    searchbar: {
        backgroundColor: '#e4e6eb',
        margin: 3,
        justifyContent:'center',
        width: WINDOW_WIDTH - 10,
        height: 40,
        borderRadius: 50
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

export default connect(mapStateToProps, mapDispatchToProps) (QRList);