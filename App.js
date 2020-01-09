/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from 'Navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore} from 'Store';
import {Provider} from 'react-redux';

const {store, persistor} = configureStore();

export default App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);
