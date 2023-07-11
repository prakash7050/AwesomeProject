import { Ionicons } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Tooltip } from 'react-native-paper';


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
  const [selectedValue, setSelectedValue] = useState("js");
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
    setSelectedValue(itemValue)
    onValueChange(itemValue)
}

  return (
    <View style={{margin:5,width:'100%',minHeight:70,flexDirection:'column'}}>
         {label &&<View><Text style={{fontWeight:'normal',fontSize:18,paddingLeft:10,color:error ? 'red' : 'black'}}>{required ? `${label}*` : label}</Text></View>}
        <View style={{flex:1,flexDirection:'row',borderEndWidth:10,height:50,borderRadius:5,borderWidth:1}}>
            <Picker
                mode={mode || 'dropdown'}
                onFocus={()=>handleClick('onFocus')}
                onBlur={()=>handleClick('onBlur')}
                placeholder={placeholder}
                selectedValue={value || selectedValue}
                style={{height: 50, flex:1,borderEndWidth:10,borderColor:borderColor,borderRadius:5,...style }}
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