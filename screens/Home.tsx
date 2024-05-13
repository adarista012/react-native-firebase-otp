import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const Home: React.FC<NativeStackScreenProps<any, 'Home'>> = ({
  navigation,
}) => {
  async function signOut() {
    await auth()
      .signOut()
      .then(() => console.log('User signed out!'))
    // await GoogleSignin.revokeAccess()
  }

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Home</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign out" onPress={() => signOut()} />
        {/* <Button
          title="Go to dashboard"
          onPress={() => navigation.push('Dashboard')}
        /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 8,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 45,
  },
  titleContainer: {
    paddingTop: 45,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  sectionTitle: {
    paddingTop: 45,
    fontSize: 30,
    fontWeight: '600',
    color: 'salmon',
  },
})

export default Home
