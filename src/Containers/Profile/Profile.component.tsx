import React from 'react'
import { ScrollView, Text, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native'

import HeaderBackground from '../../Assets/Images/HeaderBackground.png'

import styles from './Profile.styles'

const renderImageBackground = () => (
  <ImageBackground resizeMode="stretch" source={HeaderBackground} style={styles.imageBackground}>
    <Text style={styles.textTitle}>Profile</Text>
  </ImageBackground>
)

const Profile = (): React.JSX.Element => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={styles.container}
  >
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      {renderImageBackground()}
    </ScrollView>
  </KeyboardAvoidingView>
)

export default Profile
