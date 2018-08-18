import BoardState from "../../states/Board/BoardState";

export interface BoardListOwnProps {
  dsBoard: any;
}

export interface BoardListConnectedProps {
  boardState: BoardState
}

export interface BoardListDispatchProps {
  onBoardSelect: (id: number) => void;
}

type BoardListProps = BoardListOwnProps & BoardListConnectedProps & BoardListDispatchProps
export default BoardListProps;
