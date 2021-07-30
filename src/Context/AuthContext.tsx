import { createContext, ReactNode, useReducer } from "react";
import { authReducer, AuthState } from "../Reducer/AuthReducer";
import { AuthActionType } from "../Reducer/type";
const { TOGGLE_AUTH } = AuthActionType;
interface AuthContextProps {
  children: ReactNode;
}
interface AuthContextDefault {
  authInfo: AuthState;
  toggleAuth: (username: string) => void;
}
const authDefaults = {
  isauthenticated: false,
  username: "",
};
export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authDefaults,
  toggleAuth: () => {},
});
const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [authInfo, dispatch] = useReducer(authReducer, authDefaults);
  const toggleAuth = (username: string) =>
    dispatch({
      type: TOGGLE_AUTH,
      payload: username,
    });
  const AuthContextData = {
    authInfo,
    toggleAuth,
  };
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
