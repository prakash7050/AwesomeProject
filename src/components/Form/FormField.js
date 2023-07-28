import { forwardRef } from "react";
import DropDownField from "../SelectField/DropDownField";
import EmailTextInput from "../TextInputField/EmailTextInput";
import MobileTextInput from "../TextInputField/MobileTextInput";
import SingleLineText from "../TextInputField/SingleLineTextInput";




const FormField = forwardRef((props,ref) =>{

    const handleChange = (value) =>{
        console.log(`<<<<formfield<<<`,value)
        props?.onChange?.(value)
    }
    console.log(`<<<<<<form<<<`,props)
    switch(props?.type){
        case 'singleText':
            return <SingleLineText onChangeText={(value)=>handleChange(value)} {...props} />;
        case 'dropDown':
            return <DropDownField onValueChange={(value)=>handleChange(value)} {...props}/>
        case 'email':
            return <EmailTextInput onChangeText={(value)=>handleChange(value)} {...props} />;
        case 'mobile':
            return <MobileTextInput onChangeText={(value)=>handleChange(value)} {...props} />;
        // case 'Pie Chart':
        //     return <MyPieChart data={props?.data} props={props?.props}/>
        // case 'Progress Chart':
        //     return <MyProgressChart data={props?.data} props={props?.props}/>
        // case 'Stacked Bar Chart':
        //     return <MyStackedBarChart data={props?.data} props={props?.props}/>
    }
})

export default FormField;