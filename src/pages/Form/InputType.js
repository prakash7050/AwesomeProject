import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { isMobileView } from "../../Constant";



const basicFields = [
    {
        type:'name',
        label:'Name',
        name : 'name',
        icon : 'person-outline'
    },
    {
        type:'email',
        label:'Email',
        name : 'email',
        icon : "mail-outline"
    },
    {
        type:'address',
        label:'Address',
        name : 'address',
        icon : 'home-outline'
    },
    {
        type:'mobile',
        label:'Phone',
        name : 'mobile',
        icon : 'call-outline'
    },
    {
        type:'singleText',
        label:'Single Line',
        name : 'single_line',
        icon : 'browsers-outline'
    },
    {
        type:'multiText',
        label:'Multi Line',
        name : 'multi_text',
        icon : 'albums-outline'
    },
    {
        type:'number',
        label:'Number',
        name : 'number',
        icon : 'cash'
    },
    {
        type:'date',
        label:'Date',
        name : 'date',
        icon : 'calendar-outline'
    },
    {
        type:'time',
        label:'Time',
        name : 'time',
        icon : 'time-outline'
    },
    {
        type:'dropDown',
        label:'Drop Down',
        name : 'drop_down',
        icon : 'caret-down-outline'
    },
    {
        type:'radio',
        label:'Radio',
        name : 'radio',
        icon : 'radio-button-on-outline'
    },
    
    {
        type:'multiSelect',
        label:"Multi Select",
        name : 'multi_select',
        icon : 'checkmark-done-outline'
    },
    {
        type:'checkbox',
        label:'Check box',
        name : 'checkbox',
        icon : 'checkbox-outline'
    },
    
]

const advancedFields = [
    {
        type:'checkbox',
        label:'Decision box',
        name : 'decision_box',
        icon : 'checkbox-outline'
    },
    {
        type:'richText',
        label:'Rich Text',
        name : 'rich_text',
        icon : 'receipt-outline'
    },
    {
        type:'url',
        label:'Url',
        name : 'url',
        icon : 'link'
    },
    {
        type:'image',
        label:'Image',
        name : 'image',
        icon : 'image'
    },
    {
        type:'decimal',
        label:'Percent',
        name : 'percent',
        icon : 'text'
    },
    {
        type:'decimal',
        label:'Currency',
        name : 'currency',
        icon : 'logo-bitcoin'
    },
    {
        type:'decimal',
        label:'Decimal',
        name : 'decimal',
        icon : 'text'
    },
]

{/*
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
    
*/}

const InputType = (props) =>{

    return(
        <View key={props?.key} style={{width:'100%',backgroundColor:"#f4f6fa",alignItems:'center',justifyContent:'center',height:'100%'}}>
            <FlatList
                data={props?.type === 'Basic' ? basicFields : advancedFields}
                style={{flex:1}}
                nestedScrollEnabled={true}
                scrollEnabled={false}
                renderItem={({ item,index }) => {
                    return(
                        <TouchableOpacity style={{flexDirection:"column",width:150,height:100,backgroundColor:'white',alignItems:'center',justifyContent:'center',margin:10}}>
                            <Ionicons name={item?.icon || "user"} size={35} />
                            <Text style={{fontWeight:'bold'}}>{item?.label}</Text>
                        </TouchableOpacity>
                        )
                }}
                //Setting the number of column
                numColumns={isMobileView ? 2 : 2}
                keyExtractor={(item, index) => `key-${index}`}
            />
            </View>
    )
}


export default InputType;