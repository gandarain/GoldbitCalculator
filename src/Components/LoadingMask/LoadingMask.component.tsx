import React from 'react'
import { View, Modal, Text, ActivityIndicator } from 'react-native'

import Colors from '../../Assets/Colors'

import styles from './LoadingMask.component.styles'
import config from './LoadingMask.component.config'
import type { Props } from './LoadingMask.component.types'

const LoadingMask = (props: Props): React.JSX.Element => (
  <Modal
    animationType="fade"
    statusBarTranslucent={true}
    transparent={true}
    visible={props.visible}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <ActivityIndicator color={Colors.RED} size="large" />
        <Text style={styles.modalText}>{props.title || 'Loading...'}</Text>
      </View>
    </View>
  </Modal>
)

LoadingMask.displayName = config.displayName

export default LoadingMask
