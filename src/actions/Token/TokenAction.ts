import TokenActionType from "./TokenActionType";

export interface ITokenChange {
  type: TokenActionType.TOKEN_CHANGE
  token: string
}

export type TokenAction = ITokenChange;
