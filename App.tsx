import React from 'react';
import { Image } from 'react-native';
import Routes from '@routes/index.routes';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { Outfit_500Medium, Outfit_700Bold, Outfit_400Regular, Outfit_300Light } from '@expo-google-fonts/outfit';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
    Outfit_400Regular,
    Outfit_300Light,
  })

  if (!fontsLoaded) {
    return <Image source={require("@assets/logo.png")} />
  } else {
    return (
      <Routes />
    );
  }
}

// #repair
