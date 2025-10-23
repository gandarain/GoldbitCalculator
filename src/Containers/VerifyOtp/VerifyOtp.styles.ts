import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleHeight, scaleWidth, scaleFont } from '../../Utils/Size'
import type { Styles } from './VerifyOtp.types'

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.THIRD_YELLOW
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: scaleWidth(20),
    justifyContent: 'center',
    paddingBottom: scaleHeight(20)
  },
  innerContainer: {
    alignItems: 'center',
    paddingVertical: scaleHeight(30)
  },
  title: {
    fontSize: scaleFont(15),
    fontFamily: 'Poppins-Regular',
    color: Colors.BLACK,
    textAlign: 'center',
    marginBottom: scaleHeight(24)
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: scaleHeight(24)
  },
  otpInput: {
    width: scaleWidth(45),
    height: scaleHeight(45),
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: scaleWidth(45),
    textAlign: 'center',
    fontSize: scaleFont(18),
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE
  },
  keypadContainer: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: scaleHeight(16)
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(10)
  },
  lastRow: {
    justifyContent: 'center',
    columnGap: scaleWidth(20)
  },
  keypadButton: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  keypadText: {
    color: Colors.BLACK,
    fontSize: scaleFont(30),
    fontFamily: 'Poppins-SemiBold'
  },
  deleteButton: {
    backgroundColor: Colors.RED
  },
  footer: {
    paddingHorizontal: scaleWidth(20),
    paddingBottom: scaleHeight(10)
  },
  verifyButton: {
    width: '100%',
    height: scaleHeight(40),
    backgroundColor: Colors.GREY,
    borderRadius: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeButton: {
    backgroundColor: Colors.SECOND_BLUE
  },
  verifyText: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-Bold',
    color: Colors.WHITE
  },
  resendContainer: {
    marginTop: scaleHeight(12),
    alignItems: 'center'
  },
  timerText: {
    fontSize: scaleFont(14),
    fontFamily: 'Poppins-Regular',
    color: Colors.GREY
  },
  resendText: {
    fontSize: scaleFont(14),
    fontFamily: 'Poppins-Medium',
    color: Colors.SECOND_BLUE,
    textDecorationLine: 'underline'
  }
})

export default styles
