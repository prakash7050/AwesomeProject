import { Ionicons } from '@expo/vector-icons';
import { MenuView } from '@react-native-menu/menu';
import { isEmpty, lowerCase, upperCase } from 'lodash';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { showToast } from '../../Constant';
import CircularImage from '../ImageView/CircularImage';
import SearchTextInput from '../TextInputField/SearchTextInput';

const menuList =
[
    {
      id: 'edit',
      title: 'Edit',
      titleColor: '#2367A2',
      image: Platform.select({
        ios: 'edit',
        android: 'ic_menu_edit',
      }),
      imageColor: '#2367A2',
    },
    {
      id: 'view',
      title: 'View',
      titleColor: '#46F289',
      image: Platform.select({
        ios: 'view',
        android: 'ic_menu_view',
      }),
      imageColor: '#46F289',
      state: 'on',
    },
    {
      id: 'delete',
      title: 'Delete',
      attributes: {
        destructive: true,
      },
      image: Platform.select({
        ios: 'trash',
        android: 'ic_menu_delete',
      }),
    },
  ]


export default function MobileTableList({headLabel,data,onPressMenu,onSelectData,onFilterData}) {
  console.log(`<<<<headdLabell<<<<`,headLabel)
    const [keys, setKeys] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [selectFilter, setSelectFilter] = useState([])
    const [filterData, setFilterData] = useState([])
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
      if(!isEmpty(headLabel)){
        setKeys(headLabel)
      }
      if(isEmpty(filterData) && !isEmpty(data)){
        setFilterData(data)
      }
    },[headLabel])

    const onSelect = (value,i) =>{
      const listArray = [...filterData]
      listArray[i] = {...value,isSelect:!value?.isSelect}
      setFilterData([...listArray])
      filtersArray = listArray?.filter(ele=> ele?.isSelect)
      onSelectData?.(filtersArray)
    }

    const remove = (name) =>{
      const elements = selectFilter?.filter(ele=> ele !== name)
      if(isEmpty(elements)){
        setFilterData(data)
        setSearchInput('')
      }
      setSelectFilter(elements)
    }

    const searchElement = (text) =>{
      setSearchInput(text)
      if(selectFilter.length !== 0){
        const filtersArray = data?.filter(ele=> lowerCase(ele[`${selectFilter[selectFilter.length-1]}`  || '']?.toString()).includes(lowerCase((text  || '')?.toString())))
        setFilterData(filtersArray)
        onFilterData?.(filtersArray)
      }else{
        showToast({type:'error',text1:'Search Key Name',text2:'First Select Search Key Name',position:'top'})
        setFilterData(data)
        onFilterData?.(data)
      }
      
    }

    return (
      <View style={{margin:5,paddingTop:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <SearchTextInput placeholder='search .........' onChangeText={(text)=>searchElement(text)} value={searchInput} outlineStyle={{borderRadius:40}} inputStyle={{color:"black"}}/>
          {!searchInput && <TouchableOpacity  style={{flex:0}} onPress={()=>setVisible(true)}>
            <MenuView
              title='Search'
              onPressAction={({ nativeEvent }) => {
                setSelectFilter([...selectFilter,nativeEvent?.event]);setSearchInput('')
              }}
              actions={keys.map(key=>{let name = selectFilter.filter(ele=> ele === key?.field) ;return {id:key?.field,title:key?.headerName,titleColor:!isEmpty(name) ? 'green' : ''}})}
              shouldOpenOnLongPress={false}
            >
             <Ionicons style={{marginTop:20,marginLeft:-40}} name="menu" color='black' size={25} />
            </MenuView>
          </TouchableOpacity>}
        </View>
        <View style={{flexDirection:'row',width:'100%',margin:5}}>
        {selectFilter?.map(name=>
        <ScrollView horizontal style={{width:'100%'}}>
          <View style={{flexDirection:'row',borderWidth:2,margin:5,alignItems:'center',borderRadius:10,justifyContent:'space-between'}}>
          <Text style={{flex:1,fontWeight:"bold",margin:5}}>{upperCase(name)}</Text>
          <TouchableOpacity onPress={()=>remove(name)}>
            <Ionicons style={{flex:0}} name='ios-close-circle' size={20} color={'red'} />
          </TouchableOpacity>
        </View>
        </ScrollView>
        )}</View>
        {!isEmpty(keys) && !isEmpty(filterData) &&
        <FlatList
          data={filterData}
          renderItem={({ item,index }) => (
            <TouchableOpacity onLongPress={()=>onSelect({...item},index)} style={{backgroundColor:item?.isSelect ? '#d7f7e4' : 'white', flex: 1, flexDirection: 'row',alignSelf:'center',alignItems:"center", margin: 1 ,borderWidth:1,borderRadius:15,margin:5,borderColor:'black',width:'98%'}}>
              <CircularImage style={{flex:0,margin:5}} uri={item?.uri} size={80}/>
              <FlatList
                data={keys}
                style={{flex:1}}
                renderItem={( key= { item }) => (
                  <View style={{ flexDirection: 'row', margin: 1}}>
                    <Text style={{fontWeight:"bold",margin:5}}>{key?.item?.headerName}</Text>
                    <Text style={{margin:5}}>:</Text>
                    <Text style={{margin:5}}>{key?.item?.valueGetter ?  key?.item?.valueGetter({row:{...item}}) : item[`${key?.item?.field}`]}</Text>
                  </View>
                )}
                //Setting the number of column
                numColumns={1}
                keyExtractor={(item, index) => index}
              />
              <View style={{flexDirection:'column'}}>
              <TouchableOpacity style={{flex:0}} onPress={()=>setVisible(true)}>
              <MenuView
                title={''}
                onPressAction={({ nativeEvent }) => {
                  onPressMenu?.(nativeEvent?.event,item)
                }}
                actions={menuList}
                shouldOpenOnLongPress={false}
              >
                <View><Ionicons name="ellipsis-horizontal-outline" color='black' size={25} /></View>
              </MenuView>
              </TouchableOpacity>
              <View style={{flex:1,justifyContent:'center'}}>{item?.isSelect && <Ionicons style={{flex:0}} name='checkmark-circle' size={35} color={'#89f578'} />}</View>
              </View>
              
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={1}
          keyExtractor={(item, index) => index}
        />}
      </View>
    )
  }