import React from 'react';
import { View, Text, StyleSheet, Button, Image,Dimensions } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    style={styles.image}
                    source={require('../assets/success.png')}
                    resizeMode='cover' />
            </View>

            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{props.roundNumber}
                    </Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}
                    </Text> </BodyText></View>

            <MainButton onPress={props.onRestart}> START NEW GAME</MainButton> 

            <View style={styles.smallImageContainer}>
                <Image
                    style={styles.image}
                    // source={require('../assets/success.png')} 
                    source={{ uri: 'https://media.istockphoto.com/photos/success-word-on-green-rubber-stamp-picture-id624031640' }}
                    resizeMode='cover' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').width * (0.6/2),
        borderColor: 'black',
        borderWidth: 2,
        overflow: 'hidden' //Hide any part of children outside of the view
    },
    smallImageContainer: {
        marginVertical: 30,
        borderRadius: 200,
        borderColor: 'black',
        borderWidth: 2,
        width: 100,
        height: 100,
        overflow: 'hidden' //Hide any part of children outside of the view
    },
    image: {
        width: "100%",
        height: '100%',
        borderRadius: 100
    },
    highlight: {
        color: Colors.primary,
        // fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 40,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,

    }
});

export default GameOverScreen;