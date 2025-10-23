import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleHeight, scaleFont, scaleWidth } from '../../Utils/Size'

import { Styles } from './InputText.types'

const styles = StyleSheet.create<Styles>({
  label: {
    fontSize: scaleFont(15),
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
    fontSize: scaleFont(15),
    marginBottom: scaleHeight(8)
  },
  errorText: {
    color: Colors.RED,
    fontSize: scaleFont(12),
    fontFamily: 'Poppins-Regular'
  }
})

export default styles
