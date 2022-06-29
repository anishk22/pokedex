import { React, useState, useEffect } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from "./screens/HomeScreen";

import {
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Ubuntu_300Light,
          Ubuntu_300Light_Italic,
          Ubuntu_400Regular,
          Ubuntu_400Regular_Italic,
          Ubuntu_500Medium,
          Ubuntu_500Medium_Italic,
          Ubuntu_700Bold,
          Ubuntu_700Bold_Italic,
        });
        // await new Promise(resolve => setTimeout(resolve, 2000));
        // ^set timeout for splash screen
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  if (!appIsReady) {
    return null;
  }
  
  else {
    SplashScreen.hideAsync(); 
    return <HomeScreen />;
  }
}
