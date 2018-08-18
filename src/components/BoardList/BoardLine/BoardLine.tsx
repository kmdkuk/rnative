import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import BoardLineProps from './BoardLineProps';

export default class BoardLine extends React.Component<BoardLineProps> {
  render() {
    const { active, rowData, onPress } = this.props
    let styleTitle = [styles.title];
    if (active) {
      styleTitle = [styles.title, styles.active];
    }
    return (
      <View style={styles.row}>
        <Text style={styleTitle}>{rowData.title}</Text>
        <Button
          onPress={() => {
            onPress(rowData.id)
          }}
          title="select" />

      </View>
    )
  }
}
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  title: {
    width: 300
  },
  active: {
    backgroundColor: "#58aacc"
  },
});
