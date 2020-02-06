import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setconfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const restInputHandler = () => {
        setEnteredValue('');
        setconfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number should be between 1 & 99', [{ text: 'Okey', style: 'destructive', onPress: restInputHandler }])

            return;
        }
        setSelectedNumber(chosenNumber)
        setconfirmed(true);
        setEnteredValue('');
    }

    let confirmedOutput
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summeryContainer}>
                <BodyText>You selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumber)} > "START GAME"</MainButton>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}
        >
            <View style={styles.screen}>
                <TitleText style={styles.title} >Start New Game!!!</TitleText>

                <Card style={styles.inputContainer}>
                    <BodyText style={styles.title}>Select a Number</BodyText>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='decimal-pad'
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Rest" onPress={() => { restInputHandler() }} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={() => { confirmInputHandler() }} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summeryContainer: {
        marginVertical: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;