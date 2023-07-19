import { isEmpty } from "lodash";
import { useState } from "react";
import { View } from "react-native";
import { isMobileView } from "../../Constant";
import NumberTextInput from "../TextInputField/NumberTextInput";
import SingleLineText from "../TextInputField/SinglLineTextInput";

const AddressInput = ({value,onChange}) =>{
    let [nameList, setNameList] = useState({});
    
    const fetchPinCodeDetails = async (pincode) =>{
        const result = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        const details = await result.json();
        let pinCodeDetails = {}
        if(details[0]?.Status !== "Error"){
            pinCodeDetails = {...details[0]?.PostOffice[0]}
        }
        return pinCodeDetails;
    }

    const handleChange = async(name,value) =>{
       let nameValue = {...nameList,[`${name}`]:value}
       if(name === 'Postal Code' && value.length === 6){
        const pinDetails = await fetchPinCodeDetails(value)
        if(!isEmpty(pinDetails)){
            nameValue = {...nameValue,["City / District"]:pinDetails?.District,["State / Province"]:pinDetails?.State,["Country"]:pinDetails?.Country}
        }
       }
        setNameList(nameValue);
        onChange(nameValue);
    }

    return(
        <View style={{flexDirection:'column',width:'100%'}}>
            <View style={{flexDirection:!isMobileView ? 'row' : 'column',width:'100%'}}>
                <SingleLineText value={nameList["Address Line 1"]} onChangeText={(value)=>handleChange("Address Line 1",value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '45%' : '90%'}} label={"Address Line 1"} />
                <SingleLineText value={nameList["Address Line 2"]} onChangeText={(value)=>handleChange("Address Line 2",value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '41%' : '90%'}} label={"Address Line 2"} />
                <NumberTextInput value={nameList["Postal Code"]} maxLength={6} onChangeText={(value)=>handleChange("Postal Code",value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '15%' : '90%'}} label={"Postal Code"} />
                
            </View>
            <View style={{flexDirection:!isMobileView ? 'row' : 'column',width:'100%'}}>
                <SingleLineText value={nameList["City / District"]} onChangeText={(value)=>handleChange("City / District",value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '25%' : '90%'}} label={"City / District"} />
                <SingleLineText value={nameList["State / Province"]} onChangeText={(value)=>handleChange("State / Province",value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '25%' : '90%'}} label={"State / Province"} />
                <SingleLineText value={nameList["Country"]} onChangeText={(value)=>handleChange("Country",value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '25%' : '90%'}} label={"Country"} />
            </View>
        </View>
        
    )
}

export default AddressInput;