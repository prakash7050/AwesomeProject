//Make Circular Image in React Native using Border Radius
//https://aboutreact.com/react-native-round-shape-image/

//import React in our code
import React from 'react';

//import all the components we are going to use
import { Image } from 'expo-image';


const loadedImageData =  "https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg"

const CircularImage = ({size=100,style,uri}) => {
  return (
    <Image
        source={{
        uri: uri ? uri : loadedImageData,
        }}
        style={{ borderColor:'black',borderWidth:1 ,...style,width: size, height: size, borderRadius: size / 2}}
    />
  );
};

export default CircularImage;
