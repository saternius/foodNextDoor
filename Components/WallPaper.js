import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
// import NavigationBar from '../Components/NavigationBar';
// import Button from '../Components/Button';
//import WallPaper from '../Components/WallPaper';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      bgPic: require("../images/mapBG.png")
    }
  }
  render() {
    return (
      <View>
      <Image style={{position:"absolute",width:360,height:640,top:0,opacity:.3}} source={this.state.bgPic}/>
      <View style={{position:"absolute",width:360,height:640,top:0,opacity:.75, backgroundColor:"white"}}></View>
      </View>
    )
  }
}
