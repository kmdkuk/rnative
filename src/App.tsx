import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from './reducers';
import BoardList from './containers/BoardList/BoardList';
import CommentAdd from './containers/CommentAdd/CommentAdd';
import CommentList from './containers/CommentList/CommentList';


let store = createStore(rootReducer);

interface Props { };
export default class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            React Native! and Rails5.0!!
        </Text>
          <BoardList />
          <CommentAdd />
          <CommentList />
        </View>
      </Provider>
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
