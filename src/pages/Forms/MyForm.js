import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import CreateForm from "./CreateForm";
import ViewForm from "./ViewForm";




const MyForm = ({formId=null}) =>{
    const [id,setId] = useState(formId)
    const [isEdit, setIsEdit] = useState(true)
    const formFields = useSelector((store) => store?.state?.form_fields);

    useEffect(()=>{
        if(!isEmpty(formFields)){
            setId(formFields[0]["formId"])
        }
    },[])

    const handlePress = () =>{
        setIsEdit(!isEdit)
    }

    return(
        <View style={{width:'100%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderWidth:1,height:50,backgroundColor:'#D96C6C'}}>
                <Text style={{justifyContent:'flex-start',marginLeft:10,fontWeight:'bold',fontSize:15,color:'white'}}>{'Form Name'}</Text>
                <TouchableOpacity style={{flex:'flex-end',width:100,height:50,backgroundColor:'#0D1A30',alignItems:'center',justifyContent:'center'}} onPress={handlePress}>
                    <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>{isEdit ? "Display" : "Edit"}</Text>
                </TouchableOpacity>
            </View>
            {isEdit ? <CreateForm formId={id} /> : <ViewForm formId={id} />}
        </View>
    )
}

export default MyForm;