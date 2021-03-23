import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { connect } from 'react-redux'
import { setQRList, 
    setScanned, 
    setFocus, 
    setHasPermission, 
    setFilteredList 
} from '../../Redux/actions/index'
import { useFocusEffect } from '@react-navigation/native';
import { Appbar } from 'react-native-paper'
import styles from './styles'

const FINDERWIDTH = 280;
const FINDERHEIGHT = 230;
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const VIEWMINX = (DEVICE_WIDTH - FINDERWIDTH) / 2;
const VIEWMINY = (DEVICE_HEIGHT - FINDERHEIGHT) / 2;

const Scanner = ({ setQRList, 
    setScanned, scanned, 
    setFocus, focus, 
    setHasPermission, 
    hasPermission, 
    setFilteredList }) => {

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted')
        })();
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            setFocus(true);            
            return () => {
                setScanned(true);
                setFocus(false);
            }
        }, [])
    );

    const handledBarcodeScanned = (BarCodeScannerResult) => {
        const { type, data, bounds } = BarCodeScannerResult
        
        if (!scanned) {
            const { x, y } = bounds.origin;
            console.log(`x: ${x}, y: ${y}`);
            if (x >= VIEWMINX && y >= VIEWMINY && x <= (VIEWMINX + FINDERWIDTH / 2) && y <= (VIEWMINY + FINDERHEIGHT / 2)) {
                setScanned(true);
                setQRList(data);
                setFilteredList("");
                alert(`Bar code with type ${type} and data ${data}`);
            }

        }
    }
    
    if (hasPermission === null ) {
        return <View style={styles.container}><Text >Requesting for camera permision</Text></View>
    }

    if (hasPermission === false) {
        return <View style={styles.container}><Text>No acces to camera</Text></View>
    }

    return (

        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.Content title='Scanner' />
            </Appbar.Header>
            {
                focus === true

                    ? <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handledBarcodeScanned}
                        type={BarCodeScanner.Constants.Type.back}
                        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                        style={[StyleSheet.absoluteFillObject, styles.container]}
                    >                        
                        <BarcodeMask edgeColor={"#62B1F6"} showAnimatedLine />                        
                        {
                            scanned && 
                            <View style={styles.button}>
                                <Button title={'Tap to Scan'} onPress={() => setScanned(false)} />
                            </View>
                        }
                    </BarCodeScanner>

                    : null
            }

        </View>


    );

}

const mapDispatchToProps = {
    setQRList,
    setScanned,
    setFocus,
    setHasPermission,
    setFilteredList,
}

const mapStateToProps = state => {
    return {
        scanned: state.scanned,
        focus: state.focus,
        hasPermission: state.hasPermission
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
