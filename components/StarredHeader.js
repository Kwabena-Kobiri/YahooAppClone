import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const StarredHeader = () =>{
    return(
        <View style={Styles.container}>
            <LinearGradient
                colors={['#f44336', '#2196f3']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 100,
                }}
            />
            <View style={Styles.head1}>
                <View style={{margin:5, padding:5}}>
                    <FontAwesome5 name="user-circle" size={25} color="#eee" />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <View style={{margin:5, padding:5}}>
                        <Ionicons name="md-medkit" size={20} color="white" />
                    </View>
                    <View style={{margin:5, padding:5}}>
                        <FontAwesome5 name="pen" size={20} color="white" />
                    </View>
                    <View style={{margin:5, padding:5}}>
                        <Ionicons name="ios-search" size={20} margin={10} color="white" />
                    </View>
                </View>
            </View>
            <View style={Styles.head2}>
                <Text style={Styles.head2Txt}>Starred</Text>
            </View>
            <View style={Styles.head3}>
                <Text style={Styles.head3Txt1}>All messages that you've starred</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        //background: '#2196f3',  /* fallback for old browsers */
        //backgroundColor: -webkit-linear-gradient('to top', '#f44336', '#2196f3'),  /* Chrome 10-25, Safari 5.1-6 */
        //backgroundColor: linear-gradient('to top', '#f44336', '#2196f3'), /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        width:427,
        height:100
    },
    
    head1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10
    },

    head2Txt:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        padding:3
    },

    head2:{
        paddingLeft:15
    },

    head3:{
        flexDirection:"row",
        color:'white',
        paddingLeft:15
    },

    head3Txt1:{
        color:'white',
        fontWeight:'bold',
        paddingBottom:5
    }
})

export default StarredHeader