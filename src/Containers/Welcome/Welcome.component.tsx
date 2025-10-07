import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Routes from '../../Navigation/Routes'
import type { UseNavigation } from '../../Types'

import styles from './Welcome.styles'

const Welcome = (): React.JSX.Element => {
  const navigation = useNavigation<UseNavigation>()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text>Welcome</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Login)}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Welcome
