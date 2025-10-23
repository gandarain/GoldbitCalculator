import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'

import GoldBitCalculatorLogo from '../../Assets/Images/GoldBitCalculatorLogo.png'

import { onPressButtonLogin, onPressButtonRegister } from './Welcome.handlers'
import { useGetStateAndSetters } from './useWelcome'
import styles from './Welcome.styles'
import type { States } from './Welcome.types'

const renderDescription = () => (
  <View style={styles.containerDescription}>
    <Image resizeMode="stretch" source={GoldBitCalculatorLogo} style={styles.imageBanner} />
    <Text style={styles.textTitle}>Selamat Datang</Text>
    <Text style={styles.textSubtitle}>
      Gold Bit Calculator membantu anda untuk mengalokasi dana investasi ke Bitcoin dan Emas
    </Text>
  </View>
)

const renderButton = (states: States) => (
  <View style={styles.containerButton}>
    <TouchableOpacity style={styles.buttonLogin} onPress={onPressButtonLogin(states)}>
      <Text style={styles.textButtonLogin}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonRegister} onPress={onPressButtonRegister(states)}>
      <Text style={styles.textButtonRegister}>Register</Text>
    </TouchableOpacity>
  </View>
)

const Welcome = (): React.JSX.Element => {
  const states = useGetStateAndSetters()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View />
        {renderDescription()}
        {renderButton(states)}
      </View>
    </ScrollView>
  )
}

export default Welcome
