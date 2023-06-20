import MyContext from './ContextApi'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLOURS } from '../src/theme/theme'

const Child = () => {

  const { yourname } = useContext(MyContext)
  console.log(yourname)

  return (
    <View style={styles.container}>
      <Text style={styles.word}>Childs : {yourname}</Text>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({
  word: {
    fontSize: 20,
    color: COLOURS.black,
  },
  container: {
    backgroundColor: COLOURS.bluewhite
  },
})