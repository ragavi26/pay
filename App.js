import React from 'react';
import {Provider} from 'react-redux';


//Screens
import FirstPage from './Screens/HomeScreen'
import LevelTwo from './Screens/LevelTwo';
import EntryPage from './Screens/EntryPage';
import Profile from './Screens/Profile';
import Payment from './Screens/Payment';
//Navigation Packages Imports 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
//Store
import {store} from './redux/store';
import { frontFontColor, primaryColorBackgroundColor } from './Components/Colors';
import CodePush from 'react-native-code-push';

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: "a new update is available"
}}

function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EntryPage" component={EntryPage} options={{headerShown: false}}/>
          <Stack.Screen name="FirstPage" component={FirstPage} options={{title:"LEVEL 1",
          headerStyle: {
            backgroundColor: primaryColorBackgroundColor,
          },
          headerTintColor: frontFontColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center'
          }}/>
          <Stack.Screen name="LevelTwo" component={LevelTwo} options={{title:"Level 2",
          headerStyle: {
            backgroundColor: primaryColorBackgroundColor,
          },
          headerTintColor: frontFontColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center'
          }}/>
          <Stack.Screen name="My Profile" component={Profile} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default CodePush(CodePushOptions)(App);

 