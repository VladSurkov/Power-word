import React, { useState } from 'react';

// Components
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import Navigator from './src/Navigation/Navigator';

// Fonts
import * as Font from 'expo-font';

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
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  } else {
    // TODO: preloader or the downloading page
    return <Text>Waiting for font...</Text>
  }
}
