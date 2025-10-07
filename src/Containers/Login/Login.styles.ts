import { StyleSheet } from 'react-native'

import { Styles } from './Login.types'

const styles = StyleSheet.create<Styles>({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
