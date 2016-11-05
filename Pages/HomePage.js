import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
// import NavigationBar from '../Components/NavigationBar';
// import Button from '../Components/Button';
import WallPaper from '../Components/WallPaper';
import FoodAd from '../Components/FoodAd';

export default class HomePage extends Component {
  render() {
    return (
      <View>
        <WallPaper/>
        <Text style={{fontSize:30, fontWeight:"bold",textAlign: 'center', width:360, top:18}}>Food Near You</Text>
        <View style={{position:"absolute",top:75,height:640,width:360}}>
          <FoodAd/>
        </View>
      </View>
    )
  }
}
