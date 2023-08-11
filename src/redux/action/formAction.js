

const getField = (id) =>{
    return {
        type: "GET",
        id: id,
    }
}

const getAllField = () =>{
    return {
        type: "GETALL",
    }
}

const deleteField = (id) =>{
    return {
        type: "DELETE",
        id: id,
    }
}

const updateField = (id=null,data=[]) =>{
    return {
        type: "UPDATE",
        id: id,
        data:data,
    }
}

export {
    deleteField, getAllField, getField, updateField
}

