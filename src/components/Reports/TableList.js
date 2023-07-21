import { Platform } from "react-native"
import MobileTableList from "./MobileTableList"
import WebTableList from "./WebTableList"


const TableList = ({data}) =>{


    return(
        <>
        {Platform.OS !== 'web' ?
        <MobileTableList data={data} />
        :
        <WebTableList data={data} />}
        </>
    )
}

export default TableList;