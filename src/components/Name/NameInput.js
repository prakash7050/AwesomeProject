import { useState } from "react";
import { View } from "react-native";
import { isMobileView } from "../../Constant";
import SingleLineText from "../TextInputField/SinglLineTextInput";





const NameInput = ({firstNameLabel,middleNameLabel,lastNameLabel,suffixNameLabel,onChange}) =>{
    let [nameList, setNameList] = useState({});

    const handleChange = (name,value) =>{
       const nameValue = {...nameList,[`${name}`]:value}
        setNameList(nameValue);
        onChange(nameValue);
    }
    console.log(isMobileView);

    return(
        <View style={{flexDirection:!isMobileView ? 'row' : 'column',width:'100%'}}>
            {suffixNameLabel && <SingleLineText onChangeText={(value)=>handleChange(suffixNameLabel,value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '10%' : '50%'}} label={suffixNameLabel} />}
            {firstNameLabel && <SingleLineText onChangeText={(value)=>handleChange(firstNameLabel,value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '30%' : '90%'}} label={firstNameLabel} />}
            {middleNameLabel && <SingleLineText onChangeText={(value)=>handleChange(middleNameLabel,value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '30%' : '90%'}} label={middleNameLabel} />}
            {lastNameLabel && <SingleLineText onChangeText={(value)=>handleChange(lastNameLabel,value)} outlineStyle={{borderEndWidth:1}} style={{flex:1,width:!isMobileView ? '30%' : '90%'}} label={lastNameLabel} />}
        </View>
    )
}

export default NameInput;