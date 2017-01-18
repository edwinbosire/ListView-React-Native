import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default class Row extends Component {

    constructor(props) {
        super(props)
        this.state = {
            picture: props.picture.large,
            firstName: props.name.first,
            lastName: props.name.last,
            location: props.location.state
        }
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
                    <Text style={styles.text}>
                        {`${this.state.firstName} ${this.state.lastName}`}
                    </Text>
                    <Text style={styles.location}>
                        {this.state.location}</Text>
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
        marginLeft: 12,
    },
    text: {
        fontWeight:'600',
        fontSize: 18
    },
    location: {
        marginTop: 5,
        fontSize: 14,
        color: 'rgba(127, 140, 141,1.0)',
    },
    photo: {
        height: 50,
        width: 50,
        borderRadius: 25
    }
});
