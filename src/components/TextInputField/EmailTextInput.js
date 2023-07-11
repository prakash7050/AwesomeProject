

import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Tooltip } from 'react-native-paper';

const EmailTextInput = (
    {
      label,
      mode='outlined',
      disabled=false,
      placeholder='',
      error=false,
      onChangeText,
      onFocus,
      selectionColor,
      underlineColor,
      outlineColor,
      textColor,
      value,
      style,
      iconName,
      iconColor,
      errorMessage,
      errorColor = 'red',
      onBlur,
      required=false,
      maxLength,
      theme,
      outlineStyle,
      ...res
    }) => {
      const [isError, setIsError] = useState(false)
      const [values, setValue] = useState('')

      const isRequired = () =>{
        console.log(!value && required && !error && !errorMessage,'<<<<<',value , required , !error ,errorMessage)
        if(!values && required && !error && !errorMessage){
          setIsError(true)
        }else{
          onBlur()
        }
      }

      const handleChange = (value) =>{
        setValue(value)
        onChangeText(value)
        if(value.length !== 0){
          setIsError(false)
        }
      }

  return (
    <View style={{margin:5,width:'100%',minHeight:70,flexDirection:'column'}}>
      <View style={{flex:1,flexDirection:'row'}}>
              <TextInput
                  theme={{colors:'primary',...theme}}
                  style={{backgroundColor:'white',flex:1,textAlign:'left',...style}}
                  label={required ? `${label}*` : label}
                  disabled={disabled}
                  multiline={false}
                  outlineStyle={{height:50,borderEndWidth:10,...outlineStyle}}
                  textContentType='name'
                  inputMode={'email'}
                  mode={mode}
                  maxLength={maxLength}
                  onFocus={onFocus}
                  value={value || values}
                  onBlur={required ? isRequired : onBlur}
                  placeholder={placeholder}
                  error={error || isError}
                  selectionColor={(error || isError) ? errorColor : selectionColor}
                  underlineColor={(error || isError) ? errorColor : underlineColor}
                  outlineColor={(error || isError) ? errorColor : outlineColor}
                  textColor={(error || isError) ? errorColor : textColor}
                  onChangeText={(value)=>handleChange(value)}
                  {...res}
              />
              {required && isError && <View>
                <Tooltip title='This field is required.'>
                  <Ionicons size={25} style={{color:'red',flex:0,marginTop:20,marginLeft:-40}} name='alert-circle' />
                </Tooltip>
              </View>}
              {(!isError ) &&
              <View>
                <Ionicons size={25} style={{color:iconColor || '#b37982',flex:0,marginTop:20,marginLeft:-40}} name={iconName || 'mail-outline'} />
              </View>
              }
            </View>
        {error &&<Text style={{color:errorColor || 'red',marginLeft:5}}>{errorMessage}</Text>}
    </View>
  );
};

export default EmailTextInput;