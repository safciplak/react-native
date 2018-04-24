import React,{Component} from 'react';
import {SectionList,Text,View,Alert,Platfrom} from 'react-native';

const apiGetAllFoods = 'http://localhost:8080';
async function getFoodsFromServer() {
  try{
    let response = await fetch(apiGetAllFoods);

    console.log('ok');
    console.log(response);
    let responseJson = await response.json();
    console.log('safak');
    return responseJson.data; // list of foods
  } catch(error){
    console.error(`Error is : ${error}`);
  }
}

export {getFoodsFromServer};
