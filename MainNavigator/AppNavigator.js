import React from 'react';
import Main from '../Context/Main';
import Crud from '../src/screens/Crud';
import User_Data from '../src/screens/User_Data';
import AnotherChild from '../Context/AnotherChild';
import Update_Crud from '../src/screens/Update_Crud';
import Single_Data from '../src/screens/Single_Data';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const AppNavigator = () => {

  const Stack = createStackNavigator();

  return (
    <>
        <Stack.Navigator screenOptions={{ ...TransitionPresets.FadeFromBottomAndroid, headerShown: false }} initialRouteName='Crud'>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Crud" component={Crud} />
          <Stack.Screen name="User_Data" component={User_Data} />
          <Stack.Screen name="Update_Crud" component={Update_Crud} />
          <Stack.Screen name="Single_Data" component={Single_Data} />
          <Stack.Screen name="AnotherChild" component={AnotherChild} />
        </Stack.Navigator>
    </>
  )
}

export default AppNavigator