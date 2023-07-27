import { isEmpty, upperCase } from "lodash";
import { useEffect, useState } from "react";
import { Platform } from "react-native";
import MobileTableList from "./MobileTableList";
import WebTableList from "./WebTableList";


const TableList = ({data=[],onPressMenu,onSelectData,onFilterData}) =>{
  const [header, setHeader] = useState([])
  const [tableData, setTableData] = useState([])
    const headerList = [
        { field: 'label_one', headerName: 'Label 1', width: 130 },
        { field: 'label_two', headerName: 'Label 2', width: 130 },
        { field: 'label_three', headerName: 'Label 3', width: 130 },
        {
          field: 'label_four',
          headerName: 'Label 4',
          textAlign:'center',
          width: 100,
        },
        {
          field:'label_five',
          headerName: 'Label 5',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          color:'red',
          backgroundColor:'red',
          textAlign:'center',
          valueGetter: (params) =>
            `${params.row.label_three || ''} ${params.row.label_two || ''}`,
        },
      ];
      
      useEffect(()=>{
        if(!isEmpty(data)){
          const dataList = data?.map((ele,i)=>{return {id:i+1,...ele}})
          console.log(`<<<,dataList<<<`,dataList)
          setTableData(dataList)
          const keys = Object.keys(data[0])
          let headerData = []
          keys?.map(key=>{
            headerData.push({
              field: key,
              headerName: upperCase(key),
              textAlign:'center',
            })
          })
          setHeader(headerData)
        }
      },[data])

    return(
        <>
        {Platform.OS !== 'web' ?
        <MobileTableList data={tableData} headLabel={header} onPressMenu={onPressMenu} onSelectData={onSelectData} onFilterData={onFilterData} />
        :
        <WebTableList data={tableData} headLabel={header} onPressMenu={onPressMenu} onSelectData={onSelectData} onFilterData={onFilterData} />}
        </>
    )
}

export default TableList;