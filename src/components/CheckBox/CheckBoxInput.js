import React from 'react';
import { Platform } from 'react-native';
import { Checkbox } from "react-native-paper";



const CheckBoxInput = (
    {
        label,
        mode,
        color,
        status,
        onPress,
        labelColor
    }
) =>{
const [statusValue, setStatusValue] = React.useState('unChecked')

const handleChange = () =>{
    setStatusValue(statusValue === 'checked' ? 'unchecked' : 'checked')
}
    return(
        <Checkbox.Item position={'trailing'} mode={Platform.OS} labelStyle={{color:labelColor || 'black'}} status={statusValue} label="name" color={color} onPress={handleChange}  />
    )
}

export default CheckBoxInput;