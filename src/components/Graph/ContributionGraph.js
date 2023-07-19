// 7 Type of Graph using React Native Chart Kit
// https://aboutreact.com/react-native-chart-kit/

// import React in our code
import React from 'react';
import { View } from 'react-native';

// import all the components we are going to use
import {
    Dimensions,
    StyleSheet,
    Text
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {
    ContributionGraph
} from 'react-native-chart-kit';

const MyContributionGraph = () => {
  return (
    <View>
      <Text style={styles.header}>Contribution Graph</Text>
      <ContributionGraph
        values={[
          {date: '2019-01-02', count: 1},
          {date: '2019-01-03', count: 2},
          {date: '2019-01-04', count: 3},
          {date: '2019-01-05', count: 4},
          {date: '2019-01-06', count: 5},
          {date: '2019-01-30', count: 2},
          {date: '2019-01-31', count: 3},
          {date: '2019-03-01', count: 2},
          {date: '2019-04-02', count: 4},
          {date: '2019-03-05', count: 2},
          {date: '2019-02-30', count: 4},
        ]}
        endDate={new Date('2019-04-01')}
        numDays={105}
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
      />
    </View>
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
