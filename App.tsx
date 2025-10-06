import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const init = async () => {
      // Lakukan tugas inisialisasi seperti memuat data, memeriksa otentikasi, dll.
      // ...
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true }); 
      console.log("Bootsplash hidden");
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
