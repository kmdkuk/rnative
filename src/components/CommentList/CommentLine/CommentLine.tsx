import * as React from 'react'
import CommentLineProps from './CommentLineProps';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { HOST_ADDR } from '../../../constants';

export default class CommentLine extends React.Component<CommentLineProps> {
  render() {
    const { rowData } = this.props;
    let pic = {
      uri: 'http://' + HOST_ADDR + '/images/hito-' + rowData.user.id + '.jpg'
    };
    return (
      <View style={styles.row} >
        <Image source={pic} style={{ width: 50, height: 50 }
        } />
        < Text style={styles.name} >
          {rowData.user.name}
        </Text>
        < Text style={styles.comment} >
          {rowData.comment}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 5
  },
  name: {
    width: 50
  },
  comment: {
    width: 280
  },
});
