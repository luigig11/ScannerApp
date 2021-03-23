import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
/* import { StatusBar } from 'expo-status-bar'; */
import {connect} from 'react-redux'

const QRList = ({QrString}) => {
    
    return (
        
        <View style={ styles.container} >
            {console.log(`decoded QrString: ${QrString}`)}
            <Text>Pantalla para hacer listar resultados</Text>
            {/* <StatusBar style="auto" /> */}
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})

const mapStateToProps = state => {
    return {
        QrString: state.QrString
    }
}

export default connect(mapStateToProps, null) (QRList);