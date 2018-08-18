import TokenState from "../../states/Token/TokenState";
import { TokenAction } from "../../actions/Token/TokenAction";
import { TokenActionType } from "../../actions/Token/TokenActionType";

const initialState: TokenState = {
  token: ""
}

export default function tokenState(state: TokenState = initialState, action: TokenAction): TokenState {
  switch (action.type) {
    case TokenActionType.TOKEN_CHANGE:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
}
