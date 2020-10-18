import React, { Component } from 'react'
import { View, Text, StyleSheet,Button } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';

export default class SettingsScreen extends Component {
    static navigationOptions= {
        title:'Settings'
    }


    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Settings</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: "#99DD77",
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
});
