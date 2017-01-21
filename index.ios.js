/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, NavigatorIOS, StatusBar} from 'react-native';
import Feed from './components/Feed';

export default class ListViewDemo extends Component {

componentDidMount() {
}
  _renderScene(route, navigator) {
    <StatusBar barStyle='light-content' />
    var scene = route.component;
    return (<Feed navigator={navigator} route={route}/>)
  }
  render() {
    return (<NavigatorIOS
              style={styles.container}
              translucent={false}
              barTintColor={'rgba(52, 73, 94,1.0)'}
              tintColor={'white'}
              titleTextColor={'white'}
              renderScene={this._renderScene}
              initialRoute={{
                component: Feed,
                title: "News",
                passProps:{}
              }}
              />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
