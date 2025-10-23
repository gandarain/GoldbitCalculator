import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleHeight, scaleFont, scaleWidth } from '../../Utils/Size'

import { Styles } from './InputPassword.types'

const styles = StyleSheet.create<Styles>({
  label: {
    fontSize: scaleFont(15),
    fontFamily: 'Poppins-Regular',
    color: Colors.BLACK,
    marginBottom: scaleHeight(5),
    marginTop: scaleHeight(10)
  },
  passwordWrapper: {
    position: 'relative',
    width: '100%',
    marginBottom: scaleHeight(8)
  },
  inputPassword: {
    width: '100%',
    height: scaleHeight(40),
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: scaleWidth(8),
    paddingHorizontal: scaleWidth(12),
    paddingRight: scaleWidth(40),
    backgroundColor: Colors.WHITE,
    fontSize: scaleFont(15),
    marginBottom: 0
  },
  iconPassword: {
    position: 'absolute',
    right: scaleWidth(12),
    top: '50%',
    transform: [{ translateY: -scaleHeight(9) }],
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleHeight(18)
  },
  errorText: {
    color: Colors.RED,
    fontSize: scaleFont(12),
    fontFamily: 'Poppins-Regular'
  }
})

export default styles
