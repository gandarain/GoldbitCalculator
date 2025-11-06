import { StyleSheet } from 'react-native'

import Colors from '../Assets/Colors'

import { Styles } from './Screen.types'

const styles = StyleSheet.create<Styles>({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE
  }
})

export default styles
