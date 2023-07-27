import { Platform, View } from "react-native";
import MobileSign from "./MobileSign";
import WebSign from "./WebSign";

const Sign = () =>{
    return(
        <View style={{width:'100%'}}>
            {Platform.OS === 'web' &&
                <WebSign />
    }
           {Platform.OS === 'android' && <MobileSign />
            }
        </View>
    )
}

export default Sign;