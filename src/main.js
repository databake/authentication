'use strict'

var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    Navigator,
    TouchableHighlight,
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');
var Markets = require('./components/markets/markets');

var ROUTES = {
    signin: Signin,
    signup: Signup,
    markets: Markets
};


module.exports = React.createClass({

    componentWillMount: function() {
        Parse.initialize("YPVXCURrSNm4ZjOxGexJF9KKxpRUQ4zxMYo5DRYh","7yPvgmfKKrBRzpj8dosoZyVKEiCtEXG7psvVLLgI")
    },

    renderScene: function(route, navigator) {
        var Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator} />;
    },

    render: function() {
      return (
        <Navigator
          style={styles.container}
          initialRoute={{name: 'signin'}}
          renderScene={this.renderScene}
          configueScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
        />
      )
    }
});

var routeMapper = {
    LeftButton: function(route, navigator, index, navState) {
      return (<TouchableHighlight style={{padding: 15}} onPress={() => {
        if (index > 0) {
          navigator.pop();
        }
      }}>
        <Text>Back</Text>
      </TouchableHighlight>
    )
},
RightButton: function(route, navigator, index, navState) {
  return null;
},
Title: function(route, navigator, index, navState) {
  return (
    <Text style={styles.title}>{route.name}</Text>
  );
},
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigationBar: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'cornflowerblue',
    },
    title: {
      fontSize: 18,
      padding: 10,
      fontWeight: 'bold',
      color: 'white',
    }
});
