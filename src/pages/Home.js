import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import LoadingButton from "../components/Button/LoadingButton";
import RadioButtonInput from "../components/Button/RadioButton";
import CheckBoxInput from "../components/CheckBox/CheckBoxInput";
import DateInput from "../components/DateTime/DateInput";
import TimeInput from "../components/DateTime/TimeInput";
import ImagePicker from "../components/ImageInput/ImagePicker";
import TableList from "../components/Reports/TableList";
import DropDownField from "../components/SelectField/DropDownField";
import MultiSelectField from "../components/SelectField/MultiSelectField";
import SingleSelectField from "../components/SelectField/SingleSelectField";
import DecimalTextInput from "../components/TextInputField/DecimalTextInput";
import EmailTextInput from "../components/TextInputField/EmailTextInput";
import MobileTextInput from "../components/TextInputField/MobileTextInput";
import MultiLineText from "../components/TextInputField/MultiLineTextInput";
import NumberTextInput from "../components/TextInputField/NumberTextInput";
import SearchTextInput from "../components/TextInputField/SearchTextInput";
import SingleLineText from "../components/TextInputField/SinglLineTextInput";
import UrlTextInput from "../components/TextInputField/UrlTextInput";



const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
const Home = () =>{
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [schoolNameError, setSchoolNameError] = useState('')
    const [summary, setSummary] = useState('')
    const [summaryError, setSummaryError] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [componentName, setComponentName] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleChange = (name,value) =>{
        console.log(name,value)
        if(name === 'name'){
            setName(value)
        }else if(name === 'schoolName'){
            if(!name){
                setNameError('fisrt fill name')
            }
            setSchoolName(value)
        }else if(name === 'summary'){
            setSummary(value)
        }
    }
    console.log('<<<<<<<<<<dddd<<<')
    const defaultValues = [
        {
            label:'First Item',
            value: 'first'
        },
        {
            label:'Second Item',
            value: 'Second'
        }
    ]

    const buttonHandler = () =>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }

    return (
        <View style={{margin:'10%',paddingTop:30}} >
            <Button title="View Input Field" onPress={()=>setComponentName('input')}/>
            {componentName === 'input' && 
            <View>
                <SingleLineText placeholder={"single line text input with icon and error"} iconName={'home'} iconColor={'green'} required={true} maxLength={10} onBlur={(e)=>console.log(e)} onChangeText={(value)=>handleChange('name',value)} label='Sngle Line Input' value={name} error={nameError} errorMessage={nameError} />
            <SingleLineText placeholder="single line text"  onChangeText={(value)=>handleChange('schoolName',value)} label='single line text' value={schoolName} error={schoolNameError} errorMessage={schoolNameError} />
            <MultiLineText placeholder="mltipleLine text"  numberOfLines={2} onChangeText={(value)=>handleChange('summary',value)} label='Multi Line' value={summary} error={summaryError} errorMessage={summaryError} />
            <NumberTextInput placeholder="number text field" label='Number' onChangeText={(value)=>console.log(value)} />
            <DecimalTextInput placeholder="enter decimal  number" label='Decimal Number' onChangeText={(value)=>console.log(value)} />
            <EmailTextInput placeholder={"enter email id"} required={true} onBlur={(e)=>console.log(e)} onChangeText={(value)=>console.log(value)} label='Email' value={name} error={nameError} errorMessage={nameError} />
            <MobileTextInput placeholder="enter mobile number"  onChangeText={(value)=>console.log(value)} label='Mobile' error={schoolNameError} errorMessage={schoolNameError} />
            <UrlTextInput placeholder="enetr url link"  onChangeText={(value)=>console.log(value)} label='URL' error={schoolNameError} errorMessage={schoolNameError} />
            <SearchTextInput placeholder="enetr search text"  onChangeText={(value)=>console.log(value)} label='Search' error={schoolNameError} errorMessage={schoolNameError} />
            <MultiSelectField onSelectedItemsChange={(value)=>console.log(value)} />
            <SingleSelectField onSelectedItemsChange={(value)=>console.log(value)} />
            
            <DropDownField style={{flex:1}} label={'Choose Langauge'} itemData={[{label:'Java',value:'java'},{label:'JavaScript',value:'js'}]} onValueChange={(value)=>console.log(value)} />

            <View style={{flexDirection:'row'}}>
            <CheckBoxInput />
            <CheckBoxInput />
            <CheckBoxInput />
            </View>
            <RadioButtonInput itemData={defaultValues} onValueChange={(value)=>console.log(value)} />
            <LoadingButton isLoading={isLoading} onPress={()=>buttonHandler()} />
            <View style={{paddingBottom:20}}/>
            <ImagePicker removeFile={()=>setImageUrl('')} label={'Select Image'} fileType={'image'} setFile={(file)=> setImageUrl(file?.uri)} />
           
            <View style={{paddingBottom:20}}/>
            <ImagePicker label={'Select Audio'} fileType={'audio'} setFile={(file)=>console.log(file)}/>
            <View style={{paddingBottom:20}}/>
            <ImagePicker label={'Choose Video'} fileType={'video'} setFile={(file)=>console.log(file)}/>
            <View style={{paddingBottom:20}}/>
            <ImagePicker label={'Choose File'} fileType={'application/pdf'} setFile={(file)=>console.log(file)}/>
            <View style={{paddingBottom:20}}/>
            <DateInput onChange={date=>console.log(date)} />
            <View style={{paddingBottom:20}}/>
            {/* <DateTimeInput /> */}
            <View style={{paddingBottom:20}}/>
            <TimeInput />
            </View>}
            <View style={{paddingBottom:20}}/>
            <Button title="View Report" onPress={()=>setComponentName('reports')}/>
            {componentName === 'reports' && 
            <View>
                <TableList />
            </View>}
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      backgroundColor: '#0553',
    },
  });