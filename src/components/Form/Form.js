import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { isMobileView } from "../../Constant";
import AddressInput from "../Address/AddressInput";
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


const Form = ({fomData=[]}) =>{
    const [subFormData, setSubFormData] = useState({})
    const [name, setName] = useState({})
    const [address, setAddress] = useState({})


    useEffect(()=>{
        if(!isEmpty(fomData)){
            const nameData = [...fomData]?.filter((ele,i)=> {if(ele?.type === 'name'){
                setName({id:i, value:{...ele}})
            }else if(ele?.type === 'address'){
                setAddress({id:i, value:{...ele}})
            }
        })
        }
    },[fomData])

    const handleChange = (name,value) =>{
        if(typeof(value) !== 'object'){
            let list = {...subFormData}
            list[`${name}`] = value
            setSubFormData({...list})
        }
        // let allData = [...subFormData]
    }

    return(
        <View style={{flexDirection:'column',width:'100%'}}>
            <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',margin:10}}>Form</Text>
            {!isEmpty(fomData) && <FlatList
                data={fomData}
                style={{flex:1}}
                nestedScrollEnabled={true}
                scrollEnabled={false}
                renderItem={({ item,index }) => {
                    return(
                        <FormField style={{flex:index+1,width:isMobileView ? '100%' : '30%',padding:2,minHeight:70}} key={index} onChange={(value)=>handleChange(item?.name,value)} {...item} />
                        )
                }}
                //Setting the number of column
                numColumns={isMobileView ? 1 : 3}
                keyExtractor={(item, index) => `key-${index}`}
            />}
            
            {!isEmpty(name) &&
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center',margin:10}}>
                    <View style={{paddingRight:5}}>
                        <Text style={{ textAlign: 'center',fontWeight:'bold'}}>Name</Text>
                    </View>
                    <View style={{flex: 1, height: 2, backgroundColor: 'green'}} />
                    
                    <View style={{flex: 1, height: 2, backgroundColor: 'green'}} />
                </View>
                <NameInput onChange={(value)=>handleChange('name',value)} {...name?.value}/>
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
                <AddressInput onChange={(value)=>handleChange('name',value)} {...address?.value}/>
            </View>
            
            }
        </View>
    )
}

export default Form;