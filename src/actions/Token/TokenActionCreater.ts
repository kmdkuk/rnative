import { ITokenChange } from "./TokenAction";
import TokenActionType from "./TokenActionType";

export function tokenChange(token: string): ITokenChange {
  return {
    type: TokenActionType.TOKEN_CHANGE,
    token: token
  }
}
