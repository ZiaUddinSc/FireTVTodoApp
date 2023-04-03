/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/stores/configureStore'
import { PersistGate } from 'redux-persist/integration/react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import TodoList from './src/components/TodoList';
import AuthNavigation from './src/navigation/AuthNavigation';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthNavigation />
        </PersistGate>
      </Provider>
  );
}
export default App;
