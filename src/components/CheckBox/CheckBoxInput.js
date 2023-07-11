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
        <Checkbox.Item uncheckedColor='black' position={'leading'} mode={Platform.OS} style={{justifyContent:'flex-start'}} labelStyle={{color:labelColor || 'black'}} status={statusValue} label={label} color={color || 'green'} onPress={handleChange}  />
    )
}

export default CheckBoxInput;