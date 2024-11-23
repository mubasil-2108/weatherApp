import { View, Text } from 'react-native'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => {
  return (
    // <Provider store={store}>
    // <I18nextProvider i18n={i18n}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaProvider>
    //  </I18nextProvider>

    //  {/* </Provider> */}

  )
}

export default App