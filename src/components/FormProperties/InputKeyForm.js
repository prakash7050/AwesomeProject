import { React, forwardRef, useState } from 'react';
import { View } from 'react-native';
import FormField from '../Form/FormField';
import Choices from './Choices';

const fields = [
    {
        id: 'text',
        type:'singleText',
        label:'Field Name',
        name : 'field_name',
        defaultValue : 'Field Name'
    },
    {
        id: 'text',
        type:'singleText',
        label:'Field Link Name',
        name : 'field_link_name',
        defaultValue : ('Field Name').replace(" ","_"),
    },
    {
        id: 'choices',
        type:'choices',
        label:'Choices',
        name : 'choices',
    },
]

const InputTypeField = forwardRef((props,ref)=>{
    switch(props?.type){
        case 'text' :
            return <FormField {...props} />
        case 'choices' :
            return <Choices {...props} />
    }
})
const InputKeyForm = (props) =>{
    const [fieldArray, setFieldArray] = useState([])

    // useEffect(()=>{
    //     if(!isEmpty(fields)){
    //         setFieldArray([...fields])
    //     }
    // },[])

    const handleChange = (name,value,i) =>{
        let list = [...fieldArray]
        // if(name === 'field_name'){
        //     list[i]['value'] = value
        //     list[i+1].value = value.replace(" ","_")
        // }else{
        //     list[i].value = value
        // }
        // setFieldArray([...list])
        console.log(name,':',value)
    }
    
    return (
        <View>
            {/* {fields?.map((field,i)=>{
                return(
                    <InputTypeField {...field} />
                )
            })} */}
        </View>
    )
}

export default InputKeyForm;