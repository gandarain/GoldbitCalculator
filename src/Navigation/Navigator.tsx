import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Routes from './Routes'
import Params from './Params'

import { Login, Welcome } from '../Containers'

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
    />
  </Stack.Navigator>
)

export default Navigator
