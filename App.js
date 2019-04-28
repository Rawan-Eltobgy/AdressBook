import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
//import Router from './Router';
import PlaceForm from './src/components/PlaceForm';

export default class App extends Component{
    //side effects in componentDidMount
    // componentDidMount(){
    //   const config = {
    //     apikey: ,
    //     databaseURL: ,
    //     storageBucket: ,
    //     messagingSenderId:
    //   };
    //   firebase.initializeApp(config);
    // }

  render() {
    return (
      <View style={styles.container}>
        <PlaceForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
