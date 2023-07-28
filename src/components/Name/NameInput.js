import { useState } from "react";
import { View } from "react-native";
import { isMobileView } from "../../Constant";
import DropDownField from "../SelectField/DropDownField";
import SingleLineText from "../TextInputField/SingleLineTextInput";





const NameInput = ({firstNameLabel,middleNameLabel,lastNameLabel,prefixLabel,suffixNameLabel,onChange}) =>{
    let [nameList, setNameList] = useState({});
    const [prefix, setPrefix] = useState([{label:'Mr.',value:'Mr.'},{label:"Mrs.",value:'Mrs.'},{label:'Ms.',value:'Ms.'}])

    const handleChange = (name,value) =>{
       const nameValue = {...nameList,[`${name}`]:value}
        setNameList(nameValue);
        onChange(nameValue);
    }
    console.log(isMobileView);

    return(
        <View style={{flexDirection:!isMobileView ? 'row' : 'column',width:'100%'}}>
            {prefixLabel && <View style={{width:isMobileView ? '100%' : 100}}><DropDownField onValueChange={(value)=>handleChange(prefixLabel,value)} itemData={prefix} /></View>}
            {firstNameLabel && <SingleLineText onChangeText={(value)=>handleChange(firstNameLabel,value)} outlineStyle={{borderEndWidth:1}} label={firstNameLabel} />}
            {middleNameLabel && <SingleLineText onChangeText={(value)=>handleChange(middleNameLabel,value)} outlineStyle={{borderEndWidth:1}} label={middleNameLabel} />}
            {lastNameLabel && <SingleLineText onChangeText={(value)=>handleChange(lastNameLabel,value)} outlineStyle={{borderEndWidth:1}} label={lastNameLabel} />}
            {suffixNameLabel && <SingleLineText onChangeText={(value)=>handleChange(suffixNameLabel,value)} outlineStyle={{borderEndWidth:1}} label={suffixNameLabel} />}
        </View>
    )
}

export default NameInput;