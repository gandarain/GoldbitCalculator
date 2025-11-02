import { StyleSheet } from 'react-native'

import Colors from '../../Assets/Colors'
import { scaleHeight, scaleWidth, scaleFont } from '../../Utils/Size'

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0008'
  },
  modalView: {
    marginVertical: scaleHeight(20),
    marginHorizontal: scaleWidth(20),
    width: scaleWidth(200),
    height: scaleHeight(70),
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: scaleHeight(2)
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginVertical: scaleHeight(15),
    textAlign: 'center',
    fontSize: scaleFont(17),
    marginLeft: scaleWidth(15),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.BLACK
  }
})

export default styles
