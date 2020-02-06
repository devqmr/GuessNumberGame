import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectNumber) => {
    setUserNumber(selectNumber);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />
  if (userNumber) {
    content = <GameScreen userChoices={userNumber} />
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess Number Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
