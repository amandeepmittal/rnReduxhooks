import React from 'react'
import {Provider as PaperProvider} from 'react-native-paper'
import AppNavigator from './src/navigation/index'
import {Provider as ClientProvider} from './src/context/ClientContext'

export default function App(){
  return (
    <ClientProvider>
      <AppNavigator/>
    </ClientProvider>
  )
}