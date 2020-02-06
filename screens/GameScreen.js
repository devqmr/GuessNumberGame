import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
import { MaterialIcons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';


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

const renderListItem = (value, numOfRound) => (
    <View key={value} style={styles.listItem}>
        <BodyText>#{numOfRound}</BodyText>
        <BodyText>{value}</BodyText>
    </View>
);
const GameScreen = props => {

    const initialGuess = genrateRandomBetween(1, 100, props.userChoices);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoices, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoices) {
            onGameOver(pastGuesses.length);
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
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = genrateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        //currPastGuess is the old value of pastGuesses
        setPastGuesses(previousPastGuess => [nextNumber, ...previousPastGuess])

    }

    return (<View style={styles.screen}>
        <Text style={DefaultStyles.title}>Game Screen</Text>
        <NumberContainer>user number > {props.userChoices}</NumberContainer>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, 'lower')} > <MaterialIcons name='remove' size={24} /></MainButton>
            <MainButton onPress={nextGuessHandler.bind(this, 'greater')} ><MaterialIcons name='add' size={24} /></MainButton>
        </Card>
        <View style={styles.listContainer}>
            <ScrollView contentContainerStyle={styles.list}>{pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}</ScrollView>
        </View>

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
        maxWidth: '90%'
    },
    listContainer: {
        flex: 1,
        width: '60%'
    },
    list: {
        //Why not work as in Video 82
        //    alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default GameScreen;