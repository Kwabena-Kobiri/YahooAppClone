import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileImage = require("../assets/images/profile.jpg");

const ListItem =( {name, message, messageTitle} ) =>{
  return(
    <View style= {{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center', 
        padding:'15px',backgroundColor:'white',width:410}}>
      <View>
        <Image source={ProfileImage} style={{width:50, height:50, borderRadius:25}}/>
      </View>
      <View style= {{flex:5, padding:'15px', borderBottomWidth:0.1, borderBottomColor:'#eee'}}>
        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontWeight:'bold'}}>{name}</Text>
          <Text>10:00AM</Text>
        </View>
        <View style={{flexDirection:'column'}}>
          <Text style={{fontWeight:'500'}}>
            {messageTitle.slice(0,40)}
          </Text>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'#565656', fontSize:13}}>
                {message.slice(0,40)}...
            </Text>
            <FontAwesome name="star-o" size={16} color="black" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ListItem