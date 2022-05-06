import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export function useSplashScreen() {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    async function initialize() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'Inter-Black': require('../../assets/fonts/Inter-Black.otf')
        });
        setTimeout(async () => await SplashScreen.hideAsync(), 2000);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
      }
    }

    initialize();
  }, []);
  return isAppReady;
}
