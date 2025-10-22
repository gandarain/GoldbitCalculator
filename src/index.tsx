import React from 'react'
import { View, StatusBar, Platform, StyleSheet } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import Colors from './Assets/Colors'
import Navigation from './Navigation'

const AppContent = () => {
  const insets = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <View style={[styles.fakeStatusBar, { height: insets.top || 44 }]} />}
      <StatusBar
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.BLUE}
        barStyle="light-content"
      />
      <Navigation />
    </View>
  )
}

const App = () => (
  <SafeAreaProvider>
    <AppContent />
  </SafeAreaProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.BLUE
  },
  fakeStatusBar: {
    backgroundColor: Colors.BLUE
  }
})

export default App
