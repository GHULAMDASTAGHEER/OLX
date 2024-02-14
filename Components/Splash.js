import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const Splash = () => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('HomeScreen')
        }, 3000);
    }, [])


    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6495ed' }}>
            <View>
                <StatusBar
                    backgroundColor={'#6495ed'}
                    barStyle={'light-content'}
                />
            </View>
            <Text style={{ fontSize: 40, fontWeight: 'bold', fontFamily: 'Arial', color: 'white' }}>OLX</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})