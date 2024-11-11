import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SignInScreen } from '../screens'
import PreloadScreen from '../screens/preload'
import SignUpScreen from '../screens/sign-up'

export type RootStackParamList = {
  preload: undefined
  signIn: undefined
  signUp: undefined
  home: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="preload"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="preload" component={PreloadScreen} />
        <Stack.Screen name="signIn" component={SignInScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
