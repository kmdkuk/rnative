import CommentState from "../../states/Comment/CommentState";
import { CommentAction } from "../../actions/Comment/CommentAction";
import { CommentActionType } from "../../actions/Comment/CommentActionType";

const initialState: CommentState = {
  comments: ""
}

export default function CommentState(state: CommentState = initialState, action: CommentAction): CommentState {
  switch (action.type) {
    case CommentActionType.COMMENTS_READ:
      return {
        ...state,
        comments: action.comments
      };
    default:
      return state;
  }
}
