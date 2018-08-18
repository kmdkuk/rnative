import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from '../../reducers';
import BoardList from '../../containers/BoardList/BoardList';
import CommentAdd from '../../containers/CommentAdd/CommentAdd';
import CommentList from '../../containers/CommentList/CommentList';
import { HOST_ADDR } from '../../constants';
import AppProps from './AppProps';


let store = createStore(rootReducer);

export default class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);

    let dsBoard = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = { dataSourceBoard: dsBoard, users: [] };
  }
  componentDidMount() {
    this.readInit();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            React Native! and Rails5.0!!
        </Text>
          <BoardList dsBoard={this.state.dataSourceBoard} />
          <CommentAdd users={this.state.users} />
          <CommentList />
        </View>
      </Provider>
    );
  }
  readInit() {
    let dsBoard = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    fetch('http://' + HOST_ADDR + '/board/readBoardAndUser')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSourceBoard: dsBoard.cloneWithRows(responseJson.boards),
          users: responseJson.users
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
