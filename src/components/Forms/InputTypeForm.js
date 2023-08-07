import { Ionicons } from "@expo/vector-icons";
import { forwardRef, useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import InputType from "./InputType";

const TypeFiled = forwardRef((props,ref) =>{
    switch(props?.type){
        case 'Basic' :
            return <InputType {...props} />
        case 'Advance' :
            return <InputType {...props} />
        case 'Special' :
            return <InputType {...props} />
    }
})

const InputTypeForm = (props) =>{
    const [input, setInput] = useState([{name:'Basic', show: true},{name:'Advance', show: true},{name:'Special', show: true}])

    const show = (isShow,i) =>{
        console.log(`<<<isShoow<<<`,isShow,i)
        const list = [...input]
        list[i]['show'] = !isShow
        setInput([...list])
    }

    const handleSelect = (item,i) =>{
        props?.onChange?.(item)
    }

    return(
        <View style={{flexDirection:"column"}}>
                {input?.map((type,i)=>{
                    return(
                        <View key={type?.name} style={Platform.OS !== 'web' && {flex:i+1}}>
                            <TouchableOpacity key={type?.name} onPress={()=>show(type?.show,i)} style={{flexDirection: 'row',alignItems:'flex-start',justifyContent:'space-between',margin:10,borderBottomWidth:1}}>
                                <Text style={{fontWeight:'bold',fontSize:15,justifyContent:'flex-start'}}>{type?.name} Fields</Text>
                                <Ionicons name={type?.show ? 'md-remove-circle' : 'add-circle'} size={20} style={{justifyContent:'flex-end'}} />
                            </TouchableOpacity>
                            <View style={{backgroundColor:"#f4f6fa",alignItems:"center"}}>
                                {type?.show &&
                                    <TypeFiled onChange={(item)=>handleSelect(item,i)} key={type?.name} type={type?.name} />
                                }
                            </View>
                        </View>
                    )
                })}
            </View>
    )
}


export default InputTypeForm;