import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Slides from './../../components/common/slides';
import Slider from './../../components/common/slider';



export default function HomeScreen() {
  return (
    
       <Slider />
       
    
  );
}

// AboutScreen.navigationOptions = {
//   title: 'Links',
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
