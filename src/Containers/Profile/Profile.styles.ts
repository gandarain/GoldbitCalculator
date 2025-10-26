import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleHeight, scaleFont } from '../../Utils/Size'

import { Styles } from './Profile.types'

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: Colors.THIRD_YELLOW
  },
  imageBackground: {
    width: '100%',
    height: scaleHeight(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    color: Colors.WHITE,
    fontSize: scaleFont(15),
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center'
  }
})

export default styles
