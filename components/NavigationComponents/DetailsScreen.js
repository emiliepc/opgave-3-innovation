import * as React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: 'purple',
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

export default class DetailsScreen extends React.Component {
    static navigationOptions= {
        title:'Details'
    }

    GoToSettings = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Settings');
    };

    render = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Go to Settings</Text>
                <Button title="Take me to it!" onPress={this.GoToSettings} />
                <Ionicons name="ios-settings" size={24} color="black" />
            </View>
        );
    };
}
