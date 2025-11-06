import type { States } from './Welcome.types'

import UnauthorizedRoutes from '../../Navigation/Routes/UnauthorizedRoutes'

export const onPressButtonLogin = (states: States) => () => {
  states.navigation.navigate(UnauthorizedRoutes.Login)
}

export const onPressButtonRegister = (states: States) => () => {
  states.navigation.navigate(UnauthorizedRoutes.Register)
}
