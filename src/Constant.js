import { isMobile } from "react-device-detect";
import { Platform } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";


const isMobileView = isMobile ? true : Platform.OS !== 'web' ? true : false;

const showToast = ({type,text1,text2,position}) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      position: position,
    });
  };

export {
  isMobileView, showToast
};

