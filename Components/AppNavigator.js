import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './Splash'
import HomeScreen from './HomeScreen'
import ItemCategory from './Tabs/ItemCategory'


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='ItemCategory' component={ItemCategory} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator

const styles = StyleSheet.create({})