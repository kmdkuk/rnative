import * as React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Picker,
  Button
} from 'react-native';
import CommentAddProps from './CommentAddProps';

export default class CommentAdd extends React.Component<CommentAddProps> {
  render() {
    const { boardState, tokenState, userState, users, onCommentPost, onUserChange } = this.props
    let inpText: string;
    const Item = Picker.Item;
    let items: any = [];
    users.map((u: any) => {
      items.push(<Item key={u.id} label={u.name} value={u.id} />);
    })
    return (
      <View style={{ flex: 4 }}>
        <View>
          <TextInput
            style={styles.comment}
            placeholder="Let's comment..."
            onChangeText={(text) => inpText = text}
          />
          <View style={styles.row}>
            <Picker
              style={styles.picker}
              selectedValue={userState.id}
              onValueChange={(val) => {
                onUserChange(val);
              }}>
              {items}
            </Picker>

            <View style={styles.btn}>
              <Button
                onPress={() => {
                  onCommentPost(boardState.id, userState.id, inpText, tokenState.token);
                }}
                title="投稿" />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  comment: {
    width: 200
  },
  picker: {
    flex: 3,
  },
  btn: {
    flex: 2
  },
});
