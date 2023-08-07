import { Menu, MenuItem } from '@mui/material'
import { get, isEmpty } from 'lodash'
import { forwardRef, useEffect, useState } from 'react'
import { Platform, ScrollView, Text, View } from "react-native"
import MenuViewList from '../Menu/MenuViewList'
import MyBarChart from "./BarChart"
import MyBezierLineChart from "./BezierLineChart"
import MyContributionGraph from "./ContributionGraph"
import MyLineChart from "./LineChart"
import MyPieChart from "./PieChart"
import MyProgressChart from "./ProgressChart"
import MyStackedBarChart from "./StackedBarChart"


const GraphView = forwardRef((props,ref) =>{
    switch(props?.name){
        case 'Bar Chart':
            return <MyBarChart data={props?.data} props={props?.props} />;
        case 'Bezier Line Chart':
            return <MyBezierLineChart data={props?.data} props={props?.props}/>
        case 'Contribution Graph':
            return <MyContributionGraph data={props?.data} props={props?.props}/>
        case 'Line Chart':
            return <MyLineChart data={props?.data} props={props?.props}/>
        case 'Pie Chart':
            return <MyPieChart data={props?.data} props={props?.props}/>
        case 'Progress Chart':
            return <MyProgressChart data={props?.data} props={props?.props}/>
        case 'Stacked Bar Chart':
            return <MyStackedBarChart data={props?.data} props={props?.props}/>
    }
})

// not for web
const menuList = [
    {
      id: 'Bar Chart',
      title: 'Bar Chart',
      titleColor: '#2367A2',
    },
    {
        id: 'Bezier Line Chart',
        title: 'Bezier Line Chart',
        titleColor: '#2367A2',
      },
      {
        id: 'Contribution Graph',
        title: 'Contribution Graph',
        titleColor: '#2367A2',
      },
      {
        id: 'Line Chart',
        title: 'Line Chart',
        titleColor: '#2367A2',
      },
      {
        id: 'Pie Chart',
        title: 'Pie Chart',
        titleColor: '#2367A2',
      },
      {
        id: 'Progress Chart',
        title: 'Progress Chart',
        titleColor: '#2367A2',
      },
      {
        id: 'Stacked Bar Chart',
        title: 'Stacked Bar Chart',
        titleColor: '#2367A2',
      },
  ]

const Graph = ({graphData,xLabelKey,yLabelKey,props}) =>{
    const [visible, setVisible] = useState(false)
    const [graphName, setGraphName] = useState('Pie Chart')
    const [graphLabel, setGraphLabel] = useState( ['Bar Chart','Bezier Line Chart','Contribution Graph','Line Chart','Pie Chart','Progress Chart','Stacked Bar Chart'])
    const [labelArray, setLabelArray] = useState([])
    const [dataArray, setDataArray] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };
    const handleClose = (value) => {
        if(value !== 'backdropClick'){
            setGraphName(value)
        }
    };

    const filterData = (data) =>{
        let labels = [];
        let values = [];
        data?.map(ele=>{
            labels.push(get(ele,xLabelKey,'month'));
            values.push(get(ele,yLabelKey,0))
        })
        setLabelArray(labels)
        setDataArray(values)
    }

    useEffect(() => {
     if(!isEmpty(graphData)){
        filterData(graphData)
     }
    }, [graphData])

    
    
    return(
        <View style={{borderWidth:1,borderColor:'black',margin:2,borderRadius:10,justifyContent:'space-between'}}>
           
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{flex:8,fontSize:20,fontWeight:'bold',textAlign:'center'}}>{graphName}</Text>
                <MenuViewList handleClose={(value)=>handleClose(value)} menuList={menuList} />
            </View>
            {graphName && <ScrollView horizontal><GraphView props={props} data={{labels:labelArray,data:dataArray}} name={graphName} /></ScrollView>}
            
            {/* only for web */}
            {Platform.OS === 'web' && <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={()=>handleClose('backdropClick')}
                title='Select Graph'
            >
                {graphLabel?.map(ele=><MenuItem onClick={()=>handleClose(ele)}>{ele}</MenuItem>)}
            </Menu>}
            {/* only for web */}
        </View>
    )
}

export default Graph;