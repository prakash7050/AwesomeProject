import { upperFirst } from "lodash";
import { Text, View } from "react-native";
import FormField from "../Form/FormField";







const Validation = (props) =>{

    return(
        <View>
            <Text style={{fontWeight:'bold',fontSize:18}}>{upperFirst(props?.id)}</Text>
            <FormField {...props} style={{width:100}} />
        </View>
    )
}


export default Validation;