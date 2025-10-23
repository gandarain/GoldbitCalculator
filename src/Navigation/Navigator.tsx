import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'

import Colors from '../Assets/Colors'

import Routes from './Routes'
import Params from './Params'

import {
  Login,
  Welcome,
  Register,
  VerifyOtp
} from '../Containers'

export const headerOptions = (title?: string): NativeStackNavigationOptions => ({
  headerStyle: {
    backgroundColor: Colors.BLUE,
  },
  headerTintColor: Colors.WHITE,
  title
})

const Stack = createNativeStackNavigator<Params>()

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.Welcome}
      component={Welcome}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={Routes.Login}
      component={Login}
      options={headerOptions('Login')}
    />
    <Stack.Screen
      name={Routes.Register}
      component={Register}
      options={headerOptions('Register')}
    />
    <Stack.Screen
      name={Routes.VerifyOtp}
      component={VerifyOtp}
      options={headerOptions('Verifikasi OTP')}
    />
  </Stack.Navigator>
)

export default Navigator
