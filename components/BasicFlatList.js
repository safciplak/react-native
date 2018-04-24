import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, RefreshControl} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';
import {getFoodsFromServer} from '../networking/Server'

class FlatListItem extends Component {
  constructor(props){
    super(props);
    this.state =  {
      activeRowKey:null,
      numberOfRefresh:0,
    };
  }
  refreshFlatList = () => {
      this.setState((prevState) => {
        return {
            numberOfRefresh: prevState.numberOfRefresh + 1
          };
      });
      //this.refs.flatList.scrollToEnd();
  }
    render(){
      const swipeSettigs = {
        autoClose: true,
        onClose: (secId, rowId, direction) => {
          if(this.state.activeRowKey != null){
            this.setState({activeRowKey:null});
          }
        },
        opOpen: (secId, rowId, direction) => {
            this.setState({activeRowKey:this.props.item.key});
        },
        right: [
          {
            onPress: () => {
                  //alert('update')
                  this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
            },
            text: 'Edit',type:'primary'
          },
          {
            onPress: () => {
              const deletingRow = this.state.activeRowKey;
                  Alert.alert(
                    'Alert',
                    'Are you sure you want to delete?',
                    [
                      {text:'No', onPress: () => console.log('cancel pressed'), style:'cancel'},
                      {text:'Yes', onPress: () => {
                          flatListData.splice(this.props.index, 1);
                          // Refresh FlastList!
                          this.props.parentFlatList.refreshFlatList(deletingRow);
                      }},
                    ],
                    {cancelable:true}
                  )
            },
            text:'Delete',
            type:'delete'
          }
        ],
        rowId: this.props.index,
        sectionId: 1
      }
      return (
        <Swipeout {...swipeSettigs}>
          <View style={{
              flex:1,
              flexDirection:'column',
            }}>
            <View style={{
              flex:1,
              flexDirection:'row',
              //backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
              backgroundColor:'mediumseagreen',
            }}>
              <Image
                source={{uri: this.props.item.image}}
                style={{width:100,height:100,margin:5}}
                >
              </Image>
              <View style={{
                  flex:1,
                  flexDirection:'column',
                }}>
                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
              </View>
            </View>

            <View style={{
                height:1,
                backgroundColor:'white'
              }}>
            </View>
          </View>
        </Swipeout>
      );
    }
}

const styles = StyleSheet.create({
  flatListItem:{
    color:'white',
    padding:10,
    fontSize:16,
  }
})

export default class BasicFlatList extends Component {
  constructor(props){
    super(props);
    this.state = ({
      deletedRowKey: null,
      refreshing: false,
      foodFromServer: [],
    });
    this._onPressAdd = this._onPressAdd.bind(this);
  }

  componentDidMount(){
    this.refreshDataFromServer();
  }
  refreshDataFromServer = () => {
    this.setState({refreshing:true});
    getFoodsFromServer().then((foods) => {
      //console.log(foods);
      this.setState({foodFromServer:foods});
      this.setState({refreshing:false});
    }).catch((error) => {
      this.setState({foodFromServer:[]});
      this.setState({refreshing:false});
    })
  }
  onRefresh = () => {
    this.refreshDataFromServer();
  }
  refreshFlatList = (activeKey) => {
      this.setState((prevState) => {
        return {
            deletedRowKey: activeKey
          };
      });
      this.refs.flatList.scrollToEnd();
  }
  _onPressAdd () {
    //alert('you add item');
    this.refs.addModal.showAddModal();

  }
  render(){
    return(
      <View style={{flex:1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
        <View style={{
            backgroundColor:'blue',
            flexDirection:'row',
            justifyContent:'flex-end',
            alignItems:'center',
            height:64,
          }}>
            <TouchableHighlight
              style={{marginRight:10}}
              underlayColor='tomato'
              onPress={this._onPressAdd}
              >
                <Image style={{width:25,height:35}}
                  source={require('../icons/plus.png')}
                  />

            </TouchableHighlight>

        </View>
        <FlatList
        ref={'flatList'}
        data={this.state.foodFromServer}
        renderItem={({item,index})=>{
          //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
          return(
            <FlatListItem item={item} index={index} parentFlatList={this}>

            </FlatListItem>

          );
        }}
        keyExtractor={(item, index) => item.name}
        refreshControl={<RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          />
          }
        >
        </FlatList>
        <AddModal ref={'addModal'} parentFlatList={this}>

        </AddModal>

        <EditModal ref={'editModal'} parentFlatList={this}>

        </EditModal>
      </View>
    );
  }
}
