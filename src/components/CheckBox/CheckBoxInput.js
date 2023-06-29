import React, { useState } from 'react';
import { Checkbox } from "react-native-paper";



const CheckBoxInput = () =>{
const [status, setStatus] = useState('unChecked')

    return(
        <Checkbox.Item mode="android" label="name" color="red" status="indeterminate" onPress={e=>console.log(e)}  />
    )
}

export default CheckBoxInput;