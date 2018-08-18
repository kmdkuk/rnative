import BoardState from "../../states/Board/BoardState";
import TokenState from "../../states/Token/TokenState";
import UserState from "../../states/User/UserState";

export interface CommentAddOwnProps {
  users: any;
}
export interface CommentAddConnectedProps {
  boardState: BoardState;
  tokenState: TokenState;
  userState: UserState;
}

export interface CommentAddDispatchProps {
  onCommentPost: (sel_board: number, user_id: number, comment: string, token: string) => void;
  onUserChange: (sel_user: number) => void;
}

type CommentAddProps = CommentAddOwnProps & CommentAddConnectedProps & CommentAddDispatchProps;
export default CommentAddProps;
