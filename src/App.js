import React, { Component } from 'react';
import {  Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyBAqjesjNEIo0N9D4CX_8WhuxUvkLx7ANo",
    authDomain: "nodejs-9eb2e.firebaseapp.com",
    databaseURL: "https://nodejs-9eb2e.firebaseio.com",
    projectId: "nodejs-9eb2e",
    storageBucket: "nodejs-9eb2e.appspot.com",
    messagingSenderId: "672114407838"
  });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log(user);
        this.setState({ loggedIn: true })
      }
      else{
        this.setState({ loggedIn: false })
      }

    })
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
          <View style={{flexDirection: 'row'}}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large"/>
    }

    return <LoginForm />
  }

  render() {
    return(
      <View>
        <Header headerText='Authentication'/>
      {this.renderContent()}
      </View>
    )
  }
}

export default App;
