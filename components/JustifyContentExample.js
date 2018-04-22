import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class JustifyContentExample extends Component {
  render(){
    return(
        <View style={{
          backgroundColor: 'aquamarine',
           //flex:1,
           height:500,
           flexDirection:'column',
           justifyContent:'flex-start',
           //alignItems:'center'
           //alignItems:'center'
           alignItems:'stretch'

         }}>
          <Text style={{height:50, backgroundColor:'red'}} />
          <Text style={{height:50, backgroundColor:'green'}} />
          <Text style={{height:50, backgroundColor:'blue'}} />
        </View>
      );
  }
}
