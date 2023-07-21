// 7 Type of Graph using React Native Chart Kit
// https://aboutreact.com/react-native-chart-kit/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  Dimensions,
  StyleSheet
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {
  PieChart
} from 'react-native-chart-kit';
import { isMobileView } from '../../Constant';


const lengthSize = (len) =>{
  return isMobileView ? len : 2*len;
}

const MyPieChart = ({data,props}) => {
  return (
    <PieChart
        data={[
          {
            name: 'Seoul',
            population: 21500000,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: lengthSize(10),
          },
          {
            name: 'Toronto',
            population: 2800000,
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: lengthSize(10),
          },
          {
            name: 'New York',
            population: 8538000,
            color: 'black',
            legendFontColor: '#7F7F7F',
            legendFontSize: lengthSize(10),
          },
          {
            name: 'Moscow',
            population: 11920000,
            color: 'rgb(0, 0, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: lengthSize(10),
          },
        ]}
        // hasLegend={true}
        width={Dimensions.get('window').width - Dimensions.get('window').width/6}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          margin: 2,
          borderRadius: 16,
          backgroundColor: "#ebebeb"
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="2"
        absolute //for the absolute number remove if you want percentage
      />
  );
};

export default MyPieChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
