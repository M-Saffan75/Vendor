import apptheme from './src/theme/apptheme'
import { useColorScheme } from 'react-native'
import themeContext from './Context/themeContext'
import AppNavigator from './MainNavigator/AppNavigator'
import React, { useEffect, useState, useMemo } from 'react'
import { EventRegister } from 'react-native-event-listeners'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'

const App = () => {

  const [darkmode, setDarkMode] = useState(null)

  useEffect(() => {
    const retrieveTheme = async () => {
      const theme = await AsyncStorage.getItem('THEME');
      setDarkMode(JSON.parse(theme));
    };
    retrieveTheme();

    const EListen = EventRegister.addEventListener('changeTheme', (data) => {
      setDarkMode(data);
    });

    return () => {
      EventRegister.removeAllListeners(EListen);
    };
  }, [darkmode]);

  
  const colorScheme = useColorScheme();

  const theme = useMemo(() => {
    if (darkmode === null) {
      return colorScheme === 'dark' ? apptheme.dark : apptheme.light;
    } else {
      return darkmode === true ? apptheme.dark : apptheme.light;
    }
  }, [darkmode, colorScheme]);

  {/* <themeContext.Provider value={darkmode === true ? apptheme.dark : apptheme.light}> */}

  return (
    <>
      <themeContext.Provider value={theme}>
        <NavigationContainer theme={darkmode === true ? DarkTheme : DefaultTheme}>
          <AppNavigator />
        </NavigationContainer>
      </themeContext.Provider>
    </>
  )
}

export default App