import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {ImageBackground} from "react-native-web";
//import Image from "react-native-web/src/exports/Image";


const fugleArter = [
    {name: 'Kolibri', key: 1},
    {name: 'Måge', key: 2},
    {name: 'Blåmejse', key: 3},
    {name: 'Ørn', key: 4},
    {name: 'Ugle', key: 5},
    {name: 'Solsort', key: 6},
];

export default class SettingsScreen extends Component {

    static navigationOptions= {
        title:'My Page'

    }

    render(){
        return (
            <View style={styles.container}>

                <ScrollView>
                    {fugleArter.map((item) => {
                        return (
                            <View key={item.key}>
                                <Text style={styles.item}>{item.name}</Text>
                            </View>
                        )
                    })}
                </ScrollView>

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
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: "#229022",
        fontSize: 24,
        color: 'white'
    }
});
