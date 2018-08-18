import UserState from "../../states/User/UserState";
import { UserAction } from "../../actions/User/UserAction";
import { UserActionType } from "../../actions/User/UserActionType";

const initialState: UserState = {
  id: 0
}

export default function userState(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case UserActionType.SELECT_USER:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
}
