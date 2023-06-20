import styles from '../css/style'
import themeContext from '../../Context/themeContext';
import React, { useState, useContext, useEffect } from 'react'
import { EventRegister } from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, useColorScheme, TouchableWithoutFeedback } from 'react-native'

const ModalBox = ({ modalVisible, setModalVisible }) => {


    const apptheme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState('')
    const colorScheme = useColorScheme();

    useEffect(() => {
        const retrieveTheme = async () => {
            const theme = await AsyncStorage.getItem('THEME');
            setDarkMode(JSON.parse(theme));
        };
        retrieveTheme();
    }, []);

    const SystemTrigger = async () => {
        setDarkMode(null);
        await AsyncStorage.removeItem('THEME');
        EventRegister.emit('changeTheme', null);
        setTimeout(() => {
            setModalVisible(false);
        }, 100);
    };

    const DarkTrigger = async () => {
        setDarkMode(true);
        await AsyncStorage.setItem('THEME', JSON.stringify(true));
        EventRegister.emit('changeTheme', true);
        setTimeout(() => {
            setModalVisible(false);
        }, 100);
    };

    const LightTrigger = async () => {
        setDarkMode(false);
        await AsyncStorage.setItem('THEME', JSON.stringify(false));
        EventRegister.emit('changeTheme', false);
        setTimeout(() => {
            setModalVisible(false);
        }, 100);
    };


    return (
        <>
            <View style={styles.container}>
                <Modal visible={modalVisible} animationType="fade" transparent={true}>
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={styles.modalContainer}>
                            <View style={[styles.modal, { backgroundColor: apptheme.background }]}>
                                <TouchableOpacity activeOpacity={0.8} style={[styles.theme_select, { borderColor: apptheme.borderColor }]} onPress={SystemTrigger}>
                                    <Text style={[styles.theme_name, { color: apptheme.color }]}>System Default</Text>
                                    <Image
                                        source={
                                            colorScheme === 'default' || darkMode === null
                                                ? require('../images/select.png')
                                                : require('../images/non_select.png')
                                        }
                                        style={styles.theme_select_image}
                                        tintColor={apptheme.color}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.8} style={[styles.theme_select, { borderColor: apptheme.borderColor }]} onPress={DarkTrigger} value={darkMode}>
                                    <Text style={[styles.theme_name, { color: apptheme.color }]}>Dark </Text>
                                    {!darkMode ? < Image source={require('../images/non_select.png')} style={styles.theme_select_image} tintColor={apptheme.color} />
                                        :
                                        <Image source={require('../images/select.png')} style={styles.theme_select_image} tintColor={apptheme.color} />
                                    }
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.8} style={[styles.theme_select, { borderColor: apptheme.borderColor }]} onPress={LightTrigger}>
                                    <Text style={[styles.theme_name, { color: apptheme.color }]}>Light</Text>
                                    {darkMode === false ? (
                                        <Image source={require('../images/select.png')} style={styles.theme_select_image} tintColor={apptheme.color} />
                                    ) : (
                                        <Image source={require('../images/non_select.png')} style={styles.theme_select_image} tintColor={apptheme.color} />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </>

    )
}

export default ModalBox