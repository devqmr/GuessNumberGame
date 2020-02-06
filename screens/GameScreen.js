import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import DefaultStyles from '../constants/default-styles'

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

    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoices, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoices) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoices, onGameOver]);

    const nextGuessHandler = direction => {

        if ((direction === 'lower' && currentGuess < props.userChoices)
            || (direction === 'greater' && currentGuess > props.userChoices)) {
            Alert.alert('Don\'t lie!', 'You know that this wrong...', [{ text: 'Sorry', style: 'cancel' }]);
            return
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = genrateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(rounds => rounds + 1);
    }

    return (<View style={styles.screen}>
        <Text style={DefaultStyles.title}>Game Screen</Text>
        <NumberContainer>user number > {props.userChoices}</NumberContainer>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
            <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
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