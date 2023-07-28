

import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View } from 'react-native';
import { TextInput, Tooltip } from 'react-native-paper';

const SearchTextInput = (
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
      value = '',
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
      const [inputValue, setInputValue] = React.useState(value)

      React.useEffect(()=>{
        setInputValue(value)
      },[value])

      const isRequired = () =>{
        if(!value && required && !error && !errorMessage){
          setIsError(true)
        }else{
          onBlur()
        }
      }

      const handleChange = (value) =>{
        setInputValue(value)
        onChangeText?.(value)
        if(value.length !== 0){
          setIsError(false)
        }
      }

      const clear = () =>{
        setInputValue('')
        onChangeText?.('')
      }

  return (
    <View style={{margin:5,width:'100%',minHeight:70,flexDirection:'column',width:style?.width}}>
      <View style={{flex:1,flexDirection:'row'}}>
              <TextInput
                  theme={{colors:'primary',...theme}}
                  style={{backgroundColor:'white',flex:1,textAlign:'left',...style}}
                  label={required ? `${label}*` : label}
                  disabled={disabled}
                  multiline={false}
                  outlineStyle={{height:50,...outlineStyle}}
                  inputMode={'search'}
                  mode={mode}
                  maxLength={maxLength}
                  onFocus={onFocus}
                  value={inputValue}
                  left={<TextInput.Icon color={'#b37982'} size={30} icon={'magnify'} />}
                  right={!isError && inputValue && <TextInput.Icon onPress={clear} color={'red'} size={30} icon={'close'} />}
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
              
            </View>
        {error &&<Text style={{color:errorColor || 'red',marginLeft:5}}>{errorMessage}</Text>}
    </View>
  );
};

export default SearchTextInput;