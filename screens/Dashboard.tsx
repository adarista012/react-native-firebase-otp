import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth'

function Dashboard(): React.JSX.Element {
  async function signOut() {
    await auth()
      .signOut()
      .then(() => console.log('User signed out!'))
    // await GoogleSignin.revokeAccess()
  }
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Dashboard</Text>
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
  },
})

export default Dashboard
