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
            type: "image/jpeg",
            uri:  Platform.OS === "android" ? photo.localUri : photo.localUri.replace("file://", "")
        });

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });
        console.log(data)

        return data;
    }

    uploadImageHandler = () => {
        fetch('http://192.168.2.116:8081/api/upload', {
            method: "POST",
            body: createFormData(selectedImage, { dataType: props.dataType })
        })
            .then(response => response.json())
            .then(response => {
                alert("Upload Success")
            })
            .catch(error => {
                alert('Upload Failed')
                console.log(error)
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
      
          setSelectedImage({ localUri: pickerResult.uri, fileName: props.UserID, type: props.imageType });
        
        };
      
        if (selectedImage !== null) {
          return (
            <View style={styles.container}>
              <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
              />
              {console.log(selectedImage)}
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