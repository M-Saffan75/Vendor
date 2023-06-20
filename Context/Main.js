import Child from './Child'
import MyContext from './ContextApi'
import React, { useState } from 'react'
import AnotherChild from './AnotherChild'
import { COLOURS } from '../src/theme/theme'
import { StyleSheet, Text, View } from 'react-native'

const Main = () => {

    const [name, setName] = useState('Chris Hemsworth')

    return (
        <>
            <MyContext.Provider value={{ yourname: name }}>
                <View style={styles.container}>
                    <Child />
                    <AnotherChild />
                </View>
            </MyContext.Provider>
        </>
    )
}

export default Main

const styles = StyleSheet.create({

    word: {
        fontSize: 20,
        color: COLOURS.black,
    },

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLOURS.bluewhite
    },
})











{/* <Text style={styles.word}>Main</Text> */ }