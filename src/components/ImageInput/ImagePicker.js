// import * as CAMERA from 'expo-camera';
// import * as ImagePickers from 'expo-image-picker';
// import React, { useState } from 'react';
// import { Button, Image, Platform, View } from 'react-native';

// export default function ImagePicker() {
//   const [image, setImage] = useState(null);
//   const [status, requestPermission] = ImagePickers.useMediaLibraryPermissions();

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     // let result = await ImagePickers.launchImageLibraryAsync({
//     //   mediaTypes: ImagePickers.MediaTypeOptions.All,
//     //   allowsEditing: true,
//     //   aspect: [4, 3],
//     //   quality: 1,
//     // });

//     // console.log(result);

//     // if (!result.canceled) {
//     //   setImage(result.assets[0].uri);
//     // }
//    await CAMERA.requestCameraPermissionsAsync()
// 			.then((response) => {
// 				const { status, expires, permissions } = response
//                 console.log(response,'<<<<<<<')
// 				if (status === 'granted' || Platform.OS === 'web') {
// 					ImagePickers.launchImageLibraryAsync({
// 						// mediaTypes: 'All',
// 						base64: true,
// 						quality: 1,
// 					})
// 						.then((response) => {
// 							if (!response.cancelled) {
// 								// const { user, sendImage } = this.props
// 								//TODO: Check if it is a video and store video
// 								// const data = { uri: response.uri, user }
//                                 setImage(response?.assets[0].uri);
// 							}
// 						})
// 						.catch((error) => console.log(error))
// 				}
// 			})
// 			.catch((error) => console.log(error))
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }