import React,{Component} from 'react';
import {SectionList,Text,View,Alert,Platfrom} from 'react-native';

const apiBasePath = 'http://localhost:8080/food';
async function getFoodsFromServer() {
  try{
    let response = await fetch(apiBasePath);
    let responseJson = await response.json();
    return responseJson.data; // list of foods
  } catch(error){
    console.error(`Error is : ${error}`);
  }
}

async function insertNewFoodToServer(params) {
  try{
    let response = await fetch(apiBasePath, {
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(params),
    });

    let responseJson = await response.json();
    return responseJson.data; // list of foods
  } catch(error){
    console.error(`Error is : ${error}`);
  }
}

export {getFoodsFromServer};
export {insertNewFoodToServer};
