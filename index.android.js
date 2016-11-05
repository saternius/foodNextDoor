/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage,
} from 'react-native';
import HomePage from './Pages/HomePage';

class nextDoorGrub extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
       <Navigator
          initialRoute={{
            page: "Home",
            data:{}
          }}
          renderScene={(route, navigator) => {
            navigate = function(p,d){
              if(p === "LogOut"){
                navigator.popToTop();
              }else{
                navigator.push({
                    page: p,
                    data:d
                  });
              }
            };

            back = function(){
                navigator.pop();
            };

            switch(route.page){
              case "Home":
                  return (<HomePage nav={navigate}/>);
              default:
                  return(<HomePage nav={navigate}/>);
            }
        }}
    />
    )
  }
}

AppRegistry.registerComponent('nextDoorGrub', () => nextDoorGrub);
