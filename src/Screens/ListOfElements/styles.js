import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {        
        flexDirection: 'row',
        justifyContent: 'center'        
    },

    searchbar: {        
        fontSize: 18,       
        width: WINDOW_WIDTH - 20,        
        marginBottom: 0,        
        borderColor: '#1e376f',
        borderWidth: 1.5,       
        borderRadius: 10,
        paddingLeft: 8      
        
    }
})

export default styles;