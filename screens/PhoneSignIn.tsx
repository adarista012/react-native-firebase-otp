import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null)

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState<string>('')
  const [PhoneNumber, setPhoneNumber] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Handle login
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber: string) {
    Keyboard.dismiss()
    setIsLoading(true)

    // await new Promise(function (resolve) {
    //   setTimeout(resolve, 2124)
    // })
    await auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(res => {
        console.log('User signed out!')
        setConfirm(res)
      })
      .catch(e => console.log('Error: ', e))
    setIsLoading(false)
  }

  async function confirmCode() {
    Keyboard.dismiss()
    try {
      setIsLoading(true)
      await confirm!.confirm(code)
      setIsLoading(false)
    } catch (e) {
      console.log('Invalid code.', e)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Firebase OTP</Text>
        {!confirm ? (
          <View style={styles.formContainer}>
            <TextInput
              placeholder="+591 777-777-77"
              placeholderTextColor="grey"
              keyboardType="phone-pad"
              value={PhoneNumber}
              onChangeText={setPhoneNumber}
              style={styles.input}
            />
            <View style={styles.button}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <Button
                  title="Phone Number Sign In"
                  onPress={() => {
                    signInWithPhoneNumber(PhoneNumber)
                  }}
                />
              )}
            </View>
          </View>
        ) : (
          <View style={styles.formContainer}>
            <TextInput
              placeholder="123456"
              placeholderTextColor="grey"
              style={styles.input}
              value={code}
              onChangeText={text => setCode(text)}
            />
            <View style={styles.button}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <Button title="Confirm Code" onPress={() => confirmCode()} />
              )}
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: '32%',
  },
  formContainer: {
    flex: 1,
    paddingTop: 160,
    width: '100%',
    paddingHorizontal: 8,
  },
  title: {
    color: 'salmon',
    fontWeight: 'bold',
    fontSize: 40,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'salmon',
    paddingHorizontal: 4,
    color: 'salmon',
  },

  button: {
    width: '100%',
    paddingHorizontal: 4,
    paddingTop: 16,
  },
})
export default PhoneSignIn
