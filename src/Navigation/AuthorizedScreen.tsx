import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'

import Colors from '../Assets/Colors'

import AuthorizedRoutes from './Routes/AuthorizedRoutes'
import AuthorizedRoutesParams from './Routes/AuthorizedRoutes.params'

import { MainTab } from '../Containers'

export const headerOptions = (title?: string): NativeStackNavigationOptions => ({
  headerStyle: {
    backgroundColor: Colors.BLUE
  },
  headerTintColor: Colors.WHITE,
  title
})

const Stack = createNativeStackNavigator<AuthorizedRoutesParams>()

const AuthorizedScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={MainTab}
      name={AuthorizedRoutes.MainTab}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
)

export default AuthorizedScreen
