import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import GoldBitCalculatorLogo from '../../Assets/Images/GoldBitCalculatorLogo.png'
import Routes from '../../Navigation/Routes'
import type { UseNavigation } from '../../Types'

import styles from './Welcome.styles'

const Welcome = (): React.JSX.Element => {
  const navigation = useNavigation<UseNavigation>()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View />
        <View style={styles.containerDescription}>
          <Image source={GoldBitCalculatorLogo} style={styles.imageBanner} resizeMode="stretch" />
          <Text style={styles.textTitle}>Selamat Datang</Text>
          <Text style={styles.textSubtitle}>Gold Bit Calculator membantu anda untuk mengalokasi dana investasi ke Bitcoin dan Emas</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate(Routes.Login)}>
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate(Routes.Login)}>
            <Text style={styles.textButtonRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Welcome
