import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'

import { Styles } from './Register.types'

const styles = StyleSheet.create<Styles>({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.THIRD_YELLOW,
    justifyContent: 'space-between'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
