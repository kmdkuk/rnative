import * as React from 'react';
import {
  Text,
  View
} from 'react-native';
import CommentAddProps from './CommentAddProps';

export default class CommentAdd extends React.Component<CommentAddProps> {
  render() {
    return (
      <View style={{ flex: 4 }}>
        <Text>
          This is CommentAdd
      </Text>
      </View>
    )
  }
}
