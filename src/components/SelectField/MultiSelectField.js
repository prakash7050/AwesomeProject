import React, { useState } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

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
  value,
}) => {
  const [selectedItems, setSelectedItems] = useState([])
  
  const onSelectedItemChange = selectedItem => {
    console.log(selectedItem)
    onSelectedItemsChange(selectedItems)
    setSelectedItems(selectedItem)
  };

    return (
      <View style={{ flex: 1,paddingTop:30 }}>
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
          styleTextDropdownSelected={{marginLeft:20,...styleTextDropdownSelected}}
          styleSelectorContainer={{margin:10,...styleSelectorContainer}}
          styleTextDropdown={{marginLeft:20,color:'#CCC',...styleTextDropdown}}
          styleDropdownMenuSubsection={{height:50,borderEndWidth:10,borderRadius:5,...styleDropdownMenuSubsection}}
          searchInputStyle={{ color: '#CCC',height:50,...searchInputStyle}}
        />
        <View>
          {multiSelect?.getSelectedItemsExt(selectedItems)}
        </View>
      </View>
    );
  }

export default MultiSelectField;