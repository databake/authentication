'use strict'

var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    Navigator,
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');

var ROUTES = {
    signin: Signin,
    signup: Signup,
    tweets: Tweets
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

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
