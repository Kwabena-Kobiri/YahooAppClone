import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

const YahooImage = require("../assets/images/LoginIcon.png");

const Login2 = () =>{
    return(
        <View style={styles.loginContainer}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={YahooImage} style={{width:100, height:50}}/>
            </View>
            <View style={styles.head}>
                <Text style={styles.headText}>Enter Password</Text>
                <View style={styles.name}>
                    <Text style={styles.headText1}>to finish sign in </Text>
                </View>
            </View>
            <View><Text style={styles.headTxt}>Password</Text></View>
            <View>
                <TextInput style={styles.textInput} secureTextEntry={true}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1
    },

    head:{
        justifyContent:'center',
        alignItems:'center',
        margin:30,
        padding:5
    },

    headText:{
        fontWeight:'200',
        fontSize:20,
        fontWeight:'Bold'
    },

    headText1:{
        fontSize:15,
        fontStyle:'normal',
        fontWeight:'Bold',
        alignContent:'center'
    },

    headTxt:{
        fontWeight:'Bold'
    },

    name:{
        flexDirection:'row',
        padding:8

    },

    textInput:{
        width:300,
        height:35,
        borderBottomColor:'blue',
        borderBottomWidth:1,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
});

export default Login2