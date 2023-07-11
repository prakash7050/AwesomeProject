import React, { useState } from 'react';
import { View } from 'react-native';
import { Row, Rows, Table } from 'react-native-table-component';
import CheckBoxInput from '../CheckBox/CheckBoxInput';

export default function TableList() {
    const [HeadTable, setHeadTable] = useState([<CheckBoxInput />,'Head1', 'Head2', 'Head3', 'Head4', 'Head5'])
    const [dataTable, setDataTable] = useState([
        [<CheckBoxInput />,'1', '2', '3', '4', '5'],
        [<CheckBoxInput />,'a', 'b', 'c', 'd', 'e'],
        [<CheckBoxInput />,'1', '2', '3', '4', '5'],
        [<CheckBoxInput />,'a', 'b', 'c', 'd', 'e'],
        [<CheckBoxInput />,'1', '2', '3', '4', '5']
      ])
    return (
      <View style={{marginTop:10,maxWidth:'100%'}}>
        <Table borderStyle={{borderWidth:1}}>
          <Row textStyle={{paddingLeft:10}} data={HeadTable} />
          <Rows textStyle={{paddingLeft:10}} data={dataTable} />
        </Table>
      </View>
    )
  }