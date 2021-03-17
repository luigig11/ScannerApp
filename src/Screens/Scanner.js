import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Scanner = () => {
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

export default Scanner;