import React, { useState } from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { Image } from 'expo-image';
import SingleLineText from '../TextInputField/SingleLineTextInput';

export default function ImagePicker({fileType,label,setFile,removeFile,isShowImage=false}) {
  const [singleFile, setSingleFile] = useState('');

  const checkPermissions = async () => {
    try {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
      console.log(`<<<<result<<<`,result)

      if (!result) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title:
              'You need to give storage permission to download and save the file',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          return true;
        } else {
         Platform.OS === 'android' && Alert.alert('Error', I18n.t('PERMISSION_ACCESS_FILE'));

          console.log('Camera permission denied');
          return false;
        }
      } else {
        return true;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const uploadImage = async () => {
    const BASE_URL = 'xxxx';

    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const data = new FormData();

      data.append('file_attachment', {
        uri: singleFile.uri,
        name: singleFile.name,
        type: singleFile.mimeType,
      });

      // return
      try {
        let res = await fetch(BASE_URL + 'tutorial/upload.php', {
          method: 'post',
          body: data,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          timeout: 5000,
        });

        let result = await res.json();
        console.log('result', result);
        if (result.status == 1) {
          Alert.alert('Info', result.msg);
        }
      } catch (error) {
        // Error retrieving data
        // Alert.alert('Error', error.message);
        console.log('error upload', error);
      }
    } else {
      // If no file selected the show alert
      Alert.alert('Please Select File first');
    }
  };

  async function selectFile() {
    try {
      const result = await checkPermissions();

      if (result || Platform.OS === 'web') {
        const result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: false,
          type: fileType && `${fileType}/*`,
          multiple: true
        });
        console.log(`<<<<res<<<<`,result)

        if (result.type === 'success') {
          // Printing the log realted to the file
          console.log('res : ' + JSON.stringify(result));
          // Setting the state to show single file attributes
          setFile(result)
          setSingleFile(result);
        }
      }
    } catch (err) {
      setSingleFile(null);
      console.warn(err);
      return false;
    }
  }

  const remove = () =>{
    removeFile()
    setSingleFile('')
  }

  return (
    <View >
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={selectFile}>
        <SingleLineText
            disabled={true}
            outlineStyle={{borderColor:'black'}}
            textColor={'black'}
            iconName={"md-cloud-upload"}
            iconColor={singleFile?.name ? 'green' : ''}
            label={label || 'Select File'}
            value={singleFile?.name ? singleFile?.name : ''}
        />
      </TouchableOpacity>
      {singleFile && (
        <Text style={{marginLeft:10,marginTop:-10}}>
          {singleFile?.name && singleFile?.name}
          {singleFile?.name &&  <Ionicons name='remove-circle' color={'red'} size={20} onPress={remove}/>}
          {/* {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'} */}
        </Text>
      )}
      {isShowImage && singleFile?.uri && <View style={{width:100,height:100,marginLeft:10}}>
            <Image
                style={styles.image}
                source={{uri:singleFile?.uri}}
                // placeholder={blurhash}
                contentFit="cover"
                // transition={1000}
            />
            </View>}

      {/* <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    // borderRadius: 30,
    // marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
