import { connect } from "react-redux";
import IState from "../../states";
import { Dispatch } from "redux";
import CommentAdd from "../../components/CommentAdd/CommentAdd";
import { CommentAddConnectedProps, CommentAddDispatchProps } from "../../components/CommentAdd/CommentAddProps";
import { HOST_ADDR } from "../../constants";
import { selectUser } from "../../actions/User/UserActionCreater";
import { UserAction } from "../../actions/User/UserAction";
import { commentsRead } from "../../actions/Comment/CommentActionCreater";
import { CommentAction } from "../../actions/Comment/CommentAction";

function mapStateToProps(state: IState): CommentAddConnectedProps {
  return {
    boardState: state.boardState,
    tokenState: state.tokenState,
    userState: state.userState
  };
}

function mapDispatchToProps(dispatch: Dispatch<UserAction | CommentAction>): CommentAddDispatchProps {
  return {
    onCommentPost: (sel_board: number, user_id: number, comment: string, token: string) => {
      fetch('http://' + HOST_ADDR + '/board/insertComment', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': token,
        },
        body: JSON.stringify({
          board_id: sel_board,
          user_id: user_id,
          comment: comment,
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          readComments(sel_board, dispatch);
        })
        .catch((error) => {
          console.error(error);
        });

    },
    onUserChange: (sel_user: number) => {
      dispatch(selectUser(sel_user));
    }
  };
}

function readComments(board_id: number, dispatch: Dispatch<UserAction | CommentAction>) {
  fetch('http://' + HOST_ADDR + '/board/readComments/' + board_id)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(commentsRead(responseJson.rows));
    })
    .catch((error) => {
      console.error(error);
    });
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(CommentAdd);
