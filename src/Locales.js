import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet
} from 'react-native';
import ListLocales from '../src/ListLocales';

export default class Locales extends Component<{}>{
    static navigationOptions = {
        tabBarLabel: 'Locales'
    }
    render() {
        return (
            <View style={styles.Tab}>
                <ListLocales/>
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
