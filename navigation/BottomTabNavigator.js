import * as React from 'react';
import { Text, View, FlatList, ScrollView, Button} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import YahooNews from './NewsStack';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListItem from '../components/Messages';
import Header from '../components/Header';
import StarredHeader from '../components/StarredHeader';
import AttachmentHeader from '../components/AttachmentHeader';
import SubscriptionsHeader from '../components/SubscriptionsHeader';

const ListData = [
  {key:1, name:"Michael", message:"You are alive gh janbiponlobbkejbbskiiknkb",
  messageTitle:"Your Health Matters"}, 
  {key:2, name:"Solomon", message:"Hello hurbjbu jkauuuiu jqbuju",
  messageTitle:"Special Offer for your college"},
  {key:3, name:"Dan at Real Python", message:"How are you doing? biubuoi jbuiob jiuui",
  messageTitle:"New Python tutorials on Real Python"},
  {key:4, name:"zindi", message:"Assignment submission biquoi uibfoiu ibhu",
  messageTitle:"AkosuaNyarkoa invites you to join 'NsrommaUoG"},
  {key:5, name:"Eva at Product School", message:"See am boIBIU ILABCjb kbbijbcbbol",
  messageTitle:"Product's love/Hate relationship"},
  {key:6, name:"Quincy Larson", message:"Cool bidibbsidbib dnibubikbbivkk",
  messageTitle:"Machine Learning Algorithms explained"},
  {key:7, name:"Nancy Manko", message:"Sup nkbikbckaujc kjabjbcikujujub",
  messageTitle:"Find"},
  {key:8, name:"zindi", message:"Interesting bioagiug kajdghglkgdljgglv",
  messageTitle:"New discussion by Riaanj"},
  {key:9, name:"Coursera", message:"Hopefully tomorrow blisgdiugikugiululiu",
  messageTitle:"John Gies College of Business Next Week Online Seminar"},
  {key:10, name:"Kobiri", message:"At the kitchen bolaguifgcik jkguigcvilkg",
  messageTitle:"Getting Personal about Productivity"}
]

function HomeScreen() {
  return (
    <View style={{flexDirection:'column',flex:1,alignItems:'center'}}>
        <Header/>
       <FlatList
         //style={{}} 
         data= {ListData}
         renderItem={({item}) => <ListItem name={item.name} message={item.message} 
         messageTitle={item.messageTitle}/>}/>
    </View>
  );
}

function Starred() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View>
        <StarredHeader/>
      </View>
      <View style={{padding:40}}>
        <Text style={{fontWeight:'bold'}}>You have no Starred Messages!</Text>
      </View>
    </View>
  );
}

function Attachment() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View>
        <AttachmentHeader/>
      </View>
      <ScrollView horizontal={true} style={{marginTop:10, flex:1}}>
        <View style={{flexDirection:'row', borderRadius:10,paddingLeft:10,
          paddingRight:7, backgroundColor:'white', borderColor:'#eee', 
          height:25, paddingTop:3, marginRight:5}}>
          <Ionicons name="ios-send" size={18} color="blue" />
          <Text style={{color:'blue',paddingLeft:10}}>Sent</Text>
        </View>
        <View style={{flexDirection:'row', borderRadius:10,paddingLeft:10,
          paddingRight:7, backgroundColor:'white', borderColor:'#eee', 
          height:25, paddingTop:3, marginRight:5}}>
          <Entypo name="mail" size={18} color="blue" />
          <Text style={{color:'blue',paddingLeft:10}}>Received</Text>
        </View>
        <View style={{flexDirection:'row', borderRadius:10,paddingLeft:10,
          paddingRight:7, backgroundColor:'white', borderColor:'#eee', 
          height:25, paddingTop:3, marginRight:5}}>
          <FontAwesome name="star" size={18} color='blue'/>
          <Text style={{color:'blue',paddingLeft:10}}>Received</Text>
        </View>
        <View style={{flexDirection:'row', borderRadius:10,paddingLeft:10,
          paddingRight:7, backgroundColor:'white', borderColor:'#eee', 
          height:25, paddingTop:3, marginRight:5}}>
          <MaterialCommunityIcons name="file-pdf-box" size={18} color="blue" />
          <Text style={{color:'blue',paddingLeft:10}}>PDF</Text>
        </View>
        <View style={{flexDirection:'row', borderRadius:10,paddingLeft:10,
          paddingRight:7, backgroundColor:'white', borderColor:'#eee', 
          height:25, paddingTop:3, marginRight:5}}>
          <Feather name="file-text" size={18} color="blue" />
          <Text style={{color:'blue',paddingLeft:10}}>Word document</Text>
        </View>
        <View style={{flexDirection:'row', borderRadius:10,paddingLeft:10,
          paddingRight:7, backgroundColor:'white', borderColor:'#eee', 
          height:25, paddingTop:3, marginRight:5}}>
          <MaterialCommunityIcons name="google-spreadsheet" size={18} color="blue" />
          <Text style={{color:'blue',paddingLeft:10}}>Spreadsheet</Text>
        </View>
        <View style={{flexDirection:'row', borderRadius:10,paddingLeft:10,
          paddingRight:7, backgroundColor:'white', borderColor:'#eee', 
          height:25, paddingTop:3, marginRight:5}}>
          <MaterialCommunityIcons name="presentation-play" size={18} color="blue" />
          <Text style={{color:'blue',paddingLeft:10}}>Presentation</Text>
        </View>
        <View style={{flexDirection:'row', borderRadius:10,paddingLeft:10,
          paddingRight:7, backgroundColor:'white', borderColor:'#eee', 
          height:25, paddingTop:3, marginRight:5}}>
          <Foundation name="video" size={18} color="blue" />
          <Text style={{color:'blue',paddingLeft:10}}>Video</Text>
        </View>
        <View style={{flexDirection:'row', borderRadius:10,paddingLeft:10,
          paddingRight:7, backgroundColor:'white', borderColor:'#eee', 
          height:25, paddingTop:3, marginRight:5}}>
          <AntDesign name="sound" size={18} color="blue" />
          <Text style={{color:'blue',paddingLeft:10}}>Audio</Text>
        </View>
      </ScrollView>
      <View style={{justifyContent:'center', flex:3}}>
        <Text style={{fontWeight:'bold',fontSize:15}}>Sorry! You have no attachments</Text>
      </View>
    </View>
  );
}

function Subscriptions() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View>
        <SubscriptionsHeader/>
      </View>
      <View style={{padding:40}}>
        <Text style={{fontWeight:'bold'}}>You have no Subscriptions!</Text>
      </View>
    </View>
  );
}


function More({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigation.push({YahooNews})}>News</Text>
    </View>
  );
}

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Inbox',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-mail" />,
        }}
      />
      <BottomTab.Screen
        name="Starred"
        component={Starred}
        options={{
          title: 'Starred',
          tabBarIcon: ({ focused }) => <FontAwesome focused={focused} name="star" size={24}/>,
        }}
      />
      <BottomTab.Screen
        name="Attachment"
        component={Attachment}
        options={{
          title: 'Attachment',
          tabBarIcon: ({ focused }) => <MaterialIcons focused={focused} name="attach-file" size={24} />,
        }}
      />
      <BottomTab.Screen
        name="Subscriptions"
        component={Subscriptions}
        options={{
          title: 'Subscriptions',
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="email-mark-as-unread" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{
          title: 'More',
          tabBarIcon: ({ focused }) => <Entypo name="dots-three-vertical" size={24} color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
}
