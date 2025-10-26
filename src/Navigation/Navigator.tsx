import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'

import Colors from '../Assets/Colors'

import Routes from './Routes'
import Params from './Params'

import { Login, Welcome, Register, VerifyOtp, InputEmail, MainTab } from '../Containers'

export const headerOptions = (title?: string): NativeStackNavigationOptions => ({
  headerStyle: {
    backgroundColor: Colors.BLUE
  },
  headerTintColor: Colors.WHITE,
  title
})

const Stack = createNativeStackNavigator<Params>()

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Welcome}
      name={Routes.Welcome}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen component={Login} name={Routes.Login} options={headerOptions('Login')} />
    <Stack.Screen component={Register} name={Routes.Register} options={headerOptions('Register')} />
    <Stack.Screen
      component={VerifyOtp}
      name={Routes.VerifyOtp}
      options={headerOptions('Verifikasi OTP')}
    />
    <Stack.Screen
      component={InputEmail}
      name={Routes.InputEmail}
      options={headerOptions('Email')}
    />
    <Stack.Screen
      component={MainTab}
      name={Routes.MainTab}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
)

export default Navigator
