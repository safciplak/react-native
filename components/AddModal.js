
import React,{Component} from 'react';
import {
    FlatList, StyleSheet, Text, View, Image,
    Alert, Platform, TouchableHighlight, Dimensions,
    TextInput
}from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      newFoodName: '',
      newFoodDescription: '',
    }
  }
  showAddModal = () => {
    this.refs.myModal.open();
  }
  genereteKey = (numberOfChaacters) => {
    return require('random-string')({length: numberOfChaacters});
  }
  render(){
    return(
      <Modal
      ref={'myModal'}
      style={{
        justifyContent:'center',
        borderRadius: Platform.OS === 'ios' ? 30 : 0,
        showRadius: 10,
        width: screen.width - 80,
        height:300,
      }}
      position='center'
      backdrop={true}
      onClosed={() => {
        //alert('modal closed');
      }}
      >
        <Text style={{
          fontSize:16,
          fontWeight:'bold',
          textAlign:'center',
          marginTop:40,
        }}>New foods  information</Text>
        <TextInput
        style={{
            height:40,
            borderBottomColor:'grey',
            marginLeft:30,
            marginRight:30,
            marginTop:20,
            marginBottom:10,
            borderBottomWidth:1,
        }}
        onChangeText={(text) => this.setState({newFoodName:text})}
        placeholder="Enter new food's name"
        value={this.state.newFoodName}
        >
        </TextInput>

        <TextInput
        style={{
            height:40,
            borderBottomColor:'grey',
            marginLeft:30,
            marginRight:30,
            marginTop:20,
            marginBottom:10,
            borderBottomWidth:1,
        }}
        onChangeText={(text) => this.setState({newFoodDescription:text})}
        placeholder="Enter new food's description"
        value={this.state.newFoodDescription}
        >
        </TextInput>
        <Button
        style={{fontSize:18, color:'white'}}
        containerStyle={{
          padding:8,
          marginLeft:70,
          marginRight:70,
          heigt:40,
          borderRadius:6,
          backgroundColor:'mediumseagreen',
        }}
        onPress={() => {
          if(this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0 ) {
            alert("you must enter food's name and description");
            return;
          }
          const newKey = this.genereteKey(24);
          const newFood = {
              key: newKey,
              name: this.state.newFoodName,
              image: "https://www.uniquedevontours.com/wp-content/uploads/2015/03/Cream-Tea-Pic-2-1024x713.jpg",
              foodDescription: this.state.newFoodDescription,
          };
          flatListData.push(newFood);
          this.props.parentFlatList.refreshFlatList(newKey);
          this.refs.myModal.close();
        }}
        >
        Save
        </Button>

      </Modal>
    );
  }
}
