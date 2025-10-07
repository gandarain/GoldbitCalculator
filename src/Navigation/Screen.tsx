import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BootSplash from 'react-native-bootsplash'

import Navigator from './Navigator'

const Screens = () => {
  const navigationRef = React.useRef<any>(null)

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        BootSplash.hide()
      }}>
      <Navigator />
    </NavigationContainer>
  )
}

export default Screens
