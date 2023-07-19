import DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import React, { useRef, useState } from 'react';
import { Alert, PermissionsAndroid, Text, View } from 'react-native';
import { log } from 'react-native-reanimated';
import { SignatureView } from 'react-native-signature-capture-view';
import { showToast } from '../../Constant';
import LoadingButton from '../Button/LoadingButton';

export default function MobileSign() {
  const signatureRef = useRef(null);
  const [signatureData, setSignatureData] = useState(null);

  const handleSave = () => {
    if (signatureRef.current) {
      signatureRef.current.saveSignature();
    }
  };

  const handleDownload  = async(encode) =>{
    console.log(`<<<<base64<<<`,encode);
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
            onPress: async() => await download({data:`${encode}`}),
          },
        ],
        { cancelable: false }
      );
    }
  }
  const download = async(data) =>{
    log(`<<<<<dd<<<`,data)
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const fileUri = `${FileSystem.documentDirectory}signature1.png`;
        console.log(`,,,,filePath`,fileUri);
        const fileInfo = await FileSystem.writeAsStringAsync(fileUri, data.data, {
          encoding: FileSystem.EncodingType.Base64,
        });
        // if(fileInfo){
        //   await pickLocationAndMoveFile(fileUri);
        // }
        const fileCheck = await FileSystem.getInfoAsync(fileUri)
        console.log(`<<<info<<<`,fileInfo,fileCheck);
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
      // Ask the user to choose a location to save the file
      const locationResult = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', // Replace with the desired file type(s)
      });
      if (locationResult.type === 'success') {
        const destinationUri = locationResult.uri;
        // Move the downloaded file to the chosen location
        await FileSystem.moveAsync({
          from: fileUri,
          to: destinationUri,
        });
  
        console.log('File moved to:', destinationUri);
      } else {
        console.log('User canceled the location selection.');
      }
    } catch (error) {
      console.error('Error while selecting location and moving the file:', error);
    }
  };
  

  const handleReset = () => {
    if (signatureRef.current) {
      signatureRef.current.clearSignature();
    }
  };
console.log(signatureRef.current.onSave)
  return (
    <View style={{paddingTop:5,borderWidth:1,borderColor:'black',borderRadius:10,width:'92%',height:250}}>
      <Text style={{marginLeft:5,marginTop:-5,fontWeight:'bold'}}>Signature</Text>
      <SignatureView
        style={{
          borderWidth:2,
          height:200,
          borderRadius:5,
          margin:5,
        }}
          ref={signatureRef}
          // onSave is automatically called whenever signature-pad onEnd is called and saveSignature is called
          onSave={(val) => {
            //  a base64 encoded image
            handleDownload(val)
            console.log('saved signature')
          }}
          onClear={() => {
            console.log('cleared signature')
          }}
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
