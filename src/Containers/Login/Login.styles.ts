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
    backgroundColor: Colors.THIRD_YELLOW
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
  },
  forgetPasswordContainer: {
    marginTop: scaleHeight(8),
    alignItems: 'center'
  },
  forgetPasswordText: {
    fontSize: scaleFont(14),
    fontFamily: 'Poppins-Medium',
    color: Colors.SECOND_BLUE,
    textDecorationLine: 'underline'
  }
})

export default styles
