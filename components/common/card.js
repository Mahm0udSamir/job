import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 

const Card = (props) => {
    const {color, iconName, title } = props;
    return (
        <View style={styles.cardContainer}>
            
            <View style={[styles.container, {  backgroundColor: color}]} >
                <View style={styles.icon}>
                    <Ionicons name={iconName} size={30} color="#fff" />
                </View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '50%',
        height: 300,
        padding: 10,
    },
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        borderWidth: 0,
        borderRadius: 15
       
    },
    icon: {
        backgroundColor: '#ffffff38',  
        padding: 15,
        borderRadius: 55
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fffdfe'
    }
})

export default Card;