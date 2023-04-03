import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

const InitialScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      CheckLogin();
    }, 1000);
  }, []);

  async function CheckLogin() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        props.navigation.navigate('TodoList');
      } else {
        props.navigation.navigate('LoginScreen');
      }
    });
  }

  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <Text style={styles.title}>My Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '400',
    color: '#009688',
  },
});

export default InitialScreen;