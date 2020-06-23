import * as React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListItem from './components/Messages';
import Login from './components/Login';
import Login2 from './components/Login2';
import BottomTabNavigator from './navigation/BottomTabNavigator';

function LoginScreen({navigation}) {
  return (
    <View style={{paddingTop:5,alignItems:'center', backgroundColor:'white'}}>
        <Login/>
        <View style={styles.loginView}>
            <TouchableOpacity>
                <Text style={styles.login} onPress={() => navigation.push('login')}>Next</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.help}>
             <View>
                <TouchableOpacity>
                    <Text style={styles.helpText}>Stay signed in</Text>
                </TouchableOpacity>
             </View>
             <View>
                <TouchableOpacity>
                    <Text style={styles.helpText}>Forgot username? </Text>
                </TouchableOpacity>
             </View>
         </View>
         <View style={styles.createAccount}>
          <TouchableOpacity>
            <Text style={{color:'blue', fontWeight:'bold'}} onPress={() => navigation.push('registration')}>Create an account</Text>
          </TouchableOpacity>
         </View>
    </View>
  );
}

function Registration({navigation}){
  return(
    <View>
      <Text>Registration Form Under Construction</Text>
    </View>
  )
}

function Login2Screen({navigation}) {
  return (
    <View style={{paddingTop:5,alignItems:'center', backgroundColor:'white'}}>
        <Login2/>
        <View style={styles.loginView}>
            <TouchableOpacity>
                <Text style={styles.login} onPress={() => navigation.push('Home')}>Next</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.help}>
             <View>
                <TouchableOpacity>
                    <Text style={{marginTop:50, marginBottom:50, color:'blue'}}>Forgot Password? </Text>
                </TouchableOpacity>
             </View>
         </View>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name=" " component={BottomTabNavigator} />
    </Tab.Navigator>
  );
}

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="login" component={Login2Screen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="registration" component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loginView:{
    backgroundColor:'blue',
    borderRadius:20,
    marginTop: 20,
    width:300,
    height:30,
    justifyContent:'center',
    alignItems:'center'
},

login:{
  padding:5,
  margin:5,
  fontSize:15,
  fontWeight:'bold',
  color:'white'
},

help:{
  flexDirection:'row',
  marginTop:20,
  justifyContent:'space-between',
  alignItems:'flex-end'

},

helpText:{
  padding:10,
  margin:'',
  color:'blue'
},

createAccount:{
  width:300,
  height:30,
  margin:30,
  padding:10,
  borderRadius:25,
  borderWidth:1,
  borderColor:'blue',
  backgroundColor:'white',
  color:'blue',
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center'
}

})

export default App;
