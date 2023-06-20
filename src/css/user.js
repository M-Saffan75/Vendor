import { COLOURS } from '../theme/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    rsult_warn : {
        fontSize:20,
        textAlign:'center',
        color:COLOURS.black,
        fontFamily:'Urbani-ExtraBold',
    },

    inpt_search : {
        borderWidth:1,
        marginBottom:0,
        borderRadius:30,
        letterSpacing:.4,
        marginVertical:20,
        color:COLOURS.black,
        marginHorizontal:20,
        paddingHorizontal:20,
        borderColor:COLOURS.black,
        fontFamily:'Urbani-ExtraBold',
    },

    trilogy: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    add_new_bg: {
        padding: 10,
        marginBottom:0,
        borderRadius: 10,
        marginTop: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOURS.light,
    },

    add_new_text: {
        fontSize: 17,
        color: COLOURS.dark_blue,
        fontFamily: 'Urbani-ExtraBold',
    },

    icon_add: {
        paddingHorizontal: 10,
        color: COLOURS.dark_blue,
    },

    add_container_box: {
        marginHorizontal: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    bg_arrow: {
        borderRadius: 100,
        paddingVertical: 14,
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: COLOURS.blue,
    },

    icon_arrow: {
        fontSize: 20,
        color:COLOURS.bluewhite
    },

    bg_back: {
        paddingBottom:'8%',
        backgroundColor:COLOURS.bluewhite
    },

    arrow_icon: {
        margin: 10,
        marginTop: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    heading: {
        fontSize: 20,
        color: COLOURS.blue,
        fontFamily: 'Urbani-UltraBlack',
    },

    bg_icon: {
        backgroundColor: COLOURS.peach,
        marginVertical: 10,
        borderRadius: 100,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    icon: {
        fontSize: 20,
        color: COLOURS.black,
    },

    data_box: {
        padding: 10,
        elevation: 10,
        borderRadius: 10,
        marginVertical: 15,
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: COLOURS.red,
    },

    name: {
        margin: 10,
        fontSize: 15,
        color: COLOURS.white,
        fontFamily: 'Urbani-Regular',
    },

    arrow_forward: {
        fontSize: 22,
        color: COLOURS.bluewhite,
    },

    arrow_bg: {
        alignItems: 'flex-end',
    },

    container: {
        height: '100%',
        width: '100%',
        backgroundColor:COLOURS.bluewhite
    },

    bg_light: {
        height: '100%',
        width: '100%',
    },
});

export default styles;
