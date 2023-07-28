

import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View } from 'react-native';
import { TextInput, Tooltip } from 'react-native-paper';

const DecimalTextInput = (
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
      const [isError, setIsError] = React.useState(false)
      const [fieldValue, setFieldValue] = React.useState('')
      const [isInvailid, setIsInvailid] = React.useState(false)

      const isRequired = () =>{
        if(!value && required && !error && !errorMessage){
          setIsError(true)
        }else{
          onBlur()
        }
      }

      const handleChange = (value) =>{
        if(isNaN(value)){
          setIsInvailid(true)
          setIsError(true)
        }else{
          setIsInvailid(false)
          setIsError(false)
          onChangeText(isNaN(value) ? '' :value)
          setFieldValue(isNaN(value) ? '' :value)
          if(value.length !== 0){
            setIsError(false)
          }
        }
      }

  return (
    <View style={{flexDirection:'column',paddingLeft:5,paddingRight:5,width:style?.width}}>
      <View style={{flex:1,flexDirection:'row'}}>
              <TextInput
                  theme={{colors:'primary',...theme}}
                  style={{backgroundColor:'white',flex:1,textAlign:'left',...style}}
                  label={required ? `${label}*` : label}
                  disabled={disabled}
                  multiline={false}
                  mode={mode}
                  keyboardType={'number-pad'}
                  inputMode={'decimal'}
                  maxLength={maxLength}
                  onFocus={onFocus}
                  value={value ? isNaN(value) ? '' : value : fieldValue}
                  outlineStyle={{height:50,...outlineStyle}}
                  onBlur={required ? isRequired : onBlur}
                  placeholder={placeholder}
                  error={error || isError}
                  selectionColor={(error || isError) ? errorColor : selectionColor}
                  underlineColor={(error || isError) ? errorColor : underlineColor}
                  outlineColor={(error || isError) ? errorColor : outlineColor}
                  textColor={(error || isError) ? errorColor : textColor}
                  onChangeText={(value)=> handleChange(value)}
                  {...res}
              />
              {required && isError && <View>
                <Tooltip title='This field is required.'>
                  <Ionicons size={25} style={{color:'red',flex:0,marginTop:20,marginLeft:-40}} name='alert-circle' />
                </Tooltip>
              </View>}
              {(!isError && iconName) &&
              <View>
                <Ionicons size={25} style={{color:iconColor,flex:0,marginTop:20,marginLeft:-40}} name={iconName} />
              </View>
              }
            </View>
            {(error || isInvailid) &&<Text style={{color:errorColor || 'red',marginLeft:5}}>{isInvailid ? 'Enter a valid number' : errorMessage}</Text>}
    </View>
  );
};

export default DecimalTextInput;