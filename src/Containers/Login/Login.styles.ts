import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleHeight, scaleFont, scaleWidth } from '../../Utils/Size'

import { Styles } from './Login.types'

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: Colors.THIRD_YELLOW,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(20),
    paddingBottom: scaleHeight(20)
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
  },
  form: {
    width: '100%',
    marginTop: scaleHeight(8)
  },
  label: {
    fontSize: scaleFont(14),
    fontFamily: 'Poppins-Regular',
    color: Colors.BLACK,
    marginBottom: scaleHeight(5),
    marginTop: scaleHeight(10)
  },
  input: {
    width: '100%',
    height: scaleHeight(40),
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: scaleWidth(8),
    paddingHorizontal: scaleWidth(12),
    backgroundColor: Colors.WHITE,
    fontSize: scaleFont(14),
    marginBottom: scaleHeight(8)
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
    fontSize: scaleFont(14),
    marginBottom: 0,
  },
  iconPassword: {
    position: 'absolute',
    right: scaleWidth(12),
    top: '50%',
    transform: [{ translateY: -scaleHeight(9) }],
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleHeight(18),
  },
  errorText: {
    color: 'red',
    fontSize: scaleFont(12),
    fontFamily: 'Poppins-Regular'
  },
  footer: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    width: '100%',
    height: scaleHeight(45),
    backgroundColor: Colors.SECOND_BLUE,
    borderRadius: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-Bold',
    color: Colors.WHITE
  }
})

export default styles
