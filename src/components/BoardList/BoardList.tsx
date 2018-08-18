import * as React from 'react'
import {
  View,
  ListView
} from 'react-native';
import BoardListProps from './BoardListProps';
import BoardLine from './BoardLine/BoardLine';

export default class BoardList extends React.Component<BoardListProps> {
  render() {
    const { dsBoard, boardState, onBoardSelect } = this.props;
    return (
      <View style={{ flex: 4 }}>
        <ListView
          dataSource={dsBoard}
          renderRow={(rowData) => {
            let act = rowData.id == boardState.id ? true : false;
            return (
              <BoardLine
                active={act}
                rowData={rowData}
                onPress={(id) => onBoardSelect(id)}
              />
            )
          }}
        />
      </View>
    );
  }

}
