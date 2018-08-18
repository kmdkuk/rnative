import { connect } from "react-redux";
import IState from "../../states";
import { Dispatch } from "redux";
import { BoardAction } from "../../actions/Board/BoardAction";
import CommentList from "../../components/CommentList/CommentList";
import { CommentListConnectedProps } from "../../components/CommentList/CommentListProps";

function mapStateToProps(state: IState): CommentListConnectedProps {
  return {
    commentState: state.commentState
  };
}

function mapDispatchToProps(dispatch: Dispatch<BoardAction>) {
  return {
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(CommentList);
