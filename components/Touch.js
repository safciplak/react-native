import React, {Component} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import Button from 'react-native-button';

export default class Touch extends Component {
  _onPressButton = () => {
    Alert.alert("You pressed the button!")
  }
  render(){
    return(
      <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      }}>

      <Button style={{
        fontSize:20,
        color:'white',
        backgroundColor:'green',
        padding:10,
        borderRadius:20
      }}
      onPress={this._onPressButton}
      >This is a button</Button>

      </View>
    );
  }
}
