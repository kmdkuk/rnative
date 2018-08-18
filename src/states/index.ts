import BoardState from "./Board/BoardState";
import CommentState from "./Comment/CommentState";
import TokenState from "./Token/TokenState";
import UserState from "./User/UserState";

export default interface IState {
  boardState: BoardState,
  commentState: CommentState,
  tokenState: TokenState,
  userState: UserState
}
