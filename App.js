import { StatusBar } from "expo-status-bar";
import { forwardRef, useRef, useState } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { Provider } from "react-redux";
import MyHome from "./src/pages/MyHome";
import { store } from "./src/redux/store";
// import Button from './components/Button';
// import ImageViewer from './components/ImageViewer';

// const PlaceholderImage = require("./assets/images/background-image.png");

const InfoMessage = forwardRef((props, ref) => {
  return(
      <Toast ref={ref} />
  )
});

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'
  const [isHidden, setIsHidden] = useState(false)
  const toastRef = useRef(null);
  
  return (
    <Provider store={store}>
    <View style={{...styles.container,backgroundColor:isDarkMode ? 'white' : 'white'}}>
      
      {/* <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View> */}
      
      <MyHome />
      
      <StatusBar backgroundColor={isDarkMode ? 'white' : 'black'} style={!isDarkMode ? 'light' : 'dark'} hideTransitionAnimation="fade" networkActivityIndicatorVisible={true} />
      <InfoMessage ref={toastRef} />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height: '100%'
    // backgroundColor: '#25292e',
    // alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    // alignItems: 'center',
    margin:'10%'
  },
});
