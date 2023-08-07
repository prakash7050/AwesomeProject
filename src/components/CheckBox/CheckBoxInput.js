import React from 'react';
import { Platform } from 'react-native';
import { Checkbox } from "react-native-paper";



const CheckBoxInput = (
    {
        label,
        mode,
        style,
        color,
        status=false,
        onPress,
        labelColor
    }
) =>{
const [statusValue, setStatusValue] = React.useState('unchecked')

const handleChange = () =>{
    onPress?.(!status)
    setStatusValue(statusValue === 'checked' ? 'unchecked' : 'checked')
}
    return(
        <Checkbox.Item uncheckedColor='black' position={'leading'} mode={Platform.OS} style={{...style}} labelStyle={{color:labelColor || 'black'}} status={status ? 'checked' : statusValue} label={label} color={color || 'green'} onPress={handleChange}  />
    )
}

export default CheckBoxInput;