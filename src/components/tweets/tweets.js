'use strict'

var React = require('react-native');
var {
  View,
  StyleSheet,
  Text
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Welcome back! Look at this list of tweets</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center'
  }
});
