import React, { useEffect, useState } from 'react'
import Splash from './screens/Splash'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { SignedInStack, SignedOutStack } from './navigation'

const AuthNavigation = () => {
  const [initializing, setInitializing] = useState(true)
  const [stack, setStack] = useState(<Splash />)
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  const toogle = async () => {
    await new Promise(function (resolve) {
      setTimeout(resolve, 2124)
    })
    setStack(!user ? <SignedOutStack /> : <SignedInStack />)
  }

  if (initializing) return null

  toogle()

  return stack
}

export default AuthNavigation
