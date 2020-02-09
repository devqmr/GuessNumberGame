import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import * as Font from "expo-font";
import { AppLoading } from 'expo';
//imp snippit
import GameOverScreen from './screens/GameOverScreen'

const fetchFonts = () => {
  // return Font.loadAsync({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  // });

  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};


export default function App() {

  //useState snippit
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (<AppLoading startAsync={fetchFonts} onFinish={setDataLoaded(true)} onError={(err) => console.log(err)} />);
  }

  const startGameHandler = (selectNumber) => {
    setUserNumber(selectNumber);
    setGuessRound(0);
  }

  //nfn snippit
  const gameOverHandler = (numOfRounds) => {
    setGuessRound(numOfRounds);
  };

  const configureNewGame = () => {
    setUserNumber(null);
    setGuessRound(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />
  if (userNumber && guessRound <= 0) {
    content = <GameScreen userChoices={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRound > 0) {
    content = <GameOverScreen roundNumber={guessRound} userNumber={userNumber} onRestart={configureNewGame} />
  }
  return (
    <SafeAreaView style={styles.screen} >
        <Header title="Guess Number Game" />
        {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
