import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import React, { useRef, useState } from 'react';
import { Alert, PermissionsAndroid, Text, View } from 'react-native';
import SignatureScreen from "react-native-signature-canvas";
import { showToast } from '../../Constant';
import LoadingButton from '../Button/LoadingButton';

export default function MobileSign() {
  const signatureRef = useRef(null);
  const [signatureData, setSignatureData] = useState(null);

  const handleSave = () => {
    if (signatureRef.current) {
      signatureRef.current.readSignature();
    }
  };

  const handleDownload  = async(encode) =>{
    if(encode){
      Alert.alert(
        'Signature',
        'Do you want to be download',
        [
          {
            text: 'Cancel',
            onPress: () => handleReset(),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: async() => await download(encode),
          },
        ],
        { cancelable: false }
      );
    }
  }
  const download = async(encode) =>{
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const fileUri = `${FileSystem.documentDirectory}signature.png`;
        const fileInfo = await FileSystem.writeAsStringAsync(fileUri,encode.replace("data:image/png;base64,", ""),{ encoding: FileSystem.EncodingType.Base64 });
        await pickLocationAndMoveFile(fileUri);
        const fileCheck = await FileSystem.getInfoAsync(fileUri)
        showToast({type:'success',text1:'Signature',text2:'Download successful.',position:'top'})
      } else {
        console.log('Permission denied.');
      }
    } catch (error) {
      showToast({type:'error',text1:'Signature',text2:error.toString(),position:'top'})
      console.log('Download error:', error);
    }
  }

  const pickLocationAndMoveFile = async (fileUri) => {
    try {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      const album = await MediaLibrary.getAlbumAsync('Download');
      if (album === null) {
        await MediaLibrary.createAlbumAsync('Download', asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }
    } catch (error) {
      showToast({type:'error',text1:'Signature',text2:error.toString(),position:'top'})
    }
  };
  

  const handleReset = () => {
    if (signatureRef.current) {
      signatureRef.current.clearSignature();
    }
  };

  const handleOK = async(signature) => {
    const path = FileSystem.cacheDirectory + "sign.png";
   await FileSystem.writeAsStringAsync(
      path,
      signature.replace("data:image/png;base64,", ""),
      { encoding: FileSystem.EncodingType.Base64 }
    )
      .then(() => FileSystem.getInfoAsync(path))
      .then(console.log)
      .catch(console.error);
  };

  return (
    <View style={{paddingTop:5,borderWidth:1,borderColor:'black',borderRadius:10,width:'92%',height:250}}>
      <Text style={{marginLeft:5,marginTop:-5,fontWeight:'bold'}}>Signature</Text>
      <SignatureScreen
      ref={signatureRef}
      backgroundColor='white'
      penColor='black'
      onOK={handleDownload}
    />
      <View style={{flexDirection:'row',marginTop:-4,justifyContent:'center'}}>
          <View style={{paddingRight:10}}>
              <LoadingButton backgroundColor={'red'} width={100} height={25} onPress={()=>handleReset()} title={'Reset'} />
          </View>
          <View>
              <LoadingButton backgroundColor={'green'} width={100} height={25} onPress={()=>handleSave()} title={'Save'} />
          </View>
      </View>
    </View>
  );
}
