import { StyleSheet, Text, TextInput, View, Image, FlatList, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../Redux/WishListSlice';
const DATA = [
    {
        id: '1',
        source: require('../Images/Bikes.png'),
        title: 'Bike'

    },
    {
        id: '2',
        source: require('../Images/Car.png'),
        title: 'Car'

    },
    {
        id: '4',
        source: require('../Images/Watch.png'),
        title: 'Watch'

    },
    {
        id: '3',
        source: require('../Images/Camera.png'),
        title: 'Camera'
    },
    {
        id: '5',
        source: require('../Images/Laptop.png'),
        title: 'Laptop'

    },
    {
        id: '6',
        source: require('../Images/Bags.png'),
        title: 'Bag'
    },
];

const numColumns = 3;



const Home = () => {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const item = useSelector(zain => zain.post)
    // const Items = useSelector(zain => zain.addToWishlist)
    return (
        <View style={{ flex: 1,backgroundColor:'white' }}>
            <ScrollView>

                <View>
                    <StatusBar
                        backgroundColor={'white'}
                        barStyle={'dark-content'}
                    />
                </View>

                <Text style={styles.logo}>OLX Clone</Text>
                <View style={styles.Searchbox}>
                    <TextInput
                        placeholder='Search Item here...'
                        style={styles.input}
                    />
                    <Image source={require('../Images/Searchs.png')} style={{ width: 27, height: 27, alignSelf: 'center', marginHorizontal: 10 }} />
                </View>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '600', marginVertical: 20, marginHorizontal: 20 }}>What are you looking For ?</Text>
                <View>
                    <FlatList
                        numColumns={numColumns}
                        data={DATA}
                        renderItem={({item}) => {
                            return (
                                <View>
                                <TouchableOpacity style={styles.item} onPress={()=> {navigation.navigate('ItemCategory',{category: item.title})}}>
                                    <Image source={item.source} style={styles.image} />
                                    <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 5,color:'black' }}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                            )
                        }}
                    />
                </View>
                <View>
                    <Text style={{ marginTop: 20, marginHorizontal: 15, color: 'black', fontSize: 20, fontWeight: '600' }}>Posted Items</Text>
                    <View  style={{marginBottom:100}}>
                        <FlatList
                            data={item.data}
                            renderItem={({ item , index }) => {
                                return (
                                    <TouchableOpacity style={styles.PostedItem}>
                                        <Image source={{ uri: item.image }} style={{ height: 80, width: 80, marginLeft: 10 }} />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{ fontSize: 18, color: 'black', fontWeight: '500', }}>{item.name}</Text>
                                            <Text style={{}}>{item.desc}</Text>
                                            <Text style={{ fontSize: 16, color: 'green', fontWeight: '500' }}>{'Rs: '+ item.price}</Text>
                                        </View>
                                        <TouchableOpacity style={{height:25,width:25,position:'absolute',top:20,right:20}} onPress={()=> {dispatch(addToWishlist(item))}}>
                                        <Image source={require('../Images/Heart.png')} style={{height:25,width:25}} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    logo: {
        fontSize: 30,
        marginVertical: 25,
        marginHorizontal: 20,
        color: 'blue',
        fontWeight: 'bold'
    },
    Searchbox: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#a9a9a9',
        height: 40,
        alignSelf: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#f5f5f5'
    },
    input: {
        width: '80%',
        marginLeft: 10
    },
    item: {
        width: Dimensions.get('window').width / 3,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        margin: 2
    },
    image: {
        height: 70,
        width: 90,
        borderRadius: 20,
    },
    PostedItem: {
        width: '90%',
        height: 100,
        backgroundColor: '#f5f5f5',
        marginTop: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:10
    }


})