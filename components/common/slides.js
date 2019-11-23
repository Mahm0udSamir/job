import React from "react";
import { View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
 


const Slides = ({images}) => {

        return (
            <View style={styles.container}>
   
                <SliderBox
                    images={images}
                    sliderBoxHeight={'100%'}
                />
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Slides;