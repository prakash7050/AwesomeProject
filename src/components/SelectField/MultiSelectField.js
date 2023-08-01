import React, { useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';

import MultiSelect from 'react-native-multiple-select';
import { isMobileView } from '../../Constant';

const defaultValues = [{
    id: '92iijs7yta',
    name: 'Ondo'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
  }, {
    id: '16hbajsabsd',
    name: 'Calabar'
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos'
  }, {
    id: '667atsas',
    name: 'Maiduguri'
  }, {
    id: 'hsyasajs',
    name: 'Anambra'
  }, {
    id: 'djsjudksjd',
    name: 'Benue'
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
  }, {
    id: 'suudydjsjd',
    name: 'Abuja'
    }
];

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

let multiSelect;
const MultiSelectField = ({
  tagRemoveIconColor,
  hideTags,
  items,
  uniqueKey,
  onSelectedItemsChange,
  selectText,
  searchInputPlaceholderText,
  onChangeInput,
  hideSubmitButton=true,
  altFontFamily,
  tagBorderColor,
  tagTextColor,
  selectedItemIconColor,
  displayKey,
  textColor,
  styleTextDropdownSelected,
  styleSelectorContainer,
  styleTextDropdown,
  styleDropdownMenuSubsection,
  searchInputStyle,
  style,
  value,
}) => {
  const [selectedItems, setSelectedItems] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
  
      const handleClick = (event,props) => {
        // setClickData(props?.row)
          setAnchorEl(event?.currentTarget);
      };

      const handleClose = (e,name) => {
          if(name !== 'backdropClick'){
          }
          setAnchorEl(null);
      };

  const onSelectedItemChange = selectedItem => {
    console.log(selectedItem)
    onSelectedItemsChange?.(selectedItem)
    setSelectedItems(selectedItem)
  };

    return (
      <View style={{width:'100%',marginTop:isMobileView ? 15 : 0,maxWidth:350,padding:5,marginLeft:isMobileView ? 0 : 10,marginRight:isMobileView ? 0 : 10,...style}}>
      <MultiSelect
        hideTags={hideTags || true}
        items={items || defaultValues}
        uniqueKey={uniqueKey || "id"}
        ref={(component) => { multiSelect = component }}
        onSelectedItemsChange={onSelectedItemChange}
        selectedItems={value || selectedItems}
        selectText={selectText || "Pick Items"}
        searchInputPlaceholderText={searchInputPlaceholderText || "Search Items..."}
        onChangeInput={onChangeInput}
        hideSubmitButton={hideSubmitButton || true}
        altFontFamily={altFontFamily || "ProximaNova-Light"}
        tagRemoveIconColor={tagRemoveIconColor}
        tagBorderColor={tagBorderColor}
        tagTextColor={tagTextColor}
        selectedItemIconColor={selectedItemIconColor}
        displayKey={displayKey}
        textColor={textColor}
        // styleMainWrapper={{height:70,borderWidth:5}}
        styleMainWrapper={{minHeight:40,justifyContent:'center',borderRadius:5,borderWidth:1 }}
        styleTextDropdownSelected={{minWidth:150,maxWidth:400,...styleTextDropdownSelected}}
        styleSelectorContainer={{marginLeft:5,maxWidth:350,maxHeight:250,overflow:'scroll',...styleSelectorContainer}}
        styleTextDropdown={{...styleTextDropdown}}
        styleDropdownMenuSubsection={{marginLeft:5,minWidth:200,marginTop:8,...styleDropdownMenuSubsection}}
        searchInputStyle={{height:50,minWidth:150,maxWidth:400,...searchInputStyle}}
      />
      <ScrollView horizontal style={{maxHeight:100,minWidth:150}}>
        {multiSelect?.getSelectedItemsExt(selectedItems)}
      </ScrollView>
    </View>
      
      // <View style={{padding:5,...style}}>
      //   {Platform.OS === 'web' ? 
      //       <Autocomplete
      //         multiple
      //         options={top100Films}
      //         disableCloseOnSelect
      //         getOptionLabel={(option) => option.title}
      //         renderOption={(props, option, { selected }) => (
      //           <li {...props}>
      //             <Checkbox
      //               // icon={icon}
      //               // checkedIcon={checkedIcon}
      //               style={{ marginRight: 8 }}
      //               checked={selected}
      //             />
      //             {option.title}
      //           </li>
      //         )}
      //         renderInput={(params) => (
      //           <ScrollView >
      //             <TextField {...params} sx={{
      //             maxHeight:100,
      //         }} label="Checkboxes" placeholder="Favorites" />
      //           </ScrollView>
      //         )}
      //       />
      //     :
      //     <View style={{borderWidth:1,borderRadius:5,height:50,padding:5,flexDirection:'row',alignItems:'center',justifyContent:"space-evenly",...style}}>
      //       {!isEmpty(selectedItems) ?
      //         <ScrollView horizontal>
      //           {selectedItems?.map((item,i)=>{
      //           return(
      //             <View style={{marginLeft:10,backgroundColor:'#E8E1E1',height:30,borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
      //               <Text style={{marginLeft:10,marginRight:5,fontWeight:'bold'}}>{upperFirst(item)}</Text>
      //               <TouchableOpacity onPress={()=>setSelectedItems([...selectedItems.splice(i,1)])}>
      //               <Ionicons name={'close-circle-outline'} color={'red'} size={20} />
      //               </TouchableOpacity>
      //             </View>
      //           )
      //         })}
      //         </ScrollView>
      //         :
      //         <Text>Select Items</Text>}
      //       <MenuView
      //         title={''}
      //         style={{justifyContent:"flex-end"}}
      //         onPressAction={({ nativeEvent }) => {
      //           setSelectedItems([...selectedItems,nativeEvent?.event])
      //         }}
      //         actions={menuList}
      //         shouldOpenOnLongPress={false}
      //       >
      //         <Ionicons name="caret-down-outline" color='#C1BDBD' size={20} />
      //       </MenuView>
      //     </View>
      //     }
      // </View>
    );
  }

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
  ];

export default MultiSelectField;