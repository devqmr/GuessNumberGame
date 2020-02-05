import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title} >Start New Game!!!</Text>

            <Card style={styles.inputContainer}>
                <Text >Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Rest" onPress={() => { }} />
                    <Button style={styles.button} title="Confirm" onPress={() => { }} />
                </View>
            </Card>
            {/* <View style={styles.inputContainer}>
                <Text >Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Rest" onPress={() => { }} />
                    <Button style={styles.button} title="Confirm" onPress={() => { }} />
                </View>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
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
    }
});

export default StartGameScreen;