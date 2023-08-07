import { Ionicons } from '@expo/vector-icons'
import { Menu, MenuItem } from '@mui/material'
import { MenuView } from '@react-native-menu/menu'
import { useState } from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'

// not for web
const menuList = [
    {
      id: 'Bar Chart',
      title: 'Bar Chart',
      titleColor: '#242323',
    },
    {
        id: 'Bezier Line Chart',
        title: 'Bezier Line Chart',
        titleColor: '#242323',
      },
      {
        id: 'Contribution Graph',
        title: 'Contribution Graph',
        titleColor: '#242323',
      },
      {
        id: 'Line Chart',
        title: 'Line Chart',
        titleColor: '#242323',
      },
      {
        id: 'Pie Chart',
        title: 'Pie Chart',
        titleColor: '#242323',
      },
      {
        id: 'Progress Chart',
        title: 'Progress Chart',
        titleColor: '#242323',
      },
      {
        id: 'Stacked Bar Chart',
        title: 'Stacked Bar Chart',
        titleColor: '#242323',
      },
  ]

const MenuViewList = (props) =>{
    const [value, setValue] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };
    const handleClose = (value) => {
      props?.handleClose?.(value)
        if(value !== 'backdropClick'){
            setValue(value)
        }
        setAnchorEl(null);
    };

    
    return(
        <View style={{flexDirection:"row",...props?.style}}>
          {props?.label && <Text style={props?.labelStyle}>{props?.label}</Text>}
          {Platform.OS === 'web' ?
            <TouchableOpacity
                style={{flex:1}}
                onPress={handleClick}>
                    <Ionicons name={props?.icon || 'ellipsis-vertical-outline'} color={props?.color || 'black'} size={props?.size || 30} />
            </TouchableOpacity>
            :
            <MenuView
                title={props?.menuTitle}
                onPressAction={({ nativeEvent }) => {
                  handleClose(nativeEvent?.event)
                }}
                actions={props?.menuList || menuList}
                shouldOpenOnLongPress={false}
            >
                <TouchableOpacity><Ionicons name={props?.icon || "ellipsis-vertical-outline"} color={props?.color || 'black'} size={props?.size || 25} /></TouchableOpacity>
            </MenuView>
          }
            {/* only for web */}
            {Platform.OS === 'web' && <Menu
                anchorEl={anchorEl}
                open={open}
                title={props?.menuTitle}
                onClose={()=>handleClose('backdropClick')}
            >
                {[...props?.menuList]?.map(ele=><MenuItem style={{color:ele?.titleColor || 'black'}} color={ele?.titleColor || 'black'} onClick={()=>handleClose(ele?.title)}>{ele?.title}</MenuItem>)}
            </Menu>}
            {/* only for web */}
        </View>
    )
}

export default MenuViewList;