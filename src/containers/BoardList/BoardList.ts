import { connect } from "react-redux";
import BoardList from "../../components/BoardList/BoardList";
import IState from "../../states";
import { Dispatch } from "redux";
import { BoardAction } from "../../actions/Board/BoardAction";

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
)(BoardList);
