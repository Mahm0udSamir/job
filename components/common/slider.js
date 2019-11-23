import React from 'react';
import { StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});
 
const images = [
    'https://raw.githubusercontent.com/Jacse/react-native-app-intro-slider/master/Example/assets/1.jpg',
    'https://raw.githubusercontent.com/Jacse/react-native-app-intro-slider/master/Example/assets/2.jpeg',
    'https://raw.githubusercontent.com/Jacse/react-native-app-intro-slider/master/Example/assets/3.jpeg'
        
  ];

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image:uri(images[0]),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: uri(images[1]),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image:  uri(images[2]),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
];
 
const Slider = () => {
  _onDone = () => {
    // User finished the introduction. Show "real" app
  }
  
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
      />
    );
  
}

export default Slider;