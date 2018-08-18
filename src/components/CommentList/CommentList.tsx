import * as React from 'react';
import {
  Text,
  View,
  ListView
} from 'react-native';
import CommentListProps from './CommentListProps';
import CommentLine from './CommentLine/CommentLine';

export default class CommentList extends React.Component<CommentListProps> {
  render() {
    const { commentState } = this.props
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    ds = ds.cloneWithRows(commentState.comments);
    return (
      <View style={{ flex: 12, padding: 10 }}>
        <ListView
          dataSource={ds}
          renderRow={(rowData) => {
            return (
              <CommentLine rowData={rowData} />
            )
          }}
        />
      </View>
    )
  }
}
