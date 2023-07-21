
import { Backdrop, CircularProgress } from '@mui/material';
import * as React from 'react';
import { Text, View } from 'react-native';

const BackDropMessage = ({text,open=false,onPress,onClose}) => {

    const onDismissBackDropMessage = () => {
        if(onClose){
            onClose()
        }
    }

    React.useEffect(()=>{
        setTimeout(()=>{
            onClose()
        },2000)
    },[open])

  return (
   
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={onDismissBackDropMessage}
    >
    <View style={{flexDirection:'row',backgroundColor:'blur',alignItems:'center'}}>
        <CircularProgress color='secondary' />
        <Text style={{color:'white',fontSize:25,fontWeight:'bold',paddingLeft:30}}>{text}</Text>
    </View>
    </Backdrop>
  );
};

export default BackDropMessage;