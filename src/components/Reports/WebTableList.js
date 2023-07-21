import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import CheckBoxInput from '../CheckBox/CheckBoxInput';
// import {isEmpty} from 'load'

export default function WebTableList({headLabel,data,isCheckbox=true,isFilter=true}) {
    const [HeadTable, setHeadTable] = useState([])
    const [dataTable, setDataTable] = useState()
      const [searchInput, setSearchInput] = useState([]);


      const getData = () =>{
        const dataArray = [
          [<CheckBoxInput />,'1', '2', '3', '4', '5'],
          [<CheckBoxInput />,'a', 'b', 'c', 'd', 'e'],
          [<CheckBoxInput />,'1', '2', '3', '4', '5'],
          [<CheckBoxInput />,'a', 'b', 'c', 'd', 'e'],
          [<CheckBoxInput />,'1', '2', '3', '4', '5']
        ]
       return dataArray;
      }

      useEffect(()=>{
        const allData = getData();
        console.log(`<<<<`,allData)
        let labelArray = [];
        const datata = ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'];
        let headLabelData = [];
        if(isCheckbox){
          headLabelData = <CheckBoxInput />
        }
        if(isFilter){
        labelArray = allData?.map(label=>{
            return(
              <View>
                <TextInput mode={'flat'} theme={{colors:'primary'}}
                  style={{backgroundColor:'white',flex:1,textAlign:'left'}} onChangeText={(value)=>console.log(value)} error={false} errorMessage={'error'} />
              </View>
            )
          })
          setSearchInput([headLabelData,...labelArray])
          setDataTable([...allData])
        }
        headLabelData =[ headLabelData,...datata]
        setHeadTable(headLabelData)
      },[headLabel,isCheckbox,isFilter])

      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

    return (
      <View style={{marginTop:10, height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </View>
    )
  }