import React from 'react'
import { COLOURS } from '../src/theme/theme'
import { StyleSheet, useColorScheme, Text, View } from 'react-native'

const Default = () => {

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.head}>Default</Text>
      </View>
    </>
  )

}

export default Default

const styles = StyleSheet.create({

  head: {
    fontSize: 20,
    color: COLOURS.black
  },

  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOURS.bluewhite
  },
})