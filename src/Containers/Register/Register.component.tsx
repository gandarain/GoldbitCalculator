import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import styles from './Register.styles'

const Register = (): React.JSX.Element => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.content}>
      <Text>Register</Text>
    </View>
  </ScrollView>
)

export default Register
