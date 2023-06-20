import styles from '../css/update'
import { COLOURS } from '../theme/theme';
import themeContext from '../../Context/themeContext';
import React, { useState, useContext, useEffect } from 'react'
import { Prefill_Data, update_data } from '../backend/Backend';
import { useRoute, useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView, Text, TextInput, View, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';

const Update_Crud = () => {

    const route = useRoute();
    const uid = route.params.userId
    const navigation = useNavigation();
    const apptheme = useContext(themeContext)

    useEffect(() => {
        Autocomplete_Data()
    }, []);

    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [experience, setExperience] = useState('');

    const Autocomplete_Data = async () => {
        const result = await Prefill_Data(uid)
        setAge(result.age)
        setName(result.name)
        setProfession(result.profession)
        setExperience(result.experience)
    }

    const update_here = () => {
        update_data(uid, age, name, profession, experience, navigation);
    };

    return (
        <>
            <StatusBar backgroundColor={COLOURS.apple} barStyle='light-content' />
            <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { backgroundColor: apptheme.background }]}>
                <TouchableOpacity activeOpacity={0.8} style={styles.bg_arrow} onPress={() => navigation.replace('User_Data')}>
                    <MaterialIcons name='keyboard-arrow-left' style={styles.icon_arrow} />
                </TouchableOpacity>
                {/* <ImageBackground source={require('../images/simple.jpg')} style={styles.image_back} resizeMode='cover'> */}
                <View style={styles.child_container}>
                    <Text style={[styles.udpate_heading, { color: apptheme.color }]}>Update Information</Text>
                    <Text style={[styles.name, { color: apptheme.color }]}>Your Age</Text>
                    <TextInput placeholder='' style={[styles.inpt_fetch, { borderColor: apptheme.borderColor, color: apptheme.color }]} onChangeText={setAge} defaultValue={age} />
                    <Text style={[styles.name, { color: apptheme.color }]}>Your Name</Text>
                    <TextInput placeholder='' style={[styles.inpt_fetch, { borderColor: apptheme.borderColor, color: apptheme.color }]} onChangeText={setName} defaultValue={name} />
                    <Text style={[styles.name, { color: apptheme.color }]}>Your Profession</Text>
                    <TextInput placeholder='' style={[styles.inpt_fetch, { borderColor: apptheme.borderColor, color: apptheme.color }]} onChangeText={setProfession} defaultValue={profession} />
                    <Text style={[styles.name, { color: apptheme.color }]}>Your Experience</Text>
                    <TextInput placeholder='' style={[styles.inpt_fetch, { borderColor: apptheme.borderColor, color: apptheme.color }]} onChangeText={setExperience} defaultValue={experience} />

                    <TouchableOpacity style={styles.bg_icon} activeOpacity={0.6} onPress={update_here}>
                        <Text style={styles.update_text}>Update Here</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '100%', }} activeOpacity={0.6} >
                        <Text style={styles.have_not_account}></Text>
                    </TouchableOpacity>
                </View>
                {/* </ImageBackground> */}
            </ScrollView>
        </>
    )
}

export default Update_Crud