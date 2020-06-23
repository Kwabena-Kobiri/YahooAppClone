import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const AttachmentHeader = () =>{
    return(
        <View style={Styles.container}>
            <LinearGradient
                colors={['#f44336', '#2196f3']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 150,
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
                <Text style={Styles.head2Txt}>Attachments</Text>
            </View>
            <View style={Styles.head3}>
                <Text style={Styles.head3Txt1}>Files you send and receive</Text>
            </View>
            <View style={Styles.head4}>
                <Text style={Styles.head4Txt}>Files</Text>
                <Text style={Styles.head4Txt}>Photos</Text>
                <Text style={Styles.head4Txt}>Emails</Text>
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
        height:100,
        height:150
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
        paddingLeft:20
    },

    head3:{
        flexDirection:"row",
        color:'white',
        paddingLeft:20
    },

    head3Txt1:{
        color:'white',
        fontWeight:'bold',
        paddingBottom:5
    },

    head4:{
        flexDirection:'row',
        paddingLeft:15,
        paddingTop:5
    },

    head4Txt:{
        paddingRight:15,
        color:'white',
        //borderBottomWidth:0.5,
        //borderBottomColor:'white'
    }
})

export default AttachmentHeader