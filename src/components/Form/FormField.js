import { forwardRef } from "react";
import CheckBoxInput from "../CheckBox/CheckBoxInput";
import ImagePicker from "../ImageInput/ImagePicker";
import DropDownField from "../SelectField/DropDownField";
import MultiSelectField from "../SelectField/MultiSelectField";
import SingleSelectField from "../SelectField/SingleSelectField";
import DecimalTextInput from "../TextInputField/DecimalTextInput";
import EmailTextInput from "../TextInputField/EmailTextInput";
import MobileTextInput from "../TextInputField/MobileTextInput";
import MultiLineText from "../TextInputField/MultiLineTextInput";
import NumberTextInput from "../TextInputField/NumberTextInput";
import SingleLineText from "../TextInputField/SingleLineTextInput";
import UrlTextInput from "../TextInputField/UrlTextInput";




const FormField = forwardRef((props,ref) =>{

    const handleChange = (value) =>{
        props?.onChange?.(value)
    }
    
    switch(props?.type){
        case 'singleText':
            return <SingleLineText onChangeText={(value)=>handleChange(value)} {...props} />;
        case 'dropDown':
            return <DropDownField onValueChange={(value)=>handleChange(value)} {...props}/>
        case 'email':
            return <EmailTextInput onChangeText={(value)=>handleChange(value)} {...props} />;
        case 'mobile':
            return <MobileTextInput onChangeText={(value)=>handleChange(value)} {...props} />;
        case 'decimal':
            return <DecimalTextInput onChangeText={(value)=>handleChange(value)} {...props} />;
        case 'multiText':
            return <MultiLineText onChangeText={(value)=>handleChange(value)} {...props} />;
        case 'url':
            return <UrlTextInput onChangeText={(value)=>handleChange(value)} {...props} />;
        case 'number':
            return <NumberTextInput onChangeText={(value)=>handleChange(value)} {...props} />;
        case 'multiSelect':
            return <MultiSelectField onSelectedItemsChange={(value)=>handleChange(value)} {...props} />;
        case 'singleSelect':
            return <SingleSelectField onSelectedItemsChange={(value)=>handleChange(value)} {...props} />;
        // case 'name':
        //     return <NameInput onChange={(value)=>handleChange(value)} {...props} />;
        // case 'address':
        //     return <AddressInput onChange={(value)=>handleChange(value)} {...props} />;
        case 'image':
            return <ImagePicker isShowImage={true} fileType={'image'} setFile={(file)=> handleChange(file?.uri)} {...props} />
        case 'video':
            return <ImagePicker fileType={'video'} setFile={(file)=> handleChange(file?.uri)} {...props} />
        case 'documents':
            return <ImagePicker fileType={'application/pdf'} setFile={(file)=> handleChange(file?.uri)} {...props} />
        case 'audio':
            return <ImagePicker fileType={'audio'} setFile={(file)=> handleChange(file?.uri)} {...props} />
        case 'checkbox':
            return <CheckBoxInput {...props} onPress={(value)=>handleChange(value)} />
}
})

export default FormField;