import React from 'react'
import { View, StatusBar, Platform, StyleSheet } from 'react-native';

import Colors from './Assets/Colors';
import { scaleHeight } from './Utils/Size'

import Navigation from './Navigation'

const App = () => (
  <>
    <View style={styles.container}>
      {Platform.OS === 'ios' && <View style={styles.fakeStatusBar} />}
      <StatusBar
        backgroundColor={Colors.BLUE}
        barStyle="light-content"
        translucent
      />
      <Navigation />
    </View>
  </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.BLUE,
  },
  fakeStatusBar: {
    height: scaleHeight(30),
    backgroundColor: Colors.BLUE,
  },
});

export default App