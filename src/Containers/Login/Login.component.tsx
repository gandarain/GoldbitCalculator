import React from 'react'
import { ScrollView, View, Text, ImageBackground } from 'react-native'

import HeaderBackground from '../../Assets/Images/HeaderBackground.png'

import styles from './Login.styles'

const Login = (): React.JSX.Element => (
  <ScrollView contentContainerStyle={styles.container}>
    <ImageBackground
      source={HeaderBackground}
      style={styles.imageBackground}
      resizeMode="stretch"
    >
      <Text style={styles.textTitle}>Masukkan email dan password anda</Text>
    </ImageBackground>
    <View style={styles.content}>
      <Text>Login</Text>
    </View>
  </ScrollView>
)

export default Login
