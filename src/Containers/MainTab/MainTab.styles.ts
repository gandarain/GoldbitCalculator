import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleFont } from '../../Utils/Size'

import { Styles } from './MainTab.types'

const styles = StyleSheet.create<Styles>({
  tabBarStyle: {
    backgroundColor: Colors.WHITE,
    borderTopWidth: 0.5,
    borderTopColor: Colors.THIRD_GREY
  },
  tabBarLabelStyle: {
    color: Colors.BLUE,
    fontSize: scaleFont(12),
    fontFamily: 'Poppins-SemiBold'
  }
})

export default styles
