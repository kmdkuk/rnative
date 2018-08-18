import { connect } from "react-redux";
import BoardList from "../../components/BoardList/BoardList";
import IState from "../../states";
import { Dispatch } from "redux";
import { BoardAction } from "../../actions/Board/BoardAction";
import { BoardListConnectedProps, BoardListDispatchProps } from "../../components/BoardList/BoardListProps";
import { selectBoard } from "../../actions/Board/BoardActionCreater";
import { CommentAction } from "../../actions/Comment/CommentAction";
import { TokenAction } from "../../actions/Token/TokenAction";
import { HOST_ADDR } from "../../constants";
import { commentsRead } from "../../actions/Comment/CommentActionCreater";
import { tokenChange } from "../../actions/Token/TokenActionCreater";

type Action = BoardAction | CommentAction | TokenAction;

function mapStateToProps(state: IState): BoardListConnectedProps {
  return {
    boardState: state.boardState
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>): BoardListDispatchProps {
  return {
    onBoardSelect: (id: number) => {
      dispatch(selectBoard(id));
      readCommentsAndRefresh(id, dispatch);
    }
  };
}

function readCommentsAndRefresh(id: number, dispatch: Dispatch<Action>) {
  fetch('http://' + HOST_ADDR + '/board/readComments/' + id)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(commentsRead(responseJson.rows));
      dispatch(tokenChange(responseJson['X-CSRF-Token']));
    })
    .catch((error) => {
      console.error(error);
    });
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(BoardList);
