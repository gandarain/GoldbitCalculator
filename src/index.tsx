import React from 'react'
import { StatusBar } from 'react-native';

import Navigation from './Navigation'

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    <Navigation />
  </>
)

export default App