import { StatusBar } from "expo-status-bar";
import { forwardRef, useRef, useState } from "react";
import { ScrollView, StyleSheet, View, useColorScheme } from "react-native";
import 'react-native-gesture-handler';
import { Provider } from "react-native-paper";
import Toast from 'react-native-toast-message';
import CreateForm from "./src/pages/CreateForm";
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
    <>
    <View style={{...styles.container,backgroundColor:isDarkMode ? 'white' : 'white'}}>
      
      {/* <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View> */}
      
      <Provider>
      
      <ScrollView onScroll={()=>setIsHidden(true)}>
      
        <CreateForm />
      </ScrollView>
      </Provider>
      
      <StatusBar backgroundColor={isDarkMode ? 'white' : 'black'} style={!isDarkMode ? 'light' : 'dark'} hideTransitionAnimation="fade" networkActivityIndicatorVisible={true} />
      <InfoMessage ref={toastRef} />
    </View>
    </>
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
