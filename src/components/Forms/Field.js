import { Ionicons } from "@expo/vector-icons";
import { forwardRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { isMobileView } from "../../Constant";






const Field = forwardRef((props,refs) =>{
console.log(`<<<<<<itess Filed<<<`,props)
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>props?.onPress?.()} style={{flexDirection:"row",width:isMobileView ?'70%' : '90%',height:50,alignItems:'center',justifyContent:'flex-start'}}>
                <Ionicons style={{marginLeft:10}} name={props?.item?.icon || "user"} size={25} />
                <Text style={{fontWeight:'bold',marginLeft:10}}>{props?.item?.label}</Text>
            </TouchableOpacity>
            <View style={{marginLeft:10,width:isMobileView ? '20%' : '10%',height:50,borderLeftWidth:1,borderStyle: 'dashed',alignItems:'center',justifyContent:'center'}} >
            <TouchableOpacity onPress={()=>props?.remove?.()}>
                <Ionicons name={'trash'} size={25} color={'red'}/>
            </TouchableOpacity>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        flexDirection:'row',
        borderWidth:1,
        borderStyle: 'dashed',
        height:50,
        width:isMobileView ? '115%' : '100%',
        // backgroundColor:"#f4f6fa",
        alignItems:'center',
        justifyContent:"space-between",
        hover:{
            backgroundColor:'#cadbe0',
        },
    }
});

export default Field;