




let initialState = {
    state: {},
};

export default (state = initialState, action) => {
switch (action.type) {
    case 'UPDATE':
        if(action?.id !== null){
            let list = [...state?.form_fields];
            const index = list?.findIndex(ele=> ele?.formId === action?.id)
            list[index]['formData'] = {...list[index]['formData'],...action?.data}
            state.form_fields = [...list]
        }else{
            const fieldData = {formData : action?.data,formId:state?.form_fields ? state?.form_fields.length + 1 : 1}
            action.id = fieldData?.formId
            state.form_fields = state?.form_fields ? [...state?.form_fields,{formData : action?.data,formId:state?.form_fields ? state?.form_fields.length + 1 : 1}] : [{formData : action?.data,formId:state?.form_fields ? state?.form_fields.length + 1 : 1}]
        }
        return state;
    case 'DELETE':
        let list = [...state?.form_fields];
        const index = list?.findIndex(ele=> ele?.formId === action?.id)
        list.splice(index,1)
        state.form_fields = [...list]
        initialState = {...state}
        return {
           ...initialState
        };
    default:
        return state;
}
};