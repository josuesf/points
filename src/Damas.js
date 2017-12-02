import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet
} from 'react-native';
import ListDamas from './ListDamas';

export default class Damas extends Component<{}>{
    static navigationOptions = {
        tabBarLabel: 'Damas'
    }
    render() {
        return (
            <View style={styles.Tab}>
                <ListDamas/>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Tab: {
        flex: 1,
        backgroundColor: 'lightgray',
    }
});