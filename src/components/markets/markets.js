'use strict'

var React = require('react-native');
var {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
} = React;

var ScrollableTabView = require('react-native-scrollable-tab-view');
var deviceWidth = Dimensions.get('window').width;

module.exports = React.createClass({
  render: function() {
    return(
      <View style={styles.container}>
        <ScrollableTabView>
          <ScrollView tabLabel="Markets" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Markets</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="Popular" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Popular</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="Currencies" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Currencies</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
     borderWidth: 1,
     backgroundColor: '#fff',
     borderColor: 'rgba(0,0,0,0.1)',
     margin: 5,
     height: 150,
     padding: 15,
     shadowColor: '#ccc',
     shadowOffset: {width: 2, height: 2},
     shadowOpacity: 0.5,
     shadowRadius: 3,
   },
   tabView: {
    width: deviceWidth,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
});
