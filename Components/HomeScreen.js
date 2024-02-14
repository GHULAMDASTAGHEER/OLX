import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import Home from './Tabs/Home'
import Search from './Tabs/Search'
import Plus from './Tabs/Plus'
import Favourite from './Tabs/Favourite'
import Profile from './Tabs/Profile'

const HomeScreen = () => {


    const [selectedcolor, setselectedColor] = useState(0)

    function name() {
        
    }
    return (
        <View style={{ flex: 1, }}>

            {
                selectedcolor == 0 ? (
                    <Home />
                ) : selectedcolor == 1 ? (
                    <Search />
                ) : selectedcolor == 2 ? (
                    <Plus onpost={() => setselectedColor(0)} />
                ) : selectedcolor == 3 ? (
                    <Favourite />
                ) : (
                    <Profile />
                )
            }
            <View style={{ width: '100%', height: 70, flexDirection: 'row', position: 'absolute', bottom: 0, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#f5f5f5', elevation: 20, }}>

                <TouchableOpacity onPressIn={name()} style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setselectedColor(0)}>
                    <Image source={require('./Images/Homes.png')} style={[{ width: 30, height: 30 }, { tintColor: selectedcolor == 0 ? 'blue' : 'black' }]} />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setselectedColor(1)} >
                    <Image source={require('./Images/Searchs.png')} style={[{ width: 30, height: 30 }, { tintColor: selectedcolor == 1 ? 'blue' : 'black' }]} />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setselectedColor(2)}>
                    <Image source={require('./Images/Plus.png')} style={[{ width: 30, height: 30 }, { tintColor: selectedcolor == 2 ? 'blue' : 'black' }]} />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setselectedColor(3)}>
                    <Image source={require('./Images/Heart.png')} style={[{ width: 30, height: 30 }, { tintColor: selectedcolor == 3 ? 'blue' : 'black' }]} />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setselectedColor(4)}>
                    <Image source={require('./Images/Account.png')} style={[{ width: 30, height: 30 }, { tintColor: selectedcolor == 4 ? 'blue' : 'black' }]} />
                </TouchableOpacity>




            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})