import moment from 'moment';
import React, { useCallback, useState } from "react";
import { View } from 'react-native';
import { DatePickerInput, TimePickerModal } from 'react-native-paper-dates';

export default function DateInput({
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
    const [inputDate, setInputDate] = useState(undefined)
    const [visible, setVisible] = useState(false)
    const [time, setTime] = useState('')

    const onDismiss = useCallback(() => {
      setVisible(false)
    }, [setVisible])
  
    const onConfirm = useCallback(
      ({ hours, minutes }) => {
        setVisible(false);
        if((`${hours}`).length === 1){
            hours = `0${hours}`
        }
        if((`${minutes}`).length === 1){
            minutes = `0${minutes}`
        }
        setTime({ hours, minutes })
        const dateTime = moment(`${inputDate} ${hours}:${minutes}`,'DD-MM-YYYY HH:mm').format('DD/MM/YYYY hh:mm:ss a')
        setInputDate(dateTime)
        console.log({ hours, minutes },'<<<<<',(`${hours}`).length);
      },
      [setVisible]
    );

  const handleChange = (d) =>{
    console.log(`<<<ddd<<<<`,moment(d).format('DD/MM/YYYY'))
    const date = moment(d).format('DD-MM-YYYY')
    // const dateTime = moment(d).format('DD-MM-YYYY hh:mm:ss a')
    setInputDate(date)
    setVisible(true)
    // onChange(dateTime)
  }

  return (
    <View>
      <DatePickerInput
        locale="en-GB"
        label={required ? `${label}*` : label}
        withModal={isModal || true}
        value={value || inputDate}
        onChange={(d) => handleChange(d)}
        inputMode="end"
        mode="outlined"
        withDateFormatInLabel={false}
        dataDetectorTypes={'calendarEvent'}
        hasError={error}
        placeholder={placeholder || 'Choose Date'}
        outlineStyle={{height:50,borderEndWidth:10,...outlineStyle}}
        style={{backgroundColor:'white',textAlign:'left',...style}}
        {...res}
      />
      <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={12}
          minutes={14}
      />
    </View>
    
  );
}