import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native';

const ItemCategory = () => {
 
  const items = useSelector (state =>state.post);
  const route = useRoute();
  const [itemList , setitemList] =useState ([])
  useEffect (()=>{

    let temdata = items.data
    let Temp =[]
    temdata.map( item =>{
      if (item.category == route.params.category){
        Temp.push(item);
      }}
    )
    setitemList(Temp)
  },[])

  return (
    <View style={{flex:1 ,backgroundColor:'white'}}>
    <FlatList
    data={itemList}
    renderItem={( { item, index }) => {
        return (
            <TouchableOpacity style={styles.PostedItem}>
                <Image source={{ uri: item.image }} style={{ height: 80, width: 80, marginLeft: 10 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '500', }}>{item.name}</Text>
                    <Text style={{}}>{item.desc}</Text>
                    <Text style={{ fontSize: 16, color: 'green', fontWeight: '500' }}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }}
/>
    </View>
  )
}

export default ItemCategory

const styles = StyleSheet.create({
  PostedItem: {
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#f5f5f5',
    borderRadius:10
}
})