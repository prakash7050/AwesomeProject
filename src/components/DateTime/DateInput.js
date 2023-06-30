import React from "react";
import { DatePickerInput } from 'react-native-paper-dates';

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
  const [inputDate, setInputDate] = React.useState(undefined)

  const handleChange = (d) =>{
    console.log(`<<<ddd<<<<`)
    setInputDate(d)
    onChange(d)
  }

  return (
    <DatePickerInput
        locale="en-GB"
        label={required ? `${label}*` : label}
        withModal={isModal || false}
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
  );
}