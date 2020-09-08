import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});

export default class HomeScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>HomeScreen</Text>
            </View>
        );
    };
}
