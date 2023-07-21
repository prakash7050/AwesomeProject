import { isEmpty } from "lodash";
import { useRef, useState } from "react";
import { Text, View } from "react-native";
import ReactSignatureCanvas from "react-signature-canvas";
import LoadingButton from "../Button/LoadingButton";
import BackDropMessage from "../MessageAlert/BackDropalert";





const WebSign = ()=>{
    let sigPad = useRef(null);
    const [isLoading, setIsLoading] = useState(false)
    const [trimData, setTrimData] = useState({})
    const [open,setOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    const clear = () =>{
        setTrimData({})
        setOpen(false)
        if(sigPad.clear){
            sigPad?.clear()
        }
        setIsLoading(false)
    }

    const setImage = () =>{
        setTrimData(sigPad.getTrimmedCanvas().toDataURL('image/png'))
        setOpen(true)
    }

    const download = e => {
        fetch(`${trimData}`, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "signature.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
              setVisible(true)
            });
          })
          .catch(err => {
            console.log(err);
          });
      };

    return(
        <>
        <View style={{borderWidth:1,borderColor:'black',borderRadius:10,width:'100%'}}>
            <Text style={{height:10,margin:10,marginTop:0,fontWeight:'bold'}}>{open ? 'Signature Image' : 'Signature Pad'}</Text>
            {(!isEmpty(trimData) && open) ?  <View style={{justifyContent:'center',height:130,borderColor:'black',borderWidth:30}}><img src={trimData} alt="" /></View>
            :
            <ReactSignatureCanvas backgroundColor="white" ref={(ref) => { sigPad = ref }} onBegin={(v)=>console.log(v)} onEnd={(value)=>console.log(value)} penColor='black' canvasProps={{height:130,className: 'sigCanvas'}}/>
            }
            <View style={{flexDirection:'row',marginTop:-20,justifyContent:'center'}}>
                <View style={{paddingRight:10}}>
                    <LoadingButton backgroundColor={'red'} width={100} height={25} isLoading={isLoading} onPress={clear} title={'Clear'} />
                </View>
                <View>
                    <LoadingButton backgroundColor={'green'} width={100} height={25} isLoading={isLoading} onPress={open ? download : setImage} title={open ? 'Download' : 'Save'} />
                </View>
            </View>
           
        </View>
        <BackDropMessage open={visible} onPress={()=>console.log('hhh')} onClose={()=>setVisible(false)} text={'Download Successful'} />
        {/* <Modal visible={open} onDismiss={()=>setOpen(false)} contentContainerStyle={{backgroundColor: 'white', padding: 20,width:100,justifyContent:'center'}}>
          {trimData &&  <img src={trimData} alt="" />}
        </Modal> */}
        </>
    )
}

export default WebSign;