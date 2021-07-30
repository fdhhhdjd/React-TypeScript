import { AuthActionType } from "./type";
const { TOGGLE_AUTH } = AuthActionType;
export interface AuthState {
  isauthenticated: boolean;
  username: string;
}
type AuthAction = {
  type: AuthActionType;
  payload: string;
};
export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isauthenticated: !state.isauthenticated,
        username: action.payload,
      };
    default:
      return state;
  }
};
