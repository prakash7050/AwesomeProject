import MainForm from "../../components/FormProperties/MainForm";

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from "../../redux/action/formAction";

const CreateForm = ({formId=null}) =>{
    const dispatch = useDispatch();
    const [id,setId] = useState(formId)
    const formFields = useSelector((store) => store?.state?.form_fields);

    const onSave = (value) =>{
        const result = dispatch(updateField(id,value))
        setId(result?.id)
    }
    
    return(
        <MainForm onPress={(value)=>onSave(value)} />
    )
}

export default CreateForm;