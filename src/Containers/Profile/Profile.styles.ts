import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleHeight, scaleFont, scaleWidth } from '../../Utils/Size'

import { Styles } from './Profile.types'

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.THIRD_YELLOW
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
  },
  accountContainer: {
    backgroundColor: Colors.THIRD_GREY,
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(20)
  },
  emailContainer: {
    backgroundColor: Colors.WHITE,
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(20),
    borderBottomWidth: 1,
    borderBottomColor: Colors.THIRD_GREY,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textTitleContent: {
    color: Colors.BLACK,
    fontSize: scaleFont(15),
    fontFamily: 'Poppins-SemiBold',
    marginLeft: scaleWidth(5)
  },
  textTitleSubContent: {
    color: Colors.BLACK,
    fontSize: scaleFont(12),
    fontFamily: 'Poppins-SemiBold',
    marginLeft: scaleWidth(5)
  },
  emailContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textDescriptionContent: {
    color: Colors.BLACK,
    fontSize: scaleFont(12),
    fontFamily: 'Poppins-Regular'
  }
})

export default styles
