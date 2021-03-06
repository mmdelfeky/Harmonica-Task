import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './store/store';
import {AuthStack} from './screens';
import Orientation from 'react-native-orientation-locker';

export default function App() {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
}
