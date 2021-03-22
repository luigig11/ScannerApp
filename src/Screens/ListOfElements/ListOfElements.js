import React from 'react';
import { View, FlatList, TextInput, Text } from 'react-native';
import { connect } from 'react-redux'
import { Appbar, Divider, List, withTheme } from 'react-native-paper'
import { setQRList, setQuery, setFilteredList } from '../../Redux/actions/index'
import styles from './styles'



const QRList = ({ QrString, filteredList, setFilteredList, setQuery, query, theme }) => {

    /* console.log(theme) */
    const onhandleSearch = (query) => {
        setQuery(query);
        setFilteredList(query)
        /* console.log(`the posibble matches are: ${filteredList}`) */
    }

    const renderItemSeparator = () => <Divider />
    const keyExtractor = (item) => `${item}${Math.random()}`

    return (

        <View style={[{ backgroundColor: theme.colors.surface }]} >
            {console.log(`decoded QrString: ${QrString}, id: ${QrString.length}`)}
            <Appbar.Header style={styles.container}>

                <TextInput
                    onChangeText={onhandleSearch}
                    value={query}
                    placeholder='Search...'
                    style={[styles.searchbar, { backgroundColor: theme.colors.background }]}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={theme.colors.placeholder}

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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(QRList));