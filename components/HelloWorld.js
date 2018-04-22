import React, {Component} from 'react';
import {Text} from 'react-native';


export default class HelloWorld extends Component{
  render(){
    let greeting = `

    Hello world. My name is Safak Ciplak`;
    return(
      <Text>{greeting}</Text>
    );
  }
}
