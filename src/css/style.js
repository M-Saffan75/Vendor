import { COLOURS } from '../theme/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  icon_plus_bg: {
    bottom: 10,
    borderRadius:100,
    paddingVertical:8,
    paddingHorizontal:9,
    position: 'absolute',
    backgroundColor:COLOURS.dark_blue,
  },

  icon_plus: {
    fontSize: 13,
    color: COLOURS.bluewhite,
  },

  circ_image: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: COLOURS.light
  },

  image_manage: {
    alignItems: 'center',
  },

  theme_name: {
    fontSize: 16,
    color: COLOURS.black,
    fontFamily: 'Urbani-ExtraBold',
  },

  theme_select_image: {
    height: 20,
    width: 20
  },

  theme_select: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: COLOURS.black,
    justifyContent: 'space-between',
  },


  // 
  cancelButton: {
    padding: 8,
    minWidth: 80,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 6,
    marginTop: 10,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOURS.blue,
  },

  okButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: COLOURS.blue,
  },

  buttonText: {
    fontSize: 13,
    letterSpacing: .7,
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

  theme_change: {
    width: 20,
    height: 20,
  },

  switch_here: {
    width: 60,
    marginTop: '5%',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLOURS.blue,
  },

  bg_switch: {
    alignItems: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 20,
  },

  insert_head: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 10,
    color: COLOURS.black,
    fontFamily: 'Urbani-UltraBlack',
  },

  inpt_inside: {
    width: '42%',
    marginHorizontal: 10,
    flexDirection: 'column',
  },

  both_inpts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  inpt_heres: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    letterSpacing: .3,
    paddingHorizontal: 10,
    borderColor: COLOURS.black,
    fontFamily: 'Urbani-UltraBlack',
  },

  names: {
    fontSize: 16,
    letterSpacing: .5,
    paddingVertical: 10,
    paddingTop: 0,
    color: COLOURS.apple,
    fontFamily: 'Urbani-ExtraBold',
  },


  image_back: {
    height: '100%',
    backgroundColor: COLOURS.apple,
    marginBottom: '7%',
  },

  envelop_image: {
    width: 25,
    height: 25,
  },

  envelop: {
    width: 40,
    fontSize: 28,
    color: COLOURS.apple,
  },

  gap: {
    marginTop: '5%',
  },

  child_container: {
    width: '100%',
    alignItems: 'center',
  },

  inpt_here: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    letterSpacing: .3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLOURS.black,
    fontFamily: 'Urbani-Regular',
    justifyContent: 'space-between',
  },

  inpt: {
    width: '100%',
    letterSpacing: .4,
    color: COLOURS.black,
    fontFamily: 'Urbani-Regular',
  },

  name: {
    width: '100%',
    fontSize: 16,
    letterSpacing: .5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    color: COLOURS.apple,
    fontFamily: 'Urbani-ExtraBold',
  },


  btn: {
    width: 300,
    marginTop: '10%',
    borderRadius: 5,
    backgroundColor: COLOURS.red,
  },

  have_not_account: {
    fontSize: 12,
    color: '#1b1b1b',
    textAlign: 'left',
    letterSpacing: .5,
    paddingHorizontal: 30,
    fontFamily: 'Urbani-Regular',
  },

  login_text: {
    fontSize: 12,
    letterSpacing: 1,
    paddingVertical: 15,
    textAlign: 'center',
    color: COLOURS.white,
    textTransform: 'uppercase',
    fontFamily: 'Urbani-ExtraBold',
  },
});

export default styles;
