import type { States } from './Welcome.types'

import Routes from '../../Navigation/Routes'

export const onPressButtonLogin = (states: States) => () => {
  states.navigation.navigate(Routes.Login)
}

export const onPressButtonRegister = (states: States) => () => {
  states.navigation.navigate(Routes.Register)
}