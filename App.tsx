import React from 'react';
import Routes from '@routes/index.routes';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Image source={require("@assets/{colocar loading}.png")}/>
  }
  return (
    <Routes />
  );
}


