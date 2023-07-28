import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Button, Platform, StyleSheet, View } from "react-native";
import AddressInput from "../components/Address/AddressInput";
import LoadingButton from "../components/Button/LoadingButton";
import RadioButtonInput from "../components/Button/RadioButton";
import CheckBoxInput from "../components/CheckBox/CheckBoxInput";
import DateInput from "../components/DateTime/DateInput";
import TimeInput from "../components/DateTime/TimeInput";
import SubForm from "../components/Form/SubForm";
import Graph from "../components/Graph/Graph";
import ImagePicker from "../components/ImageInput/ImagePicker";
import Name from "../components/Name/NameInput";
import TableList from "../components/Reports/TableList";
import DropDownField from "../components/SelectField/DropDownField";
import MultiSelectField from "../components/SelectField/MultiSelectField";
import SingleSelectField from "../components/SelectField/SingleSelectField";
import Sign from "../components/Signature/SignatureInput";
import DecimalTextInput from "../components/TextInputField/DecimalTextInput";
import EmailTextInput from "../components/TextInputField/EmailTextInput";
import MobileTextInput from "../components/TextInputField/MobileTextInput";
import MultiLineText from "../components/TextInputField/MultiLineTextInput";
import NumberTextInput from "../components/TextInputField/NumberTextInput";
import SearchTextInput from "../components/TextInputField/SearchTextInput";
import SingleLineText from "../components/TextInputField/SingleLineTextInput";
import UrlTextInput from "../components/TextInputField/UrlTextInput";

const tableData = [
    { label_one: 'example1', label_two: 'Snow', label_three: 'Jon', label_four: 35 ,uri:'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg'},
    { label_one: 'example', label_two: 'Lannister', label_three: 'Cersei', label_four: 42 ,uri:'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg'},
    { label_one: 'example', label_two: 'Lannister', label_three: 'Jaime', label_four: 45 ,uri:'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg'},
    { label_one: 'example2', label_two: 'Stark', label_three: 'Arya', label_four: 16 ,uri:'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg'},
    { label_one: 'example', label_two: 'Targaryen', label_three: 'Daenerys', label_four: null ,uri:'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg'},
    { label_one: 'example', label_two: 'Melisandre', label_three: 'Daenerys', label_four: 150 ,uri:'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg'},
    { label_one: 'example2', label_two: 'Clifford', label_three: 'Ferrara', label_four: 44 ,uri:'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg'},
    { label_one: 'example', label_two: 'Frances', label_three: 'Rossini', label_four: 36 ,uri:'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg'},
    { label_one: 'example', label_two: 'Roxie', label_three: 'Harvey', label_four: 65 ,uri:'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-image-upload-icon-photo-upload-icon-png-image_2047547.jpg'},
  ];

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

    const graphData = [
        {
            month : 'January',
            value : 200
        },
        {
            month : 'February',
            value : 300
        },
        {
            month : 'March',
            value : 400
        },
        {
            month : 'April',
            value : 500
        },
        {
            month : 'May',
            value : 600
        },
        {
            month : 'June',
            value : 700
        }
    ]

    const buttonHandler = () =>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }
    console.log(Platform.OS,isMobile);

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
            <CheckBoxInput label={'check 1'} />
            <CheckBoxInput  label={'check 2'}/>
            <CheckBoxInput  label={'check 3'}/>
            </View>
            <RadioButtonInput itemData={defaultValues} onValueChange={(value)=>console.log(value)} />
            <LoadingButton isLoading={isLoading} onPress={()=>buttonHandler()} />
            <View style={{paddingBottom:20}}/>
            <ImagePicker isShowImage={true} removeFile={()=>setImageUrl('')} label={'Select Image'} fileType={'image'} setFile={(file)=> setImageUrl(file?.uri)} />
           
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
                <TableList data={tableData} />
            </View>}
            {/* <CircularImage /> */}
            <View style={{paddingTop:10}}>
            <Button title="View Graph/Signature" onPress={()=>setComponentName('graphs')}/>
            {componentName === 'graphs' && <View>
                <Sign />
                <Graph graphData={graphData} yLabelKey={'value'} xLabelKey={'month'} />
            </View>}
            </View>
            <View style={{paddingTop:10}}>
            <Button title="View Name/Address" onPress={()=>setComponentName('name')}/>
            {componentName === 'name' && <View>
                <Name prefixLabel={'Prefix'} suffixNameLabel={'Suffix'} firstNameLabel={'First Name'} lastNameLabel={'Last Name'} middleNameLabel={'Middle Name'} onChange={(value)=>console.log('Name',value)} />
                <AddressInput onChange={(value)=>console.log(value)} />
            </View>}
            </View>
            <View style={{paddingTop:10}}>
            <Button title="View SubForm" onPress={()=>setComponentName('subForm')}/>
            {componentName === 'subForm' && <View>
                <SubForm />
            </View>}
            </View>
            {/* <Map /> */}
            
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