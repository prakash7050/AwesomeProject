// 7 Type of Graph using React Native Chart Kit
// https://aboutreact.com/react-native-chart-kit/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  Dimensions,
  ScrollView,
  StyleSheet
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { isMobileView } from '../../Constant';

const MyLineChart = ({data,props}) => {
  return (
    <ScrollView horizontal >
      <LineChart
        data={{
          labels: data?.labels,
          datasets: [
            {
              data: data?.data,
              strokeWidth: 2,
            },
          ],
        }}
        yLabelsOffset={1}
        xLabelsOffset={5}
        width={isMobileView ? Dimensions.get('window').width*2.8 : Dimensions.get('window').width}
        height={isMobileView ? Dimensions.get('window').width-200 : Dimensions.get('window').height/4}
        chartConfig={{
          backgroundColor: '#eff3ff',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#d6d5bf',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(1, 48, 28, ${opacity})`,
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
    </ScrollView>
    
  );
};

export default MyLineChart;

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
