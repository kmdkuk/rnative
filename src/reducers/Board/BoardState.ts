import BoardState from "../../states/Board/BoardState";
import { BoardAction } from "../../actions/Board/BoardAction";
import { BoardActionType } from "../../actions/Board/BoardActionType";

const initialState: BoardState = {
  id: 0
}

export default function BoardState(state: BoardState = initialState, action: BoardAction): BoardState {
  switch (action.type) {
    case BoardActionType.SELECT_BOARD:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
}
