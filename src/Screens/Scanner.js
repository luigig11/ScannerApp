import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux'
/* import { StatusBar } from 'expo-status-bar'; */

const Scanner = ({scannedList}) => {
    return (

        <View style={styles.container}>
            <Text>Pantalla para hacer el scanner</Text>
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

const mapStateToProps = (state) => {
    return {
        scanned: state.scanned
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Scanner);