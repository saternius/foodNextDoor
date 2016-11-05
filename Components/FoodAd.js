import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
// import NavigationBar from '../Components/NavigationBar';
// import Button from '../Components/Button';
//import WallPaper from '../Components/WallPaper';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      foodPic: require("../images/foodImage_1.jpg")
    }
  }
  render() {
    return (
      <View style={{width:300,left:30,height:240,backgroundColor:"#f0f0f0", borderRadius:0}} elevation={1}>
        <Image style={{width:290,height:160,opacity:1,top:5,left:5, borderRadius:5}} source={this.state.foodPic}/>
        <View style={{backgroundColor:"white",width:300,height:70,top:10, borderRadius:0}}>
          <Text style={{fontSize:10,fontWeight:"bold"}}>
            ~12$
          </Text>
        </View>
      </View>
    )
  }
}
