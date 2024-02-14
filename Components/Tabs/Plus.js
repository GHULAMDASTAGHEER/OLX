import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, PermissionsAndroid, ScrollView,StatusBar } from 'react-native'
import React, { useState } from 'react'
import { launchCamera } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { addPost } from '../Redux/PostSlice';

const Plus = ({ onpost }) => {

  const dispatch = useDispatch()
  const [photo, setphoto] = useState({
    assets: [{
      fileName: '',
      fileSize: 1509934,
      height: 4000,
      type: "image/jpeg",
      uri: '',
      width: 3000
    }]
  })

  const [name, setname] = useState('')
  const [desc, setdesc] = useState('')
  const [price, setprice] = useState('')

  const [selectedCategory, setselectedCategory] = useState(0)
  const[selectColor,setselectedColor] = useState(null)

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        OpenCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const OpenCamera = async () => {
    const result = await launchCamera({ mediaType: 'photo' });
    if (!result.didCancel) {
      setphoto(result)
    }

  }

  const additem = () => {
    dispatch(addPost({ 
       name: name,
       desc: desc,
       price: price,
       image: photo.assets[0].uri,
       category :selectedCategory == 0 
       ? 'Car'
       : selectedCategory == 1
       ? 'Bike' 
       : selectedCategory == 2
       ? 'Laptop'
       : selectedCategory == 3
       ? 'Camera'
       : selectedCategory == 4
       ? 'Bag' 
       : 'Watch' ,
      }))
    onpost()
  }

  return (
    <ScrollView>
      <View style={styles.container}>
      <View>
      <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
      />
  </View>
        <View style={styles.header}>
          <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Add Post</Text>
        </View>

        <TouchableOpacity style={styles.ImageView} onPress={() => requestCameraPermission()}>
          {photo.assets[0].uri == '' ? (
            <Image source={require('../Images/Placeholder.webp')} style={styles.ImageView} />
          ) : (
            <Image source={{ uri: photo.assets[0].uri }} style={styles.ImageView} />
          )}
        </TouchableOpacity>




        <TextInput style={styles.Input}
          placeholder='Enter Item name'
          value={name}
          onChangeText={text => setname(text)}
        />
        <TextInput style={[styles.Input, { marginTop: 15 }]}
          placeholder='Enter Item Description'
          value={desc}
          onChangeText={text => setdesc(text)}
        />
        <TextInput style={[styles.Input, { marginTop: 15 }]}
          placeholder='Enter Item Price'
          keyboardType='number-pad'
          value={price}
          onChangeText={text => setprice(text)}
        />

        <Text style={{ fontSize: 20, marginTop: 25, marginLeft: 22, fontWeight: '600', color: 'black' }}>Category</Text>

        <TouchableOpacity style={[styles.Input, { justifyContent: 'center', marginTop: 15, borderColor: selectedCategory == 0 ? 'blue' : 'black' }]} onPress={() => setselectedCategory(0)}
        onPressIn={()=>setselectedColor(0)}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: selectColor == 0 ? 'blue' : 'black' }}>Car</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Input, { justifyContent: 'center', marginTop: 15, borderColor: selectedCategory == 1 ? 'blue' : 'black' }]} onPress={() => setselectedCategory(1)}
        onPressIn={()=>setselectedColor(1)}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: selectColor == 1 ? 'blue' : 'black' }}>Bike</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Input, { justifyContent: 'center', marginTop: 15, borderColor: selectedCategory == 2 ? 'blue' : 'black' }]} onPress={() => setselectedCategory(2)} onPressIn={()=>setselectedColor(2)}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: selectColor == 2 ? 'blue' : 'black' }}>Laptop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Input, { justifyContent: 'center', marginTop: 15, borderColor: selectedCategory == 3 ? 'blue' : 'black' }]} onPress={() => setselectedCategory(3)} onPressIn={()=>setselectedColor(3)}>
          <Text style={{ fontSize: 18, fontWeight: '500',  color: selectColor == 3 ? 'blue' : 'black' }}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Input, { justifyContent: 'center', marginTop: 15, borderColor: selectedCategory == 4 ? 'blue' : 'black' }]} onPress={() => setselectedCategory(4)} onPressIn={()=>setselectedColor(4)}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: selectColor == 4 ? 'blue' : 'black' }}>Bag</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Input, { justifyContent: 'center', marginTop: 15, borderColor: selectedCategory == 5 ? 'blue' : 'black' }]} onPress={() => setselectedCategory(5)}
        onPressIn={()=>setselectedColor(5)}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: selectColor == 5 ? 'blue' : 'black' }}>Watch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => additem()}>
          <Text style={{ color: 'white', fontSize: 19, fontWeight: '700' }}>Post My Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Plus

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  ImageView: {
    width: '90%',
    height: 130,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  Input: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center', height: 50,
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 30
  },
  btn: {
    width: '90%',
    marginTop: 30,
    backgroundColor: 'blue',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100
  }


})