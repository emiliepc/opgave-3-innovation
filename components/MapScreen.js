import React, { Component } from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.map} source={require('../assets/map.png')} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#99DD77",
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
    map: {
        height: "100%",
        width: "100%",
    }
});

