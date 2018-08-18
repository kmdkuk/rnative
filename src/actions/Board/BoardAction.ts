import { BoardActionType } from "./BoardActionType";

export interface ISelectBoard {
  type: BoardActionType.SELECT_BOARD
  id: number
}

export type BoardAction = ISelectBoard;
