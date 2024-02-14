import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput,StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const Search = () => {
  const allItems = useSelector(state => state.post);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on searchQuery
  const filteredItems = allItems.data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1 ,backgroundColor:'white' }}>
    <View>
    <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
    />
</View>
      <View style={styles.Searchbox}>
        <TextInput
          placeholder='Search Item here...'
          style={styles.input}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <Image source={require('../Images/Searchs.png')} style={{ width: 27, height: 27, alignSelf: 'center', marginHorizontal: 10 }} />
      </View>

      <View style={{ marginTop: 20 }}>
        <FlatList
          data={filteredItems}
          renderItem={({ item, index }) => {
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
          }} />
      </View>
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  PostedItem: {
    width: '90%',
    height: 100,
    backgroundColor: '#f5f5f5',
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:10
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
    marginTop: 20
  },
  input: {
    width: '80%',
    marginLeft: 10
  },
});
