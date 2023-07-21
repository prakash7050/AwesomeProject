import { Ionicons } from '@expo/vector-icons'
import { get, isEmpty } from 'lodash'
import { forwardRef, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Menu } from "react-native-paper"
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

const Graph = ({graphData,xLabelKey,yLabelKey,props}) =>{
    const [visible, setVisible] = useState(false)
    const [graphName, setGraphName] = useState('Pie Chart')
    const [graphLabel, setGraphLabel] = useState( ['Bar Chart','Bezier Line Chart','Contribution Graph','Line Chart','Pie Chart','Progress Chart','Stacked Bar Chart'])
    const [labelArray, setLabelArray] = useState([])
    const [dataArray, setDataArray] = useState([])

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
        <View style={{borderWidth:1,borderColor:'black',width:'100%',margin:2,borderRadius:10}}>
           <Menu
                contentStyle={{backgroundColor:'white'}}
                visible={visible}
                style={{ flexDirection: 'row',marginTop:200}}
                onDismiss={()=>setVisible(false)}
                anchorPosition='bottom'
                anchor={
                <View >
                    <TouchableOpacity
                        onPress={(e)=>setVisible(true)}>
                            <Ionicons size={30} name={'menu'} />
                    </TouchableOpacity>
                    <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:-15}}>{graphName}</Text>
                    <Text></Text>
                </View>}>
                {graphLabel?.map(label=><Menu.Item testID='menu' accessibilityState titleStyle={{color:'black'}} onPress={() => {setGraphName(label);setVisible(false)}} title={label} />)}
            </Menu>
            {graphName && <ScrollView horizontal><GraphView props={props} data={{labels:labelArray,data:dataArray}} name={graphName} /></ScrollView>}
        </View>
    )
}

export default Graph;