import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleHeight, scaleWidth, scaleFont } from '../../Utils/Size';

import { Styles } from './Welcome.types'

const styles = StyleSheet.create<Styles>({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.BLUE,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageBanner: {
    height: scaleHeight(100),
    width: scaleWidth(200),
  },
  containerDescription: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: scaleFont(20),
    fontFamily: 'Poppins-Bold',
    color: Colors.WHITE,
    marginTop: scaleHeight(10)
  },
  textSubtitle: {
    fontSize: scaleFont(15),
    fontFamily: 'Poppins-Regular',
    color: Colors.WHITE,
    textAlign: 'center',
    marginHorizontal: scaleWidth(10)
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: scaleWidth(15),
    marginBottom: scaleHeight(15)
  },
  buttonLogin: {
    backgroundColor: Colors.SECOND_BLUE,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: scaleHeight(40)
  },
  textButtonLogin: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-Bold',
    color: Colors.WHITE
  },
  buttonRegister: {
    backgroundColor: Colors.WHITE,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: scaleHeight(40),
    borderColor: Colors.SECOND_BLUE
  },
  textButtonRegister: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-Bold',
    color: Colors.SECOND_BLUE
  },
})

export default styles
