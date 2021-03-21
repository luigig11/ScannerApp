import React, { useState } from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    Pressable,
    ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Animated, { Easing } from 'react-native-reanimated'
import { Appbar } from 'react-native-paper';
import { TextInput } from 'react-native-paper'


const { Value, timing } = Animated;

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const SearchBar = () => {

    const [focus, Setfocus] = useState(false);

    const onFocus = () => {
        console.log('se presiono el boton de la lupa')
        // update state
        Setfocus(true)
        // animation config
        // input box
        const input_box_translate_x_config = {
            duration: 200,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }
        const back_button_opacity_config = {
            duration: 200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }

        // content
        /* const content_translate_y_config = {
            duration: 0,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        } */
        /* const content_opacity_config = {
            duration: 200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        } */

        // run animation
        timing(input_box_translate_x, input_box_translate_x_config).start()
        timing(back_button_opacity, back_button_opacity_config).start()
        /*timing(this._content_translate_y, content_translate_y_config).start()
        timing(this._content_opacity, content_opacity_config).start() */

        // force focus
       /*  this.refs.input.focus() */

    }

    const onBlur = () => {
        // update state
        Setfocus(false)
        // animation config
        // input box
        const input_box_translate_x_config = {
            duration: 200,
            toValue: width,
            easing: Easing.inOut(Easing.ease)
        }
       /*  const back_button_opacity_config = {
            duration: 50,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }
 */
        // content
        /*const content_translate_y_config = {
             duration: 0,
            toValue: height,
            easing: Easing.inOut(Easing.ease)
        }
        const content_opacity_config = {
            duration: 200,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        } */

        // run animation
        timing(input_box_translate_x, input_box_translate_x_config).start()
        /* timing(this._back_button_opacity, back_button_opacity_config).start()
        timing(this._content_translate_y, content_translate_y_config).start()
        timing(this._content_opacity, content_opacity_config).start()
 */
        // force blur
        /* this.refs.input.blur(); */

    }


    let input_box_translate_x = new Value(width);
    let back_button_opacity = new Value(0)
    let content_translate_y = new Value(height)
    let content_opacity = new Value(0)

    return (
        <View style={styles.header_inner}>
            {/* <Appbar.Content title='QR Data' /> */}
            <Pressable onPress={onFocus} style={styles.search_icon_box}>
                <Icon name="magnify" size={22} color={"#000000"} />
            </Pressable>
            <Animated.View style= { styles.input_box, { transform: [{ translateX: input_box_translate_x }] }}>
                <Animated.View style={{opacity:back_button_opacity}} >
                    <Pressable onPress={onBlur} style={styles.back_icon_box}>
                        <Icon name="chevron-left" size={22} color={"#000000"} />
                    </Pressable>
                </Animated.View>
                <TextInput placeholder="Search..."  style={styles.input}/>
            </Animated.View>
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    header_safe_area: {
        zIndex: 1000
    },
    header: {
        height: 50,
        paddingHorizontal: 16
    },
    header_inner: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    search_icon_box: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#e4e6eb',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input_box: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        width: width - 32
    },
    back_icon_box: {
        width: 40,
        height: 40,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#e4e6eb',
        borderRadius: 16,
        paddingHorizontal: 16,
        fontSize: 15
    },
    content: {
        width: width,
        height: height,
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 999
    },
    content_safe_area: {
        flex: 1,
        backgroundColor: 'white'
    },
    content_inner: {
        flex: 1,
        paddingTop: 50
    },
    separator: {
        marginTop: 5,
        height: 1,
        backgroundColor: '#e6e4eb'
    },
    image_placeholder_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '-50%'
    },
    image_placeholder: {
        width: 150,
        height: 113,
        alignSelf: 'center'
    },
    image_placeholder_text: {
        textAlign: 'center',
        color: 'gray',
        marginTop: 5
    },
    search_item: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e4eb',
        marginLeft: 16
    },
    item_icon: {
        marginRight: 15
    }
}) 