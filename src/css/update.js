import { StyleSheet } from 'react-native';
import { COLOURS } from '../theme/theme';

const styles = StyleSheet.create({

    bg_arrow : {
        backgroundColor:COLOURS.blue,
        padding:5,
        width:50,
        height:50,
        margin:20,
        marginHorizontal:10,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
    },

    icon_arrow : {
        fontSize:25,
        color:COLOURS.white
    },

    name: {
        margin: 5,
        fontSize: 20,
        marginHorizontal: 15,
        color: COLOURS.dark_blue,
        fontFamily: 'Urbani-ExtraBold'
    },

    inpt_fetch: {
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 10,
        letterSpacing: .2,
        marginVertical: 12,
        marginHorizontal: 15,
        color: COLOURS.black,
        paddingHorizontal: 10,
        fontFamily: 'Urbani-Regular',
        borderColor: COLOURS.dark_blue,
    },

    udpate_heading: {
        margin: 20,
        marginTop:10,
        fontSize: 25,
        marginBottom: '10%',
        color: COLOURS.dark_blue,
        fontFamily: 'Urbani-ExtraBold'
    },

    icon: {
        fontSize: 20,
        color: COLOURS.bluewhite
    },

    both_btn: {
        marginTop:'10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    bg_icon: {
        marginTop:'10%',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal:20,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.dark_blue,
    },

    delete: {
        paddingHorizontal: 10,
        color: COLOURS.bluewhite,
        fontFamily: 'Urbani-Regular',
        letterSpacing: .4,
    },
    update_text: {
        paddingHorizontal: 10,
        color: COLOURS.bluewhite,
        fontFamily: 'Urbani-Regular',
        letterSpacing: .4,
    },

    heading: {
        fontSize: 20,
        color: COLOURS.bluewhite,
        fontFamily: 'Urbani-UltraBlack',
    },

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLOURS.bluewhite
    }
})

export default styles