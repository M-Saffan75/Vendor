import styles from '../css/user'
import { COLOURS } from '../theme/theme'
import themeContext from '../../Context/themeContext'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React, { useEffect, useState, useContext } from 'react'
import { SearchData, get_All_Data } from '../backend/Backend'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView,  StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'

const User_Data = () => {

    const navigation = useNavigation()
    const [data, setData] = useState([]);
    const apptheme = useContext(themeContext)


    useEffect(() => {
        getCrudData();
    }, []);

    const getCrudData = async () => {
        const result = await get_All_Data()
        setData(result);
    };

    const searchhandle = async (event) => {
        const result = await SearchData(event)
        if (result) {
            setData(result)
        } else {
            getCrudData()
        }
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.dark_blue} barStyle='light-content' />
            <View style={[styles.bg_back, { backgroundColor: apptheme.background }]}>
                <View style={styles.arrow_icon}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.bg_arrow} onPress={() => navigation.replace('Crud')}>
                        <FontAwesome5 name='long-arrow-alt-left' style={styles.icon_arrow} />
                    </TouchableOpacity>
                    <Text style={[styles.heading, { color: apptheme.color }]}>Information</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.bg_arrow}>
                        <AntDesign name='search1' style={styles.icon_arrow} />
                    </TouchableOpacity>
                </View>
                {/* <Switch value={darkMode} onValueChange={(value) => { setDarkMode(value); EventRegister.emit('changeTheme', value) }} /> */}
                <View>
                    <TextInput placeholder='Information First Name' placeholderTextColor={'grey'} style={[styles.inpt_search, { borderColor: apptheme.borderColor, color: apptheme.color }]}
                        onChangeText={searchhandle} />
                </View>
                <View style={styles.add_container_box}>
                    <TouchableOpacity style={styles.add_new_bg} activeOpacity={0.8}
                        onPress={() => navigation.replace('Crud')}>
                        <Text style={styles.add_new_text}>Add New</Text>
                        <FontAwesome5 name='plus' style={styles.icon_add} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={[styles.container, { backgroundColor: apptheme.background }]} showsVerticalScrollIndicator={false}>
                {data && data.length > 0 ? (data.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.9} style={styles.data_box}
                        onPress={() => navigation.replace('Single_Data', { data: item._id })}>
                        <View style={styles.trilogy}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.name}>{item.age}</Text>
                            <Text style={styles.name}>{item.profession}</Text>
                            <Text style={styles.name}>{item.experience}</Text>
                        </View>
                        <View style={styles.arrow_bg}>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.arrow_forward} />
                        </View>
                    </TouchableOpacity>
                ))) :
                    <Text style={[styles.rsult_warn, { color: apptheme.color }]}>No Result Found !</Text>
                }
            </ScrollView >
        </>
    )
}

export default User_Data