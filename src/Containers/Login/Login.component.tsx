import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import styles from './Login.styles'

const Login = (): React.JSX.Element => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.content}>
      <Text>Login</Text>
    </View>
  </ScrollView>
)

export default Login
