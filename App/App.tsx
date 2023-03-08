import React, { createContext, useState } from 'react';

// Components
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import Navigator from './src/Navigation/Navigator';
import Store from './src/Store/store';

// Fonts
import * as Font from 'expo-font';


interface IStore {
  store: Store
}

const store = new Store();

export const Context = createContext<IStore>({
  store
});

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadAppAplication() {
    await Font.loadAsync({
      'Overpass-SemiBold': require('./assets/Fonts/static/Overpass-SemiBold.ttf'),
      'Overpass-Medium': require('./assets/Fonts/static/Overpass-Medium.ttf')
    });

    setFontLoaded(true);
  }

  loadAppAplication();

  if (fontLoaded) {
    return (
      <Context.Provider value={{
        store
      }}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Context.Provider>
    );
  } else {
    // TODO: preloader or the downloading page
    return <Text>Waiting for font...</Text>
  }
}
