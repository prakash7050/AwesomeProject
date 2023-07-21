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
  ProgressChart
} from 'react-native-chart-kit';

const MyProgressChart = () => {
  return (
    <ProgressChart
        data={[0.4, 0.6, 0.8,0.9,1]}
        width={Dimensions.get('window').width - Dimensions.get('window').width/6}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(7, 4, 8, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
  );
};

export default MyProgressChart;

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
