import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { isMobileView } from "../../Constant";
import LoadingButton from "../Button/LoadingButton";
import FormField from "./FormField";


let data = [
    {
        type:'dropDown',
        itemData:[{label:'Java',value:'java'},{label:'JavaScript',value:'js'}],
        label:'Choose Language',
        name : 'language',
    },
    {
        type:'singleText',
        label:'Subject',
        name : 'subject'
    },
    {
        type:'email',
        label:'Email',
        name : 'email'
    },
    {
        type:'mobile',
        label:'Mobile Number',
        name : 'mobile_number'
    },
    {
        type:'image',
        label:'Mobile Number',
        name : 'mobile_number'
    },
    {
        type:'mobile',
        label:'Mobile Number',
        name : 'mobile_number'
    },
]


const SubForm = ({fomData=[]}) =>{
    const [subFormData, setSubFormData] = useState([{id:1}])

    const handleChange = (name,value,i) =>{
        if(typeof(value) !== 'object'){
            let list = [...subFormData]
            list[i][`${name}`] = value
            setSubFormData([...list])
            console.log(`<<<<<subFormValue<<<<`,name,':',value,i,typeof(value))
        }
        // let allData = [...subFormData]
    }

    const addMore = () =>{
        let list = [...subFormData]
        list.push({id:list[list?.length-1]['id'] + 1})
        setSubFormData([...list])
    }

    const remove = (i) =>{
        let list = [...subFormData]
        list.splice(i,1)
        setSubFormData([...list])
    }
console.log('<<<<subFormDataaaaaaaaaaaaa<<<<',subFormData)
    return(
        <View style={{paddingTop:10,width:'100%'}}>
            <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold'}}>SubForm</Text>
            {subFormData?.map((ele,i)=>
                {
                    return(
                        <View key={ele?.id} style={{flexDirection:'row'}}>
                            {/* <View style={{flex:1,flexDirection:isMobile ? 'column' : 'row',justifyContent:'space-around'}}>
                                {data?.map((list,index)=>{
                                    return(
                                        <FormField style={{flex:index+1}} key={index} onChange={(value)=>handleChange(list?.name,value,i)} {...list} />
                                    )
                                })}
                            </View> */}
                            <FlatList
                                data={data}
                                style={{flex:1}}
                                nestedScrollEnabled={true}
                                scrollEnabled={false}
                                renderItem={({ item,index }) => {
                                    return(
                                        <FormField style={{flex:index+1,width:isMobileView ? "100%" : "25%"}} key={index} onChange={(value)=>handleChange(item?.name,value,i)} {...item} />
                                    )
                                }}
                                //Setting the number of column
                                numColumns={isMobileView ? 1 : 4}
                                keyExtractor={(item, index) => `key-${index}`}
                            />
                            <TouchableOpacity onPress={()=>remove(i)} style={{flex:0,justifyContent:'flex-end'}}>
                                <Ionicons name="trash" color={'red'} size={25} />
                            </TouchableOpacity>
                        </View>
                    )
                }
            )}
            <View style={{padding:10}}><LoadingButton backgroundColor={'black'} height={30} width={300} onPress={addMore} title={'Add More'} /></View>
        </View>
    )
}

export default SubForm;