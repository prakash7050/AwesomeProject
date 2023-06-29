import { ActivityIndicator, Button } from "react-native";




const LoadingButton = ({isLoading}) =>{
    
    return(
        <Button title={'lll'} ><ActivityIndicator size="small" color="#0000ff" /></Button>
    )
}

export default LoadingButton;