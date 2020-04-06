import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function ImagePickerComponent(props) {
    let [selectedImage, setSelectedImage] = React.useState(null);
    let [imageUri, setImageUri] = React.useState('');

    const createFormData = (photo, body) => {
        const data = new FormData();


        data.append("photo", {
            name: photo.fileName,
            type: photo.type,
            // uri:  Platform.OS === "android" ? imageUri : imageUri.replace("file://", "")
        });

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });


        return data;
    }

    uploadImageHandler = () => {
        fetch('http://192.168.2.116:8089/api/upload', {
            method: "POST",
            body: createFormData(selectedImage, {userID: "123"})
        })
            .then(response => response.json())
            .then(response => {
                Alert.alert("Upload Success")
            })
            .catch(error => {
                Alert.alert('Upload Failed')
            })
    }

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

            
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
      
          setSelectedImage({ localUri: pickerResult.uri });
          setImageUri(pickerResult.uri);
        
        };
      
        if (selectedImage !== null) {
          return (
            <View style={styles.container}>
              <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
              />
              {uploadImageHandler()}
            </View>
          );
        }
      
        return (
          <View style={styles.container}>
           <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
            </TouchableOpacity>
          </View>
        );
      }
      
      const styles = StyleSheet.create({
        /* Other styles hidden to keep the example brief... */
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          logo: {
            width: 305,
            height: 159,
            marginBottom: 20,
          },
          instructions: {
            color: '#888',
            fontSize: 18,
            marginHorizontal: 15,
            marginBottom: 10,
          },
          button: {
            backgroundColor: 'blue',
            padding: 20,
            borderRadius: 5,
          },
          buttonText: {
            fontSize: 20,
            color: '#fff',
          },
        thumbnail: {
          width: 300,
          height: 300,
          resizeMode: "contain"
        }
      });