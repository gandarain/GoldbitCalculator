import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleHeight, scaleFont } from '../../Utils/Size'

import { Styles } from './Login.types'

const styles = StyleSheet.create<Styles>({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.THIRD_YELLOW,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBackground: {
    width: '100%',
    height: scaleHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: Colors.WHITE,
    fontSize: scaleFont(15),
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center'
  }
})

export default styles
