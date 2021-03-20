import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
/* import { StatusBar } from 'expo-status-bar'; */
import {connect} from 'react-redux'
import ListItem from './ListItem';
import {Appbar, List, Searchbar, TextInput} from 'react-native-paper'
import {useState, useEffect} from 'react'

const QRList = ({QrString}) => {
    const [search, setSearch] = useState(false);

    const handleSearch = () => {
        search ? setSearch(false) : setSearch(true)
        console.log(`search: ${search}`)
    }

    return (
        
        <View style={ styles.container} >
            {console.log(`decoded QrString: ${QrString}, id: ${QrString.length}`)}
            <Appbar.Header>
                <Appbar.Action icon='magnify' onPress={handleSearch}/>
                {/* <Appbar.Content title='QR Data' /> */}
                {search ?  <Searchbar iconColor='#FFFFFF' />: <Appbar.Content title='QR Data' />}
            </Appbar.Header>
            {/* <Searchbar /> */}
            <FlatList 
                data={QrString}
                /* renderItem={({item}) => <ListItem item={item} />} */
                /* renderItem={({item}) => <List.Item title={item} />} */
                renderItem={({item, index}) => <List.Item title={item} left={() => <List.Icon icon="qrcode" /> }/>}
                /* keyExtractor={(data) => data.length.toString()} */

            />
            {/* <Text>Pantalla para hacer listar resultados</Text> */}
            {/* <StatusBar style="auto" /> */}
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* padding: 20 */
    }
})

const mapStateToProps = state => {
    return {
        QrString: state.QrString,
        /* scannedId: state.scannedId */
    }
}

export default connect(mapStateToProps, null) (QRList);