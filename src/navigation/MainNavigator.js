import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Addpost from '../screens/Addpost'
import Splash from '../screens/Splash'
import Main from '../screens/Main'
import Profile from '../screens/Profile'
import Feed from '../screens/Feed'

const Stack=createStackNavigator()
const MainNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name='Splash' 
            component={Splash}
            options={{headerShown: false}}
            />
             <Stack.Screen 
            name='Main' 
            component={Main}
            options={{headerShown: false}}
            />
             <Stack.Screen 
            name='Addpost' 
            component={Addpost}
            options={{headerShown: true}}
            />
            <Stack.Screen 
            name='Profile' 
            component={Profile}
            options={{headerShown: true}}
            />
             <Stack.Screen 
            name='Feed' 
            component={Feed}
            options={{headerShown: true}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
 
export default MainNavigator