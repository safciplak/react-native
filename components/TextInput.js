import React, {Component} from 'react';
import {TextInput, View, Text, Keyboard} from 'react-native';

export default class Robot extends Component {
  constructor(props){
    super(props);
    this.state={
      typedText:'please type your text',
      typedPassword:'',
      typedDescription:'',
    }
  }

  componentWillMount(){
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      this.setState(() => {
        return {typedText: 'Keyboard is shown'}
      });
    });

    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', () => {
      this.setState(() => {
        return {typedText: 'Keyboard Hide'}
      });
    });
  }
  componentWillUnMount(){
    this.keyboardDidShowListener.remove();
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
          //autoFocus={true}
          onChangeText={(text) => {this.setState(() => {
            return {
              typedPassword: text
            };
          })}}
        />

        <TextInput style={{
          height:100,
          margin:20,
          padding:10,
          borderColor:'grey',
          borderWidth:1,
        }}
        multine={true}
        borderBottomColor='green'
        borderBottomWidth={3}
        borderRightColor='green'
        borderRightWidth={3}
        borderLeftColor='green'
        borderLeftWidth={3}
        editable={true}
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType='done'
        onChangeText={(text) => {this.setState(() => {
          return {
            typedDescription: text
          };
        })}}
        />

      </View>
    );
  }
}
