import { Ionicons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { isMobileView } from "../../Constant"
import CheckBoxInput from "../CheckBox/CheckBoxInput"
import MenuViewList from "../Menu/MenuViewList"


const menuList = [
    {title:'Import predefined choices',id:'Import predefined choices',titleColor:'#787373'},
    {title:'Copy choices to clipboard',id:'Copy choices to clipboard',titleColor:'#787373'},
]

const Choices = (props) =>{
    const [items, setItems] = useState([{id : 1, name : 'Choice 1', isCheck : false,isEdit:false}, {id : 2, name : 'Choice 2', isCheck : false,isEdit:false}, {id : 3, name : 'Choice 3', isCheck : false,isEdit:false}])
    const [isOrder, setIsOrder] = useState(false)
    const [viewName,setViewName] = useState('')

    useEffect(()=>{
        onSave()
    },[])

    const check = (value,i) =>{
        let list = [...items]
        list[i]['isCheck'] = value
        setItems([...list])
        const listValue = list?.filter(ele=> ele?.isCheck)
        props?.onChange?.(listValue)
        onSave()
    }

    const onSave = () =>{
        let list = [...items]
        const listValue = list?.filter(ele=> ele?.isCheck)
        props?.onChange?.(listValue)
    }

    const inputChange = (value,i) =>{
        console.log(`<<<<value<<<`,value,i)
        let list = [...items]
        setViewName({name:value,index:i})
        if(value === 'add'){
            list.splice(i+1, 0, {id : i+2, name : '', isCheck : false});
        }else if(value === 'remove-outline'){
            if(list?.length !== 1){
                list.splice(i,1)
            }else{
            console.log('')
            }
        }else if(value === 'pencil'){
            console.log('value :', value)
            list = [...list].map((ele,index)=>{
                console.log(`<<<<<`,i,value,index === i)
                if(index === i){
                    return {...ele,isEdit:true}
                }else{
                    return {...ele,isEdit:false}
                }
            })
        }
        console.log(`<<<<<<`,list)
        setItems([...list])
        onSave()
    }
    
    const handleChange = (text,i) =>{
        let list = [...items]
        list[i]['name'] = text
        setItems([...list])
        onSave()
    }

    const orderChange = (value) =>{
        setIsOrder(!isOrder)
        if(!isOrder){
            let list = [...items]
            list.sort((a,b)=>(a?.name > b?.name ? 1 : -1))
            console.log(`<<<list<<<`,list)
            setItems([...list])
        }
        onSave()
    }
    const addOther = (value) =>{
        console.log('value',value)
        if(value){
            setItems([...items,{name:'Other',isCheck:true}])
        }else{
            let list = [...items]
            list.pop()
            setItems([...list])
        }
        onSave()
    }
    
    return(
        <View style={{margin:5}}>
            <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
                <Text style={{justifyContent:'flex-start',fontWeight:'500',fontSize:18}}>{props?.label || 'Choices'}</Text>
                <MenuViewList style={{justifyContent:'flex-end'}} menuList={menuList} label={'Advanced'} labelStyle={{color:'blue',fontWeight:'500',fontSize:18}} color={'blue'} icon={'chevron-down-outline'} />
            </View>
            <View style={{borderWidth:0.5,borderRadius:5,borderColor:'blue',flexDirection:'row',marginTop:10}}>
                <Ionicons style={{flex:0,margin:5}} name={'alert-circle'} color={'black'} />
                <Text style={{fontColor:'black',flex:1,margin:5}}>Renaming the choices will update the values in the existing records, if any.</Text>
            </View>
            {items?.map((item,i) =>{ 
            return (
            <View>
                {item?.id && 
                <View style={{width:"100%",borderWidth:0.5,borderRadius:5,borderColor:'#bfbfbf',flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'space-between'}}>
                <CheckBoxInput style={{width:'10%'}} status={item?.isCheck} onPress={(value)=>check(value,i)} />
                {item?.isEdit ? 
                    <TextInput style={{height:50,borderWidth:0,width:isMobileView ? '50%' : '80%',justifyContent:'center'}} placeholder="Type New Choice" value={item?.name} onChangeText={(text)=>handleChange(text,i)} /> 
                    :
                    <View style={{height:50,borderWidth:0,width:isMobileView ? '50%' : '50%',justifyContent:'center'}}>
                        <Text style={{fontWeight:'400',fontSize:18}}>{item?.name}</Text>
                    </View>}
                <View style={{flexDirection:'row',justifyContent:'flex-end',width:'20%'}}>
                {['add','remove-outline','pencil']?.map(ele=>{
                    return(
                        <TouchableOpacity onPress={()=> inputChange(ele,i)}>
                            <Ionicons name={ele} color={'#2367A2'} size={25} />
                        </TouchableOpacity>
                    )
                })}
                </View>
            </View>}
            </View>
            )})    
        }
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <CheckBoxInput status={isOrder} onPress={(value)=>orderChange(value)} />
            <Text style={{fontWeight:'500'}}>Alphabetical Order</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <CheckBoxInput status={items[items.length-1]['name'] === 'Other' ? true : false} onPress={(value)=>addOther(value)} />
            <Text style={{fontWeight:'500'}}>Allow Other Choice</Text>
        </View>
        </View>
    )
}

export default Choices;