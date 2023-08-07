import { Ionicons } from "@expo/vector-icons";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { isMobileView } from "../../Constant";
import AddressInput from "../Address/AddressInput";
import LoadingButton from "../Button/LoadingButton";
import NameInput from "../Name/NameInput";
import FormField from "./FormField";

let data = [
    {
        type:'dropDown',
        itemData:[{label:'Java',value:'java'},{label:'JavaScript',value:'js'}],
        label:'Choose Language',
        name : 'language',
    },
    {
        type:'multiSelect',
        items: [{
            id: '92iijs7yta',
            name: 'Ondo'
          }, {
            id: 'a0s0a8ssbsd',
            name: 'Ogun'
          }, {
            id: '16hbajsabsd',
            name: 'Calabar'
          }, {
            id: 'nahs75a5sg',
            name: 'Lagos'
          }, {
            id: '667atsas',
            name: 'Maiduguri'
          }, {
            id: 'hsyasajs',
            name: 'Anambra'
          }, {
            id: 'djsjudksjd',
            name: 'Benue'
          }, {
            id: 'sdhyaysdj',
            name: 'Kaduna'
          }, {
            id: 'suudydjsjd',
            name: 'Abuja'
            }
        ],
        label:"Multi Select",
        name : 'multi_select',
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
        type:'number',
        label:'Number',
        name : 'number'
    },
    {
        type:'decimal',
        label:'Decimal',
        name : 'decimal'
    },
    {
        type:'url',
        label:'Url',
        name : 'url'
    },
    {
        type:'singleSelect',
        itemData: [{
            id: '92iijs7yta',
            name: 'Ondo'
          }, {
            id: 'a0s0a8ssbsd',
            name: 'Ogun'
          }, {
            id: '16hbajsabsd',
            name: 'Calabar'
          }, {
            id: 'nahs75a5sg',
            name: 'Lagos'
          }, {
            id: '667atsas',
            name: 'Maiduguri'
          }, {
            id: 'hsyasajs',
            name: 'Anambra'
          }, {
            id: 'djsjudksjd',
            name: 'Benue'
          }, {
            id: 'sdhyaysdj',
            name: 'Kaduna'
          }, {
            id: 'suudydjsjd',
            name: 'Abuja'
            }
        ],
        label:'Single Select',
        name : 'single_select',
    },
    {
        type:'multiText',
        label:'Multi Line',
        name : 'multi_text'
    },
    {
        type:'image',
        label:'Select Image',
        name : 'image'
    },
    {
        type:'video',
        label:'Select Video',
        name : 'video'
    },
    {
        type:'audio',
        label:'Select Audio',
        name : 'audio'
    },
    {
        type:'documents',
        label:'Select Documents',
        name : 'documents'
    },
    {
        type:'name',
        label:'Name',
        name : 'name'
    },
    {
        type:'address',
        label:'Address',
        name : 'address'
    },
    // {
    //     type:'address',
    //     label:'Address',
    //     name : 'address'
    // },
]


const SubForm = ({fomData=[]}) =>{
    const [subFormData, setSubFormData] = useState([{id:1}])
    const [name, setName] = useState({})
    const [address, setAddress] = useState({})


    useEffect(()=>{
        if(!isEmpty(data)){
            const nameData = [...data]?.filter((ele,i)=> {if(ele?.type === 'name'){
                setName({id:i, value:{...ele}})
            }else if(ele?.type === 'address'){
                setAddress({id:i, value:{...ele}})
            }
        })
        }
    },[])

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
            <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',margin:10}}>SubForm</Text>
            {subFormData?.map((ele,i)=>
                {
                    return(
                        <View key={ele?.id} style={{flexDirection:'row',width:'100%'}}>
                            <View style={{flexDirection:'column',width:'100%'}}>
                            <FlatList
                                data={data}
                                style={{flex:1}}
                                nestedScrollEnabled={true}
                                scrollEnabled={false}
                                renderItem={({ item,index }) => {
                                    return(
                                        <FormField style={{flex:index+1,width:isMobileView ? '100%' : '30%',padding:2,minHeight:70}} key={index} onChange={(value)=>handleChange(item?.name,value,i)} {...item} />
                                        )
                                }}
                                //Setting the number of column
                                numColumns={isMobileView ? 1 : 3}
                                keyExtractor={(item, index) => `key-${index}`}
                            />
                            
                            {!isEmpty(name) &&
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center',margin:10}}>
                                    <View style={{paddingRight:5}}>
                                        <Text style={{ textAlign: 'center',fontWeight:'bold'}}>Name</Text>
                                    </View>
                                    <View style={{flex: 1, height: 2, backgroundColor: 'green'}} />
                                    
                                    <View style={{flex: 1, height: 2, backgroundColor: 'green'}} />
                                </View>
                                <NameInput key={i} onChange={(value)=>handleChange('name',value,i)} {...name?.value}/>
                            </View>
                            
                            }
                            {!isEmpty(address) &&
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center',margin:10}}>
                                    <View style={{paddingRight:5}}>
                                        <Text style={{ textAlign: 'center',fontWeight:'bold'}}>Address</Text>
                                    </View>
                                    <View style={{flex: 1, height: 2, backgroundColor: 'green'}} />
                                    
                                    <View style={{flex: 1, height: 2, backgroundColor: 'green'}} />
                                </View>
                                <AddressInput key={i} onChange={(value)=>handleChange('name',value,i)} {...address?.value}/>
                            </View>
                            
                            }
                            </View>
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