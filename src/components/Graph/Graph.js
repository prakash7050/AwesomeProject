import { View } from "react-native"
import MyBarChart from "./BarChart"
import MyBezierLineChart from "./BezierLineChart"
import MyContributionGraph from "./ContributionGraph"
import MyLineChart from "./LineChart"
import MyPieChart from "./PieChart"
import MyProgressChart from "./ProgressChart"
import MyStackedBarChart from "./StackedBarChart"




const Graph = () =>{

    return(
        <View>
            <MyBarChart />
            <MyBezierLineChart />
            <MyContributionGraph />
            <MyLineChart />
            <MyPieChart />
            <MyProgressChart />
            <MyStackedBarChart />
        </View>
    )
}

export default Graph;