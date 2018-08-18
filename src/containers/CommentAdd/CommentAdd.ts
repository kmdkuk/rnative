import { connect } from "react-redux";
import IState from "../../states";
import { Dispatch } from "redux";
import { BoardAction } from "../../actions/Board/BoardAction";
import CommentAdd from "../../components/CommentAdd/CommentAdd";

function mapStateToProps(state: IState) {
  return {
  };
}

function mapDispatchToProps(dispatch: Dispatch<BoardAction>) {
  return {
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(CommentAdd);
