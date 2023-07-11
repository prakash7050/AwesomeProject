


import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const MultiLineText = (
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
        isRightIcon=false,
        isLeftIcon=false,
        leftIconName,
        rightIconName,
        errorMessage,
        errorColor,
        numberOfLines,
        maxLength,
        required=false,
        onBlur,
        iconName,
        iconColor,
        theme,
        outlineStyle,
        ...res
    }) => {
      const [isError, setIsError] = React.useState(false)
      
      const isRequired = () =>{
        if(!value && required && !error && !errorMessage){
          setIsError(true)
        }else{
          onBlur()
        }
      }

      const handleChange = (value) =>{
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
            multiline={true}
            outlineStyle={{minHeight:50,borderEndWidth:10,...outlineStyle}}
            numberOfLines={numberOfLines}
            mode={mode}
            inputMode={'email'}
            maxLength={maxLength}
            onFocus={onFocus}
            value={value}
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
              {(!isError && iconName) &&
              <View>
                <Ionicons size={25} style={{color:iconColor,flex:0,marginTop:20,marginLeft:-40}} name={iconName} />
              </View>
              }
            </View>
        {error &&<Text style={{color:errorColor || 'red',marginLeft:5}}>{errorMessage}</Text>}
  </View>
  );
};

export default MultiLineText;