import { Ionicons } from "@expo/vector-icons";
import { isEmpty } from "lodash";
import { React, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { isMobileView } from "../../Constant";
import Field from "./Field";
import FieldProperties from './FieldProperties';
import InputTypeForm from "./InputTypeForm";


const MainForm = () =>{
    const [input, setInput] = useState([{name:'Basic', show: true},{name:'Advance', show: true},{name:'Special', show: true}])
    const [inputName, setInputName] = useState('fields')
    const [selectItems, setSelectItems] = useState([])
    const [item, setItem] = useState({})

    useEffect(()=>{
        setInput([...input])
    },[])

    const handleSelect = (item) =>{
        console.log(item,'<<<<<<<<')
        let list = [...selectItems,item]
        setSelectItems([...list])
        setItem(item)
    }

    const remove = (i) =>{
        let list = [...selectItems]
        list.splice(i,1)
        setSelectItems([...list])
    }

    const handleClick = (item,i) =>{
        setItem(item)
    }
    
    return(
        <View style={{marginTop:50}}>
            {isMobileView && <View style={{flexDirection:'row',width:"100%",backgroundColor:"#f4f6fa",alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity style={{width:'30%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',backgroundColor:inputName === 'fields' ? "#73e6bd" : '#94855d'}} onPress={()=>setInputName('fields')}>
                    <Ionicons name={'add-circle'} size={25} />
                    <Text style={{fontWeight:'bold',fontSize:15}}>Fields</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'35%',height:26,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:inputName === 'page' ? "#73e6bd" :'#b8d66b'}} onPress={()=>setInputName('page')}>
                    {/* <Ionicons name={'add-circle'} size={25} /> */}
                    <Text style={{fontWeight:'bold',fontSize:15}}>Form Fields</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'35%',flexDirection:'row',alignItems:'center',justifyContent:'flex-end',backgroundColor:inputName === 'fieldProperties' ? "#73e6bd" :'#ca87e0'}} onPress={()=>setInputName('fieldProperties')}>
                <Text style={{fontWeight:'bold',fontSize:15,textAlign:'center'}}>Field Properties</Text>
                    <Ionicons name={'add-circle'} size={25} />
                </TouchableOpacity>
            </View>}
            <View style={{flexDirection:'row',width:isMobileView ? '58%' : "100%"}}>
            {(inputName === 'fields' || !isMobileView) &&
                <View style={{width:isMobileView ? '100%' : '20%',flexDirection:"column"}}>
                    <Text style={{fontWeight:"bold",fontSize:18,marginTop:5,textAlign:'center'}}>Fields</Text>
                    <View style={{width:'400%',borderBottomWidth:2,marginTop:5,borderColor:'black'}}></View>
                    <InputTypeForm onChange={(item)=>handleSelect(item)} />
                </View>
            }
            <View style={{width:isMobileView ? inputName === 'page' ? '150%' : '60%' :'50%',alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",fontSize:18,marginTop:5,textAlign:'center'}}>Form Fields</Text>
                    <View style={{width:'400%',borderBottomWidth:2,marginTop:5,borderColor:'black'}}></View>
                    {!isEmpty(selectItems) && <View style={{margin:5,paddingLeft:10,paddingTop:20,flexDirection:'column',width:'100%'}}>
                        {selectItems?.map((item,i)=>{
                            return(
                                <Field key={i} item={item} remove={()=>remove(i)} onPress={()=>handleClick(item,i)} />
                                // <Text>Hello</Text>
                            )
                        })}
                    </View>}
                    
            </View>
            {(inputName === 'fieldProperties' || !isMobileView) &&
               <View style={{width:isMobileView ? '115%' :'30%'}}>
                <Text style={{fontWeight:"bold",fontSize:18,marginTop:5,textAlign:'center'}}>Fields Properties</Text>
                    <View style={{width:'400%',borderBottomWidth:2,marginTop:5,borderColor:'black'}}></View>
                    <FieldProperties />
                </View>
            }
            </View>
        </View>
    )
}


export default MainForm;