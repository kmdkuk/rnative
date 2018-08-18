import * as React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

interface Props { };
export default class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native! and Rails5.0!!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
