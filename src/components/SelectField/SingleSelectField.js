import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
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

let multiSelect;
const SingleSelectField = ({
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
  
  const onSelectedItemChange = selectedItem => {
    onSelectedItemsChange?.(selectedItem)
    setSelectedItems(selectedItem)
  };

    return (
      <View style={{width:'100%',marginTop:isMobileView ? 15 : 0,maxWidth:350,padding:5,marginLeft:isMobileView ? 0 : 10,marginRight:isMobileView ? 0 : 10,...style}}>
      <MultiSelect
        single
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
    );
  }

export default SingleSelectField;