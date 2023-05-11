import React, { useState } from 'react';
import Routes from '@routes/index.routes';
import { Image } from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <Image source={require("./src/assets/icone.png")} />
    )
      
  }
  return (
    <Routes />
  );
}


