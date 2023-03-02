import React from 'react';

// Components
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../Screens/FirstScreen/FirstScreen';
import SignUp from '../Screens/SignUp/SignUp';
import LogIn from '../Screens/LogIn/LogIn';

const Navigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='FirstScreen'>
            <Stack.Screen 
                name='FirstScreen' 
                component={FirstScreen}
                options= {{ headerShown: false }}
            />
            <Stack.Screen 
                name='SignUp' 
                component={SignUp}
                options= {{ headerShown: false }}
            />
            <Stack.Screen 
                name='LogIn' 
                component={LogIn}
                options= {{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Navigator;