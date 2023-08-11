import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "../../components/Form/Form";




const ViewForm = ({formId=null}) =>{
    const formFields = useSelector((store) => store?.state?.form_fields);
    const [formData, setFormData] = useState([])

    useEffect(()=>{
        if(!isEmpty(formFields)){
            let list = []
            for(let form of formFields[0]['formData']){
                list.push(
                    {
                        type: form?.type,
                        label:form?.value?.field_name,
                        name: form?.value?.field_link_name
                    }
                )
            }
            setFormData([...list])
        }
    },[])

    return(
        <Form fomData={formData} />
    )
}

export default ViewForm;