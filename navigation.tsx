import 'react-native-gesture-handler'
import React from 'react'
import Dashboard from './screens/Dashboard'
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native'
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import PhoneSignIn from './screens/PhoneSignIn'
import Home from './screens/Home'
import Details from './screens/Details'

const Stack = createNativeStackNavigator()

const navOptions:
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>
      navigation: any
    }) => NativeStackNavigationOptions)
  | undefined = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  headerShown: false,
}

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={navOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
)
export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="PhoneSignIn" screenOptions={navOptions}>
      <Stack.Screen name="PhoneSignIn" component={PhoneSignIn} />
    </Stack.Navigator>
  </NavigationContainer>
)
