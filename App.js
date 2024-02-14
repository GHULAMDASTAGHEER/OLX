import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './Components/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './Components/Redux/Store'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})