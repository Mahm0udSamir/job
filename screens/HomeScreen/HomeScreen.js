import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
 
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
       <View>
           <Text>HomeScreen</Text>
       </View>
       
    </ScrollView>
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
