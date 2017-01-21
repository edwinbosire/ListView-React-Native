import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TextInput,
    ActivityIndicator
} from 'react-native';
import Row from './Row';
import Header from './Header';
import Footer from './Footer';
import Data from '../resources/demoData';

export default class Feed extends Component {
    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false,
            isAnimating: true,
            isRefreshing: false,
            feedURL: 'https://raw.githubusercontent.com/edwinbosire/ListView-React-Native/master/resources/business.json'
        };
    }

    componentDidMount() {
        this.fetchNews()
    }

    filterNews(news = []) {
        console.log("remote data", news)
        return new Promise((res, rej) => {
            const filtered = news.filter(item => {
                return item.language === 'en-us'
            })
            res(filtered);
        })
    }
    fetchNews() {
        this.setState({isRefreshing: true})

        fetch(this.state.feedURL).then((response) => response.json()).then((newsItems) => {
            this.setState({
                dataSource: this
                    .state
                    .dataSource
                    .cloneWithRows(newsItems),
                loaded: true,
                isRefreshing: false,
                isAnimating: false
            })
        }).done();
    }

    renderNewsFeed() { 
        return (
        < ListView style = {styles.container}
            dataSource = {this.state.dataSource}
            renderRow = {(rowData) => <Row {...rowData}/>}
            // renderSeparator = {(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
            // renderHeader = {() => <Header/>}
            renderFooter = {() => <Footer/>} 
        />
        );
    }

    renderLoadingIndicator() {
        return(
         <View style = {{flexDirection: 'row', justifyContent: 'center', flex: 1}} > 
            <ActivityIndicator
                animating={this.state.animating}
                style={[ styles.centering, {height: 80}]}
                size="large"/>
        </View>
        );
    }

    render() {
        return this.state.animating? this.renderLoadingIndicator() : this.renderNewsFeed()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(236, 240, 241,1.0)',
        marginBottom:60
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E'
    },
    input: {
        height: 30,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 2
    },
    centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
});