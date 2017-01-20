import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

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
        return (
            <View style={styles.container}>
                <Image
                    source={{
                    uri: this.state.picture
                }}
                    style={styles.photo}/>

                <View style={styles.textView}>
                    <Text style={styles.title}>
                        {`${this.state.title}`}
                    </Text>
                    <Text style={styles.location}>
                        {this.state.articleDate} | {this.state.category}
                    </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textView: {
        flexDirection: 'column',
        margin: 12,
    },
    title: {
        fontWeight:'600',
        fontSize: 18,
        
    },
    location: {
        fontSize: 14,
        color: 'rgba(127, 140, 141,1.0)',
        marginTop: 25,
    },
    photo: {
        height: 100,
        width: 100,
    },
    border: {
    padding: 3,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    borderStyle: 'solid'
  }
});
