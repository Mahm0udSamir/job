import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ServiceScreen from '../screens/ServiceScreen/ServiceScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import { Platform } from 'react-native';


  const Home = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'HomeScreen'
        }
      }
    }
  });

  const Service = createStackNavigator({
    Service: {
      screen: ServiceScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Service'
        }
      }
    } 
  });

  const About = createStackNavigator({
    About: {
      screen: AboutScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'About'
        }
      }
    }
  });
  
  
  const tabeNavigator = createBottomTabNavigator({
    Home: {screen: Home},
    Service: {screen: Service},
    About: {screen: About}
  },
    {
      navigationOptions: ({ navigation }) => {
        return {
          header: null
        }
      },
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-share-alt`;
          } else if (routeName === 'Service') {
            iconName = `md-map`;
          }  else if (routeName === 'About') {
            iconName = `md-map`;
          }
  
          // You can return any component that you like here!
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }
  });
  
  
 
  
  
  
  export default  createAppContainer(tabeNavigator);
  