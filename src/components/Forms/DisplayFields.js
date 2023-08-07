

import { useState } from 'react';
import { Text, View } from 'react-native';
import CheckBoxInput from '../CheckBox/CheckBoxInput';
import FormField from '../Form/FormField';

const DisplayFields = (props) =>{
    const [nameList,setNameList] = useState([{name:'prefix',value:'Prefix',isSelect:false},{name:'first_name',value:'First Name',isSelect:true},{name:'last_name',value:'Last Name',isSelect:true},{name:'suffix',value:'Suffix',isSelect:false}])

    const handleChange = (value,i,isCheckbox=false) =>{
        let list = [...nameList]
        if(isCheckbox){
            list[i]['isSelect'] = value
        }else{
            list[i]['value'] = value
        }
        setNameList([...list])
        props?.onChange?.(list)
    }
    return(
        <View>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Display Fields</Text>
            {nameList?.map((list,i)=>{
                return(
                    <View style={{flexDirection:'row',marginBottom:10}}>
                        <CheckBoxInput status={list?.isSelect} onPress={(value)=>handleChange(value,i,true)} />
                        <FormField {...{...list,type:'singleText'}} mode='flat' onChange={(value)=>handleChange(value,i)} />
                    </View>
                )
            })}

        </View>
    )
}

export default DisplayFields;