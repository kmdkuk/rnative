import UserActionType from "./UserActionType";
import { ISelectUser } from "./UserAction";


export function selectUser(id: number): ISelectUser {
  return {
    type: UserActionType.SELECT_USER,
    id: id
  }
}
