import { ISelectBoard } from "./BoardAction";
import { BoardActionType } from "./BoardActionType";

export function selectBoard(id: number): ISelectBoard {
  return {
    type: BoardActionType.SELECT_BOARD,
    id: id
  }
}
