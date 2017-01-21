import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

var moment = require('moment');

export default class Row extends Component {

    constructor(props) {
        super(props)
        this.state = {
            picture: props.photo,
            title: props.title,
            articleDate: props.articleDate,
            category: props.section[1].parent,
            story: props.story,
            caption: props.caption
        }
        console.log("State of a story", this.state)
    }
    render() {
        time = moment(this.state.articleDate).fromNow();
        return (
            <View style={styles.container}>
             <View style={styles.thumbnailContainer}>
               <Image source={{ uri: this.state.picture}} style={styles.photo}/>
               <Text style={styles.banner}>{time}{' | '}{this.state.category} </Text>
             </View>
                <View style={styles.textView}>
                    <Text style={styles.title}>{`${this.state.title}`}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    thumbnailContainer: {
        flex:1,
        height: 200,
        alignItems: 'stretch',
        flexDirection:'row',
    },
    photo: {
        flex: 1
    },
    banner: {
        right:0,
        bottom:0,
        padding:2,
        backgroundColor:'rgba(44, 62, 80,0.6)',
        position:'absolute',
        color: 'white',
        fontWeight: 'bold'
    },
    textView: {
        flex: 1,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'white',
        marginBottom: 5,
    },
    title: {
        fontWeight:'bold',
        fontSize: 20,
        margin: 3,
        
    },
    details: {
        flex:1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 5
  },
    timeStamp: {
        fontSize: 14,
        color: 'rgba(127, 140, 141,1.0)'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: 'black',
        borderStyle: 'solid',
        marginLeft:5,
        marginRight: 5
  },
  category: {
      
  }

});
