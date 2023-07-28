import { Ionicons } from '@expo/vector-icons';
import { Menu, MenuItem } from '@mui/material';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function WebTableList({headLabel=[],data=[],onPressMenu,onSelectData,onFilterData}) {
      const [clickData, setClickData] = useState([]);
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
  
      const handleClick = (event,props) => {
        setClickData(props?.row)
          setAnchorEl(event?.currentTarget);
      };

      const handleClose = (e,name) => {
          if(name !== 'backdropClick'){
            onPressMenu?.(name,clickData)
          }
          setAnchorEl(null);
      };

      const menuLabel = {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: (props) => {
          return [
            <TouchableOpacity
                  style={{flex:1}}
                  onPress={(e)=>handleClick(e,props)}>
                      <Ionicons size={20} name={'ellipsis-vertical-outline'} color={'blue'} />
              </TouchableOpacity>,
          ];
        },
      }

      const onRowSelectionModelChange = (rowSelectionModel) =>{
        let selectDataList = []
        rowSelectionModel?.map(id=>{
          selectDataList.push(data?.find(ele=> ele?.id === id))
        })
        onSelectData?.(selectDataList)
      }

      const onFilterModelChange = (details) =>{
        const filterValue = details?.api?.store?.value?.visibleRowsLookup
        let filterDataArray=[]
        Object.values(filterValue).filter((ele,i)=>ele && filterDataArray.push(data.find(d=> d?.id === i+1)))
        onFilterData?.(filterDataArray)
      }
      
    return (
      <View style={{marginTop:10, height: 400, width: '100%' }}>
        <DataGridPro
          rows={!isEmpty(data) ? data : []}
          columns={!isEmpty(headLabel) ? [...headLabel,menuLabel] : []}
          editMode='row'
          slots={{ toolbar: GridToolbar }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          onFilterModelChange={async(model,details)=>setTimeout(()=>{
            onFilterModelChange(details)
          },1000)}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          pagination
          onRowSelectionModelChange={(rowSelectionModel,details)=>onRowSelectionModelChange(rowSelectionModel)}
        />
         <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            {[{name:'Edit',icon:'pencil',color:'blue'},{name:'View',icon:'eye',color:'green'},{name:'Delete',icon:'trash',color:'red'}]?.map(ele=>
            <MenuItem onClick={(e)=>handleClose(e,ele)}>
              <View style={{flexDirection:'row',justifyContent:'space-evenly'}}><Ionicons size={20} name={ele?.icon} color={ele?.color} /><Text>{ele?.name}</Text></View>
            </MenuItem>)}
        </Menu>
      </View>
    )
  }