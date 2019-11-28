import React from 'react';
import { Dimensions, StyleSheet, ScrollView, View } from 'react-native';
import Card from './../../components/common/card';
 
export default function ServiceScreen() {
  return (
      <ScrollView contentContainerStyle={styles.container}>
          
              <Card color="#ff5a85" iconName="md-construct" title="Service" />
              <Card color="#ffa13d" iconName="md-fitness" title="Fitness" />
              <Card color="#ffa13d" iconName="md-construct" title="Service" />
              <Card color="#6087ff" iconName="md-fitness" title="Fitness" />
              <Card color="#ff5a85" iconName="md-construct" title="Service" />
              <Card color="#ffa13d" iconName="md-fitness" title="Fitness" />
              <Card color="#6dcbcb" iconName="md-fitness" title="Fitness" />
              
      </ScrollView>
    
 
   
  );
}

// AboutScreen.navigationOptions = {
//   title: 'Links',
// };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
