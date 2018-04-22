import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Robot extends Component {
  render(){
    const ImageSource = {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6ZsF2wv0yT8FOLcKeP-UherKOuBJZl5ShT8K3N6wAE3dlbRgPQ"
    }
    return(
      <Image source={ImageSource}
          style={{width:300, height:300}}></Image>
    );
  }
}
