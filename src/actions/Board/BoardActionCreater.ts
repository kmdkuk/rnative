import { ISelectBoard, ICommentsRead, ITokenChange, ISelectUser } from "./BoardAction";
import { BoardActionType } from "./BoardActionType";
import { func } from "../../../node_modules/@types/prop-types";

export function selectBoard(id: number): ISelectBoard {
  return {
    type: BoardActionType.SELECT_BOARD,
    id: id
  }
}

export function commentsRead(comments: string): ICommentsRead {
  return {
    type: BoardActionType.COMMENTS_READ,
    comments: comments
  }
}

export function tokenChange(token: string): ITokenChange {
  return {
    type: BoardActionType.TOKEN_CHANGE,
    token: token
  }
}

export function selectUser(id: number): ISelectUser {
  return {
    type: BoardActionType.SELECT_USER,
    id: id
  }
}
