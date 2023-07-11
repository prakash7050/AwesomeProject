import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TimePickerModal } from 'react-native-paper-dates';

export default function TimeInput({
    errorColor,
    required=false,
    error=false,
    placeholder,
    label='Date',
    isModal,
    value,
    onChange,
    mode,
    outlineStyle,
    style,
    ...res
}) {
    const [visible, setVisible] = useState(false)
    const [time, setTime] = useState('')
    const onDismiss = React.useCallback(() => {
      setVisible(false)
    }, [setVisible])
  
    const onConfirm = React.useCallback(
      ({ hours, minutes }) => {
        setVisible(false);
        if((`${hours}`).length === 1){
            hours = `0${hours}`
        }
        if((`${minutes}`).length === 1){
            minutes = `0${minutes}`
        }
        setTime({ hours, minutes })
        console.log({ hours, minutes },'<<<<<',(`${hours}`).length);
      },
      [setVisible]
    );

    return (
        <TouchableOpacity onPress={()=> setVisible(true)} >
            <View style={{flex:1,flexDirection:'row',borderColor:'black',borderWidth:1,borderRadius:5,borderEndWidth:10}}>
                <Text style={{flex:1,textAlign:'left',minWidth:'50%',margin:20,marginLeft:20}}>Time  {time ? moment(`${time.hours}:${time.minutes}`,'HH:mm').format('hh:mm:ss a') : moment().format('hh:mm:ss a')}</Text>
                <Ionicons size={25} style={{flex:2,textAlign:'right',margin:10,marginRight:10}} color={'#b37982'} name='time' />
            </View>
            <TimePickerModal
                visible={visible}
                onDismiss={onDismiss}
                onConfirm={onConfirm}
                hours={12}
                minutes={14}
            />
      </TouchableOpacity>
    );
  }