import React from 'react'
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import MaterialIcons from '@react-native-vector-icons/material-design-icons'

import HeaderBackgroundSecond from '../../Assets/Images/HeaderBackgroundSecond.png'
import Colors from '../../Assets/Colors'
import { scaleFont } from '../../Utils/Size'

import styles from './Profile.styles'

const renderImageBackground = () => (
  <ImageBackground
    resizeMode="stretch"
    source={HeaderBackgroundSecond}
    style={styles.imageBackground}
  >
    <Text style={styles.textTitle}>Profile</Text>
  </ImageBackground>
)

const renderAccountContainer = () => (
  <View style={styles.accountContainer}>
    <Text style={styles.textTitleContent}>Akun</Text>
  </View>
)

const renderEmailContainer = () => (
  <View style={styles.emailContainer}>
    <View style={styles.emailContent}>
      <MaterialIcons color={Colors.BLACK} name="at" size={scaleFont(12)} />
      <Text style={styles.textTitleSubContent}>Email</Text>
    </View>
    <Text style={styles.textDescriptionContent}>gandarainpanjaitan@gmail.com</Text>
  </View>
)

const renderFullNameContainer = () => (
  <View style={styles.emailContainer}>
    <View style={styles.emailContent}>
      <MaterialIcons color={Colors.BLACK} name="book-account" size={scaleFont(12)} />
      <Text style={styles.textTitleSubContent}>Nama Lengkap</Text>
    </View>
    <Text style={styles.textDescriptionContent}>Ganda Rain Panjaitan</Text>
  </View>
)

const renderSettingContainer = () => (
  <View style={styles.accountContainer}>
    <Text style={styles.textTitleContent}>Pengaturan</Text>
  </View>
)

const Profile = (): React.JSX.Element => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={styles.container}
  >
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      {renderImageBackground()}
      {renderAccountContainer()}
      {renderEmailContainer()}
      {renderFullNameContainer()}
      {renderSettingContainer()}
      {renderEmailContainer()}
      {renderFullNameContainer()}
    </ScrollView>
  </KeyboardAvoidingView>
)

export default Profile
