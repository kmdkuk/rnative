import UserActionType from "./UserActionType";

export interface ISelectUser {
  type: UserActionType.SELECT_USER
  id: number
}

export type UserAction = ISelectUser;
