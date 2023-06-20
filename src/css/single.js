import { StyleSheet } from 'react-native';
import { COLOURS } from '../theme/theme';

const styles = StyleSheet.create({

    image_get: {
        height:80,
        width:80,
        borderRadius:100,
    },

    get_img_box : {
        alignItems:'center',
    },

    // 
    cancelButton: {
        padding: 8,
        minWidth: 80,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical:6,
        marginTop:10,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLOURS.blue,
    },

    okButton: {
        padding:10,
        borderRadius:5,
        marginTop:10,
        paddingHorizontal:20,
        backgroundColor: COLOURS.blue,
    },

    buttonText: {
        fontSize: 13,
        letterSpacing:.7,
        color: COLOURS.blue,
        textTransform: 'uppercase',
        fontFamily: 'Urbani-ExtraBold'
    },

    buttonTexts: {
        color: '#fff',
        fontSize: 12,
        letterSpacing: 4,
        textTransform: 'uppercase',
        fontFamily: 'Urbani-ExtraBold'
    },

    buttonContainer: {
        top: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modal: {
        padding: 20,
        elevation: 10,
        width: '80%',
        borderRadius: 10,
        paddingVertical: 30,
        backgroundColor: '#fff',
    },

    text: {
        fontSize: 14,
        marginBottom: 10,
        color: COLOURS.black,
        fontFamily: 'Ubuntu-Medium'
    },
    ready_ride: {
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Urbani-ExtraBold'
      },
    // 

    bg_arrow: {
        backgroundColor: COLOURS.blue,
        padding: 5,
        width: 50,
        height: 50,
        margin: 20,
        marginHorizontal: 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon_arrow: {
        fontSize: 25,
        color: COLOURS.white
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

    specific_name: {
        margin: 20,
        marginTop: 10,
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
        marginTop: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    bg_icon: {
        width: '40%',
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'center',
        backgroundColor: COLOURS.dark_blue,
    },
    bg_icon_delete: {
        width: '40%',
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        justifyContent: 'center',
        backgroundColor: COLOURS.red,
    },

    delete: {
        paddingHorizontal: 10,
        color: COLOURS.bluewhite,
        fontFamily: 'Urbani-Regular',
        letterSpacing: .4,
    },
    edit: {
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