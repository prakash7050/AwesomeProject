import { isEmpty } from "lodash";
import { forwardRef, useEffect, useState } from "react";
import { View } from "react-native";
import FormField from "../Form/FormField";
import Choices from "./Choices";
import DisplayFields from "./DisplayFields";
import Validation from "./Validation";


const InputTypeField = forwardRef((props,ref)=>{
    switch(props?.id){
        case 'text' :
            return <FormField {...props} />
        case 'choices' :
            return <Choices {...props} />
        case 'validation' :
            return <Validation {...props} />
        case 'name' :
            return <DisplayFields {...props} />
    }
})

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
    {
        id: 'validation',
        type:'checkbox',
        label:'Mandatory',
        name : 'validation',
    },
    {
        id: 'name',
        type:'singleText',
        label:'Name',
        name : 'name',
    },
]

const FieldProperties = (props) =>{
    const [fieldArray, setFieldArray] = useState([...fields])

    useEffect(()=>{
        if(!isEmpty(fields)){
            setFieldArray([...fields])
        }
    },[])

    const handleChange = (name,value,i) =>{
        console.log(name,':',value,typeof(value))
        let list = [...fieldArray]
        if(typeof(value) === 'string'){
            list[i]['value'] = value
            console.log(`<<<<ddd<<<<<`)
            if(name === 'field_name'){
                list[i+1]['value'] = value.replace(" ","_")
                console.log(`<<<hhhh<<`,list[i+1])
            }
        }else{
            list[i]['value'] = value
        }
        setFieldArray([...list])
        console.log(name,':',value,list)
    }
    return(
        <View style={{margin:10,backgroundColor:"#f4f6fa"}}>
            {!isEmpty(fieldArray) && fieldArray?.map((field,i)=>{
                return(
                    <View style={{margin:10}}>
                        <InputTypeField {...field} value={field?.value} onChange={(value)=>handleChange(field?.name,value,i)} />
                    </View>
                )
            })}
        </View>
    )
}

export default FieldProperties;