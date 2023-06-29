import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const defaultValues = [
    {
        label:'First Item',
        value: 'first'
    },
    {
        label:'Second Item',
        value: 'Second'
    }
]
const RadioButtonInput = ({
    onValueChange,
    value,
    itemData,
    color,
    labelStyle
}) => {
    const [values, setValue] = React.useState('first');

    const handleChange = (value) =>{
        onValueChange(value)
        setValue(value)
    }
    
       return (
         <RadioButton.Group onValueChange={value => handleChange(value)} value={value || values}>
            <View style={{flexDirection:'row'}}>
                {itemData && itemData.map((item,i)=>
                    (<RadioButton.Item style={{flex:i+1}} labelStyle={labelStyle} color={color} label={item?.label} value={item?.value} />
                ))}
            </View>
           
         </RadioButton.Group>
       );
     };

export default RadioButtonInput;