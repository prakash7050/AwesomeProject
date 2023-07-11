import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, View, useColorScheme } from "react-native";
import { Provider } from "react-native-paper";
import Home from "./src/pages/Home";

// import Button from './components/Button';
// import ImageViewer from './components/ImageViewer';

// const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'
  const [isHidden, setIsHidden] = useState(false)
  return (
    <View style={{...styles.container,backgroundColor:isDarkMode ? 'white' : 'white'}}>
      {/* <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View> */}
      <Provider>
      <ScrollView onScroll={()=>setIsHidden(true)}>
        <Home />
      </ScrollView>
      </Provider>
      
      <StatusBar style={!isDarkMode ? 'light' : 'dark'} hideTransitionAnimation="fade" networkActivityIndicatorVisible={true} />
    </View>
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
