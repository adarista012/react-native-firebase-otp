import React from 'react'
import { Appearance, StyleSheet, Text, View } from 'react-native'

const colorScheme = Appearance.getColorScheme()

export default function Splash() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.text}>SPLASH</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'salmon',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    letterSpacing: 2,
  },
})
