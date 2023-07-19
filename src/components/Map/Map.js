import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function Map() {
  return (
    <MapView />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1,
    borderColor:'black'
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
