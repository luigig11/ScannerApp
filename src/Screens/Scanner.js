import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Pressable } from 'react-native';
/* import { StatusBar } from 'expo-status-bar'; */
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import {connect} from 'react-redux'
import {setQRList, setScanned, setFocus, setHasPermission } from '../Redux/actions/index'
/* import { useLinkProps } from '@react-navigation/native'; */

const FINDERWIDTH = 280;
const FINDERHEIGHT = 230;
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const VIEWMINX = (DEVICE_WIDTH - FINDERWIDTH) / 2;
const VIEWMINY = (DEVICE_HEIGHT - FINDERHEIGHT) / 2;

const Scanner = ({ navigation, setQRList, setScanned, scanned, setFocus, focus, setHasPermission, hasPermission }) => {

    /* const [hasPermission, setHasPermission] = useState(null); */
    /* const [scanned, setScanned] = useState(false); */
    /* const [type, setType] = useState(BarCodeScanner.Constants.Type.back); */
    /* const [focus, setFocus] = useState(false);
 */
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted')
        })();
    }, [])

    useEffect(() => {
        const isfocus = () => setFocus(true)
        navigation.addListener('focus', isfocus);
        return () => navigation.removeListener('focus', isfocus);
    }, [])

    useEffect(() => {
        const unfocus = () => setFocus(false);
        navigation.addListener('blur', () => unfocus);
        return () => navigation.removeListener('blur', unfocus);
    }, [])

    const handledBarcodeScanned = (BarCodeScannerResult) => {
        /*  console.log(BarCodeScannerResult); */
        const { type, data, bounds } = BarCodeScannerResult
        console.log(`type: ${type} data: ${data} origin: ${{ bounds }}`)
        if (!scanned) {
            const { x, y } = bounds.origin;
            /* console.log(`x: ${x}, y: ${y}`); */
            if (x >= VIEWMINX && y >= VIEWMINY && x <= (VIEWMINX + FINDERWIDTH / 2) && y <= (VIEWMINY + FINDERHEIGHT / 2)) {
                setScanned(true);
                setQRList(data);
                alert(`Bar code with type ${type} and data ${data}`);
            }

        }
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permision</Text>
    }

    if (hasPermission === false) {
        return <Text>No acces to camera</Text>
    }

    return (

        <View style={{ flex: 1 }}>
            {
                focus === true

                    ? <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handledBarcodeScanned}
                        type={BarCodeScanner.Constants.Type.back}
                        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                        style={[StyleSheet.absoluteFillObject, styles.container]}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row'
                            }}
                        >
                            {/* <Pressable
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end'
                                }}
                                onPress={() => {
                                    setType(
                                        type === BarCodeScanner.Constants.Type.back ? BarCodeScanner.Constants.Type.front : BarCodeScanner.Constants.Type.back
                                    );
                                }}
                            >
                                <Text style={{ fontSize: 18, margin: 5, color: 'white' }} >Filp</Text>
                            </Pressable> */}
                        </View>
                        <BarcodeMask edgeColor={"#62B1F6"} showAnimatedLine />
                        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                    </BarCodeScanner>

                    : null
            }

        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    }
})

const mapDispatchToProps = {
    setQRList,
    setScanned,
    setFocus,
    setHasPermission
}

const mapStateToProps = state => {
    return {
        scanned: state.scanned,
        focus: state.focus,
        hasPermission: state.hasPermission
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Scanner);
/* export default Scanner */