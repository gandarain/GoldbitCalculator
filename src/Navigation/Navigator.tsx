import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Colors from '../Assets/Colors'

import Routes from './Routes'
import Params from './Params'

import { Login, Welcome, Register } from '../Containers'

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
      options={{
        headerStyle: {
          backgroundColor: Colors.BLUE
        },
        headerTintColor: Colors.WHITE
      }}
    />
    <Stack.Screen
      name={Routes.Register}
      component={Register}
      options={{
        headerStyle: {
          backgroundColor: Colors.BLUE
        },
        headerTintColor: Colors.WHITE
      }}
    />
  </Stack.Navigator>
)

export default Navigator
