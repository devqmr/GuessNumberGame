import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>GameOverScreen</Text>
            <Text>Number of rounds: {props.roundNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="Start New Game" onPress={props.onRestart} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;