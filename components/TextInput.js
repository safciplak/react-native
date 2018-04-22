import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

export default class Robot extends Component {
  constructor(props){
    super(props);
    this.state={
      typedText:'please type your text',
      typedPassword:'please type your password'
    }
  }
  render(){

    return(
      <View>
        <TextInput style={{
          height:40,
          margin:20,
          padding:10,
          borderColor:'grey',
          borderWidth:1,
        }}
          keyboardType='email-address'
          placeholder='Enter your email'
          placeholderTextColor='red'
          onChangeText={
            (text) => {
              this.setState(
                (previousState) => {
                      return {
                          typedText: text
                      };
                }
              );
            }
          }
        />
        <Text style={{marginLeft:20}}>{this.state.typedText}</Text>
        <TextInput style={{
          height:40,
          margin:20,
          padding:10,
          borderColor:'grey',
          borderWidth:1,
        }}
          keyboardType='email-address'
          placeholder='Enter your password'
          secureTextEntry={true}
          onChangeText={(text) => {this.setState(() => {
            return {
              typedPassword: text
            };
          })}}
        />
      </View>
    );
  }
}
