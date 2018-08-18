import { combineReducers } from 'redux';
import BoardState from './Board/BoardState';
import CommentState from './Comment/CommentState';
import TokenState from './Token/TokenState';
import userState from './User/UserState';

const rootReducer = combineReducers({
  boardState: BoardState,
  commentState: CommentState,
  tokenState: TokenState,
  userState: userState
});

export default rootReducer;
