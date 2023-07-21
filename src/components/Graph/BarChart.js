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
  BarChart
} from 'react-native-chart-kit';
import { isMobileView } from '../../Constant';


const MyBarChart = ({data,props}) => {
  return (
    <BarChart
    data={{
      labels: data?.labels,
      datasets: [
        {
          data: data?.data,
        },
      ],
    }}
    yLabelsOffset={1}
    xLabelsOffset={5}
    showValuesOnTopOfBars
    width={isMobileView ? Dimensions.get('window').width*2 : 12*Dimensions.get('window').width/11}
    height={isMobileView ? Dimensions.get('window').width-200 : Dimensions.get('window').height/4}
    yAxisLabel={'Rs'}
    chartConfig={{
      backgroundColor: '#eff3ff',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#d6d5bf',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(1, 48, 28, ${opacity})`,
      style: {
        borderRadius: 10,
        margin:2
      },
    }}
    style={{
      borderRadius: 10,
      margin:2
    }}
    {...props}
  />
  );
};

export default MyBarChart;

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
