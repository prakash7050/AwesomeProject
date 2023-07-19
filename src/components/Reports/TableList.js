import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Row, Rows, Table } from 'react-native-table-component';
import CheckBoxInput from '../CheckBox/CheckBoxInput';
// import {isEmpty} from 'load'

export default function TableList({headLabel,data,isCheckbox=true,isFilter=true}) {
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
          headLabelData = <CheckBoxInput sty />
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
          setDataTable([[ <Ionicons size={25} style={{color:'#b37982',textAlign:'center'}} name={'search'} />,...labelArray],...allData])
        }
        headLabelData =[ headLabelData,...datata]
        setHeadTable(headLabelData)
      },[headLabel,isCheckbox,isFilter])

    return (
      <View style={{marginTop:10,maxWidth:'100%'}}>
        <Table borderStyle={{borderWidth:1}}>
          <Row textStyle={{textAlign:'center'}} data={HeadTable} />
          {/* {!isEmpty(searchInput) && } */}
          <Rows textStyle={{textAlign:'center'}} data={dataTable} />
        </Table>
      </View>
    )
  }