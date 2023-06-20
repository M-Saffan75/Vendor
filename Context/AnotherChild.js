import React from 'react'
import { COLOURS } from '../src/theme/theme'
import { StyleSheet, Text, View } from 'react-native'

const AnotherChild = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>AnotherChild</Text>
    </View>
  )
}

export default AnotherChild

const styles = StyleSheet.create({
  word: {
    fontSize: 20,
    color: COLOURS.black,
  },
  container: {
    backgroundColor: COLOURS.bluewhite
  },
})