import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import BootSplash from 'react-native-bootsplash'

import { checkLogin } from '../Redux/Reducers/AuthenticationReducers/Authentication.reducers'
import { useAppDispatch } from '../Redux/Hooks'
import Colors from '../Assets/Colors'
import type { ReduxState } from '../Types'

import UnauthorizedScreen from './UnauthorizedScreen'
import AuthorizedScreen from './AuthorizedScreen'
import styles from './Screen.styles'
import type { States } from './Screen.types'

export const checkLoginHandler = async (states: States): Promise<void> => {
  states.setIsLoading(true)

  try {
    await states.dispatch(checkLogin())

    states.setIsLoading(false)
  } catch (error) {
    states.setIsLoading(false)
  }
}

export const useGetState = (): States => {
  const navigationRef = React.useRef<NavigationContainerRef<ReactNavigation.RootParamList>>(null!)
  const dispatch = useAppDispatch()
  const isLogin = useSelector((state: ReduxState) => state.authentication.isLogin)
  const [isLoading, setIsLoading] = React.useState(true)

  return {
    navigationRef,
    dispatch,
    isLogin,
    isLoading,
    setIsLoading
  }
}

const Screen = () => {
  const states = useGetState()

  React.useEffect(() => {
    checkLoginHandler(states)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states.dispatch, states.isLogin])

  if (states.isLoading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator color={Colors.BLUE} size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer
      ref={states.navigationRef}
      onReady={() => {
        BootSplash.hide()
      }}
    >
      {states.isLogin ? <AuthorizedScreen /> : <UnauthorizedScreen />}
    </NavigationContainer>
  )
}

export default Screen
