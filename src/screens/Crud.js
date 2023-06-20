import styles from '../css/style'
import ModalBox from './ModalBox';
import bg from '../images/adds.png'
import React, { useState } from 'react'
import { COLOURS } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { Image_upload, create_data } from '../backend/Backend';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ScrollView, Text, TextInput, View, TouchableOpacity, StatusBar, Image, ImageBackground, TouchableWithoutFeedback, Alert } from 'react-native';

const Crud = () => {


    const navigation = useNavigation()
    const [age, setAge] = useState('46');
    const [name, setName] = useState('Hiddelston');
    const [profession, setProfession] = useState('Actor');
    const [galleryphoto, setGalleryPhoto] = useState(null);
    const [experience, setExperience] = useState('18years');
    const [modalVisible, setModalVisible] = useState(false);
    const [checkimage, setCheckImage] = useState(null);


    const openModal = () => {
        setModalVisible(true);
    };

    const create_crud = async () => {
        const response = await create_data(age, name, profession, experience, checkimage);
        if (response.data.status == 200) {
            navigation.replace('User_Data')
        } else {
            console.log("Error");
        }
    }

    const Img_Upload = () => {
        Image_upload(setGalleryPhoto, setCheckImage)
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.dark_blue} barStyle='light-content' />
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: '100%', width: '100%' }}>

                <ImageBackground source={bg} style={styles.image_back} resizeMode='cover'>
                    <View style={styles.bg_switch}>
                        <TouchableOpacity style={styles.switch_here} activeOpacity={0.6} onPress={openModal}>
                            <Image source={require('../images/moon.png')} style={styles.theme_change} tintColor={COLOURS.white} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.image_manage}>
                        {galleryphoto == null ?
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <View style={styles.circ_image}></View>
                                <TouchableOpacity activeOpacity={0.8} style={styles.icon_plus_bg} onPress={Img_Upload}>
                                    <FontAwesome5 name='plus' style={styles.icon_plus} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                < Image source={{ uri: galleryphoto }}
                                    style={styles.circ_image} resizeMode='contain'
                                />
                                <TouchableOpacity activeOpacity={0.8} style={styles.icon_plus_bg} onPress={Img_Upload}>
                                    <FontAwesome5 name='plus' style={styles.icon_plus} />
                                </TouchableOpacity>
                            </View>
                        }
                    </View>

                    <View style={styles.child_container}>
                        <Text style={styles.insert_head}>Insert Your Data</Text>

                        <View style={styles.both_inpts}>
                            <View style={styles.inpt_inside}>
                                <Text style={styles.names}>Your Name</Text>
                                <View style={styles.inpt_heres}>
                                    <TextInput placeholder='Your Name' placeholderTextColor={'grey'} style={styles.inpt} onChangeText={setName} />
                                </View>
                            </View>

                            <View style={styles.inpt_inside}>
                                <Text style={styles.names}>Your Age</Text>
                                <View style={styles.inpt_heres}>
                                    <TextInput placeholder='Your Age' placeholderTextColor={'grey'} style={styles.inpt} onChangeText={setAge} keyboardType='number-pad' />
                                </View>
                            </View>
                        </View>
                        <View style={styles.gap}></View>
                        <Text style={styles.name}>Your Profession</Text>
                        <View style={styles.inpt_here}>
                            <TextInput placeholder='Your Profession' placeholderTextColor={'grey'} style={styles.inpt} onChangeText={setProfession} />
                        </View>

                        <Text style={styles.name}>Your Experience</Text>
                        <View style={styles.inpt_here}>
                            <TextInput placeholder='Your Experience' placeholderTextColor={'grey'} style={styles.inpt} onChangeText={setExperience} />
                        </View>

                        <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={create_crud}>
                            <Text style={styles.login_text}>Add Here</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>

            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <ModalBox modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </TouchableWithoutFeedback>

        </>
    )
}

export default Crud