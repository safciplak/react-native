import React,{Component} from 'react';
import {StyleSheet,Text,View,Platform} from 'react-native';

class LifeCycle extends Component{
  constructor(props){
    super(props);
    console.log(`${Date.now()}. This is constructor`);
    this.state = {
      numberOfRefresh:0
    }
    setInterval(() => {
      console.log(`Change State each 2 seconds`);
      this.setState(previousState => {
        return {numberOfRefresh: previousState.numberOfRefresh + 1};
      })
    }, 2000);
  }

componentWillMount(){
  console.log(`${Date.now()}. This is componentWillMount`);
}

componentDidMount(){
  console.log(`${Date.now()}. This is componentDidMount`);
}

shouldComponentUpdate(){
    console.log(`${Date.now()}. This is shouldComponentUpdate`);
    return true;
}

componentWillUpdate(){
    console.log(`${Date.now()}. This is componentWillUpdate`);
}

componentDidUpdate(){
    console.log(`${Date.now()}. This is componentDidUpdate`);
}
  render(){
    console.log(`${Date.now()}. This is render function`);
    let textToDisplay = `Number of refresh: ${this.state.numberOfRefresh}`;
    return(
      <View style={{
        flex:1,
        marginTop:100,
      }}>
        <Text>LifeCyle test</Text>
        <Text>{textToDisplay}</Text>
      </View>
    );
  }
}


export default class LifecycleComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var lifeCycle = <LifeCycle propA="abc"></LifeCycle>;
    return(
      <View>
        {lifeCycle}
      </View>
    );
  }
}
