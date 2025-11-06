import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'

import Colors from '../Assets/Colors'

import UnauthorizedRoutes from './Routes/UnauthorizedRoutes'
import UnauthorizedRoutesParams from './Routes/UnauthorizedRoutes.params'

import { Login, Welcome, Register, VerifyOtp, InputEmail } from '../Containers'

export const headerOptions = (title?: string): NativeStackNavigationOptions => ({
  headerStyle: {
    backgroundColor: Colors.BLUE
  },
  headerTintColor: Colors.WHITE,
  title
})

const Stack = createNativeStackNavigator<UnauthorizedRoutesParams>()

// eslint-disable-next-line max-lines-per-function
const UnauthorizedScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Welcome}
      name={UnauthorizedRoutes.Welcome}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      component={Login}
      name={UnauthorizedRoutes.Login}
      options={headerOptions('Login')}
    />
    <Stack.Screen
      component={Register}
      name={UnauthorizedRoutes.Register}
      options={headerOptions('Register')}
    />
    <Stack.Screen
      component={VerifyOtp}
      name={UnauthorizedRoutes.VerifyOtp}
      options={headerOptions('Verifikasi OTP')}
    />
    <Stack.Screen
      component={InputEmail}
      name={UnauthorizedRoutes.InputEmail}
      options={headerOptions('Email')}
    />
  </Stack.Navigator>
)

export default UnauthorizedScreen
