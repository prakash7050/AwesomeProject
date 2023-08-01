import { Ionicons } from "@expo/vector-icons";
import { forwardRef, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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

const MainForm = () =>{
    const [input, setInput] = useState([{name:'Basic', show: true},{name:'Advance', show: true},{name:'Special', show: true}])

    const show = (isShow,i) =>{
        console.log(`<<<isShoow<<<`,isShow,i)
        const list = [...input]
        list[i]['show'] = !isShow
        setInput([...list])
    }

    useEffect(()=>{
        setInput([...input])
    },[])

    return(
        <View style={{margin:10,flexDirection:'row',width:"100%"}}>
            <View style={{width:'100%',flexDirection:"column",backgroundColor:"#f4f6fa"}}>
                {input?.map((type,i)=>{
                    return(
                        <View style={{flex:i+1}}>
                            <TouchableOpacity onPress={()=>show(type?.show,i)} style={{flexDirection: 'row',alignItems:'flex-start',justifyContent:'space-between',margin:10,borderBottomWidth:1}}>
                                <Text style={{fontWeight:'bold',fontSize:15,justifyContent:'flex-start'}}>{type?.name} Fields</Text>
                                <Ionicons name={type?.show ? 'md-remove-circle' : 'add-circle'} size={20} style={{justifyContent:'flex-end'}} />
                            </TouchableOpacity>
                            <View>
                                {type?.show &&
                                    <TypeFiled key={type?.name} type={type?.name} />
                                }
                            </View>
                        </View>
                    )
                })}
            </View>
            {/* <View style={{width:'40%',height:"100%"}}>
            <Text>Hello</Text>
            </View>
            <View style={{width:'30%',backgroundColor:"green",height:"100%"}}>
            <Text>Hello</Text>
            </View> */}
        </View>
    )
}


export default MainForm;