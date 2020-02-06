import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const genrateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min)) + min;

    if (random === exclude) {
        return genrateRandomBetween(min, max, exclude);
    } else {
        return random;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        genrateRandomBetween(1, 100, props.userChoices)
    );
    return (<View style={styles.screen}>
        <Text>Game Screen</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title="LOWER" onPress={() => { }} />
            <Button title="GREATER" onPress={() => { }} />
        </Card>
    </View>)
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;