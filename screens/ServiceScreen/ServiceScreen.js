import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
 
export default function ServiceScreen() {
  return (
    <ScrollView style={styles.container}>
       <View>
           <Text>ServiceScreen</Text>
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
