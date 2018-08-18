import { BoardActionType } from "./BoardActionType";

export interface ISelectBoard {
  type: BoardActionType.SELECT_BOARD
  id: number
}

export interface ICommentsRead {
  type: BoardActionType.COMMENTS_READ
  comments: string
}

export interface ITokenChange {
  type: BoardActionType.TOKEN_CHANGE
  token: string
}

export interface ISelectUser {
  type: BoardActionType.SELECT_USER
  id: number
}

export type BoardAction = ISelectBoard | ICommentsRead | ITokenChange | ISelectUser;
