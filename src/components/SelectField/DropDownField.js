import { Ionicons } from '@expo/vector-icons';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Tooltip } from 'react-native-paper';
import { isMobileView } from '../../Constant';

const DropDownField = ({
    required,
    iconName,
    iconColor,
    error,
    errorMessage,
    mode='dropdown',
    placeholder,
    value,
    onValueChange,
    itemData,
    numberOfLines,
    label,
    style,
    ...res
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isError, setIsError] = useState(false)
  const [borderColor, setBorderColor] = useState('black')

  const handleClick = (name) => {
    if(name === 'onBlur'){
        setBorderColor('');
    }else if(name === 'onFocus'){
        setBorderColor('#383669');
    }
  };

const handleChange = (itemValue) =>{
  console.log(itemValue)
    setSelectedValue(itemValue)
    onValueChange?.(itemValue)
}
console.log(`<<<<itemData<<<`,itemData)
  return (
    <View style={{width:'100%',height:60,minWidth:200,flexDirection:'column',...style}}>
         {/* {label &&<View><Text style={{fontWeight:'normal',fontSize:18,paddingLeft:10,color:error ? 'red' : 'black'}}>{required ? `${label}*` : label}</Text></View>} */}
        {isMobileView ?
        <View style={{flex:1,flexDirection:'row',height:20,borderRadius:5,borderWidth:1}}>
        {label &&<View><Text style={{paddingLeft:10,marginTop:20,fontSize:15,color:error ? 'red' : 'black'}}>{required ? `${label}*` : label} :</Text></View>}
            <Picker
                mode={mode || 'dropdown'}
                onFocus={()=>handleClick('onFocus')}
                onBlur={()=>handleClick('onBlur')}
                placeholder={placeholder}
                selectedValue={value || selectedValue}
                style={{height:20,marginTop:5, flex:1,borderWidth:0,borderEndWidth:0,borderColor:'white',borderRadius:5 }}
                onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}
                numberOfLines={numberOfLines}
                {...res}
            >
                {itemData && itemData?.map((data,i)=>(
                <Picker.Item label={data?.label} value={data?.value} key={i} />
            ))}
            </Picker>
            {required && isError && <View>
            <Tooltip title='This field is required.'>
                <Ionicons size={25} style={{color:'red',flex:0,marginTop:15,marginLeft:-60}} name='alert-circle' />
            </Tooltip>
            </View>}
            {(!isError && iconName) &&
            <View>
                <Ionicons size={25} style={{color:iconColor,flex:0,marginTop:15,marginLeft:-60}} name={iconName} />
            </View>
            }
        </View>
        :
        <FormControl fullWidth>
          <InputLabel >{required ? `${label}*` : label}</InputLabel>
        <Select
        value={value}
        label={label}
        required={false}
        style={{height:60}}
        onChange={(e)=>handleChange(e.target.value)}
      >
        {itemData && itemData?.map((data,i)=>(
            <MenuItem value={data?.value} key={i} >{data?.label}</MenuItem>
        ))}
      </Select>
      </FormControl>
      }
        {error &&<Text style={{color:errorColor || 'red',marginLeft:5}}>{errorMessage}</Text>}
    </View>
  );
};

export default DropDownField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});