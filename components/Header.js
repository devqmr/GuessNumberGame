import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors'


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> {props.title}</Text>
        </View>);
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: Platform.OS === 'android' ? 'transparent' : '#ccc',
        borderBottomWidth: Platform.OS === 'android' ? 0 : 1,
    },
    headerTitle: {
        fontSize: 18,
        color: Platform.OS === 'android' ? 'black' : Colors.primary,
        // fontFamily: 'open-sans-bold'
    }
});

export default Header;