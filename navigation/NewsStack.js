import * as React from 'react';
//import { Text, View, FlatList, ScrollView, Button} from 'react-native';
import {WebView} from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';

const news = createStackNavigator();

function News(){
    return(
        <WebView source={{ uri: 'https://news.yahoo.com' }} 
            style={{ flex:1, marginTop: 20 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}/>
    );
  }

export default function YahooNews(){
    return (
      <news.Navigator>
        <news.Screen name="YahooNews " component={News} />
      </news.Navigator>
    );
  }