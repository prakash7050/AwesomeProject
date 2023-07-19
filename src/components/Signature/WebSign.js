import { useRef, useState } from "react";
import { Text, View } from "react-native";
import ReactSignatureCanvas from "react-signature-canvas";
import LoadingButton from "../Button/LoadingButton";





const WebSign = ()=>{
    let sigPad = useRef(null);
    const [isLoading, setIsLoading] = useState(false)
    const [trimData, setTrimData] = useState({})

    const clear = () =>{
        setIsLoading(true)
        sigPad.clear()
        setIsLoading(false)
    }

    const setImage = () =>{
        console.log(`<<<trimData<<<<`,sigPad.getTrimmedCanvas().toDataURL('image/png'));
        setTrimData(sigPad.getTrimmedCanvas().toDataURL('image/png'))
    }
console.log(`hhfh`)
    return(
        <View style={{borderWidth:1,borderColor:'black',borderRadius:10,width:'100%'}}>
            <Text style={{height:10,margin:5}}>Signature</Text>
            <ReactSignatureCanvas ref={(ref) => { sigPad = ref }} onBegin={(v)=>console.log(v)} onEnd={(value)=>console.log(value)} penColor='black' canvasProps={{height:130,className: 'sigCanvas'}}/>
            <View style={{flexDirection:'row',marginTop:-20,justifyContent:'center'}}>
                <View style={{paddingRight:10}}>
                    <LoadingButton backgroundColor={'red'} width={100} height={25} isLoading={isLoading} onPress={clear} title={'Clear'} />
                </View>
                <View>
                    <LoadingButton backgroundColor={'green'} width={100} height={25} isLoading={isLoading} onPress={setImage} title={'Submit'} />
                </View>
            </View>
            {/* {trimData &&  <img src={trimData} alt="" />} */}
        </View>
    )
}

export default WebSign;