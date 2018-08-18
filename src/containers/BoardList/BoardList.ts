import { connect } from "react-redux";
import BoardList from "../../components/BoardList/BoardList";
import IState from "../../states";
import { Dispatch } from "redux";
import { BoardAction } from "../../actions/Board/BoardAction";
import { BoardListConnectedProps } from "../../components/BoardList/BoardListProps";
import { selectBoard } from "../../actions/Board/BoardActionCreater";

function mapStateToProps(state: IState): BoardListConnectedProps {
  return {
    boardState: state.boardState
  };
}

function mapDispatchToProps(dispatch: Dispatch<BoardAction>) {
  return {
    onBoardSelect: (id: number) => {
      dispatch(selectBoard(id));
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(BoardList);
