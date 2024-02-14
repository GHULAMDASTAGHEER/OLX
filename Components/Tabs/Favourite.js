import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeToWishlist } from '../Redux/WishListSlice';





const Favourite = () => {


  const dispatch = useDispatch();
  const Items = useSelector(state => state.wishList);

  const handleRemoveFromWishlist = (index) => {
    console.log("Deleting item with ID:", index);
    dispatch(removeToWishlist(index));
  };
  // const Items = useSelector(state => state.wishList);
  // const dispatch =useDispatch()
  

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={Items.data}
          renderItem={({ item,index }) => {
            return (
                <TouchableOpacity style={styles.PostedItem}>
                  <Image source={{ uri: item.image }} style={{ height: 80, width: 80, marginLeft: 10 }} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '500', }}>{item.name}</Text>
                    <Text style={{}}>{item.desc}</Text>
                    <Text style={{ fontSize: 16, color: 'green', fontWeight: '500' }}>{item.price}</Text>
                  </View>
                  <TouchableOpacity style={{ height: 25, width: 25, position: 'absolute', top: 20, right: 20 }}  onPress={() => handleRemoveFromWishlist(index.id)}>
                  <Image source={require('../Images/Delete.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>
                </TouchableOpacity>

            )
          }} />
      </View>
    </View>
  )
}

export default Favourite;

const styles = StyleSheet.create({
  PostedItem: {
    width: '90%',
    height: 100,
    backgroundColor: '#f5f5f5',
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10
  },
});
