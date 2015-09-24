'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var HelloWorld = React.createClass({
  render: function() {
    return (
    	<View>
    		<Text style={styles.text}>{text.title}</Text>
    	</View>
    );
  }
});

var styles = StyleSheet.create({
	text: {
	    color: 'black',
	    backgroundColor: 'white',
	    fontSize: 30,
	    margin: 80
  	}
});

module.exports = HelloWorld;