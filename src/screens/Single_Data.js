import styles from '../css/single';
import { COLOURS } from '../theme/theme';
import themeContext from '../../Context/themeContext';
import React, { useEffect, useContext, useState } from 'react'
import { data_delete, get_single_data } from '../backend/Backend';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useRoute, useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, View, StatusBar, Modal, TextInput, TouchableOpacity, Image } from 'react-native'

const Single_Data = () => {


    const route = useRoute();
    const id = route.params.data
    const navigation = useNavigation()
    const [data, setData] = useState('')
    const apptheme = useContext(themeContext)

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    useEffect(() => {
        get_data()
    }, [])

    const get_data = async () => {
        const result = await get_single_data(id);
        setData(result)
    }

    const single_data_delete = () => {
        data_delete(id, navigation)
        setTimeout(() => {
            setModalVisible(false)
        }, 100);
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.dark_blue} barStyle='light-content' />
            <View style={[styles.container, { backgroundColor: apptheme.background }]}>
                <TouchableOpacity activeOpacity={0.8} style={styles.bg_arrow} onPress={() => navigation.replace('User_Data')}>
                    <MaterialIcons name='keyboard-arrow-left' style={styles.icon_arrow} />
                </TouchableOpacity>

                <View>
                    <Text style={[styles.specific_name, { color: apptheme.color }]}>Specific Information</Text>
                </View>

                <View style={styles.get_img_box}>
                    <Image source={require('../images/dummy-profile.jpg')} style={styles.image_get} />
                </View>

                <Text style={[styles.name, { color: apptheme.color }]}>Your Age</Text>
                <TextInput defaultValue={data.age} style={[styles.inpt_fetch, { borderColor: apptheme.borderColor, color: apptheme.color }]} editable={false} />
                <Text style={[styles.name, { color: apptheme.color }]}>Your Name</Text>
                <TextInput defaultValue={data.name} style={[styles.inpt_fetch, { borderColor: apptheme.borderColor, color: apptheme.color }]} editable={false} />
                <Text style={[styles.name, { color: apptheme.color }]}>Your Profession</Text>
                <TextInput defaultValue={data.profession} style={[styles.inpt_fetch, { borderColor: apptheme.borderColor, color: apptheme.color }]} editable={false} />
                <Text style={[styles.name, { color: apptheme.color }]}>Your Experience</Text>
                <TextInput defaultValue={data.experience} style={[styles.inpt_fetch, { borderColor: apptheme.borderColor, color: apptheme.color }]} editable={false} />

                <View style={styles.both_btn}>
                    <TouchableOpacity activeOpcaity={0.7} style={styles.bg_icon}
                        onPress={() => navigation.replace('Update_Crud', { userId: id })}>
                        <Text style={styles.edit}>Edit</Text>
                        <MaterialCommunityIcons name='pencil' style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpcaity={0.7} style={styles.bg_icon_delete} onPress={openModal}>
                        <Text style={styles.delete}>Delete</Text>
                        <MaterialCommunityIcons name='trash-can-outline' style={styles.icon} />
                    </TouchableOpacity>
                </View>

            </View>

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={[styles.modal, { backgroundColor: apptheme.background }]}>
                        <View>
                            <Text style={[styles.ready_ride, { color: apptheme.color }]}>Are Your Sure Want To Delete ?</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.cancelButton}
                                onPress={() => { setModalVisible(false) }}>
                                <Text style={[styles.buttonText, { color: apptheme.color }]}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={styles.okButton} onPress={single_data_delete}>
                                <Text style={styles.buttonTexts}>Yes</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Single_Data