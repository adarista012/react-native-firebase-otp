import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

function Details(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
})

export default Details
