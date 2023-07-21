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
  ContributionGraph
} from 'react-native-chart-kit';
import { isMobileView } from '../../Constant';

const MyContributionGraph = ({data,props}) => {
  return (
    <ContributionGraph
        values={[
          {date: '2019-01-02', count: 1},
          {date: '2019-02-03', count: 2},
          {date: '2019-03-04', count: 3},
          {date: '2019-04-05', count: 4},
          {date: '2019-05-06', count: 5},
          {date: '2019-06-30', count: 6},
          {date: '2019-07-31', count: 7},
          {date: '2019-08-01', count: 8},
          {date: '2019-09-02', count: 9},
          {date: '2019-10-05', count: 10},
          {date: '2019-11-30', count: 11},
          {date: '2019-12-30', count: 12},
        ]}
        endDate={new Date('2019-11-30')}
        numDays={366}
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
      />
    
  );
};

export default MyContributionGraph;

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
