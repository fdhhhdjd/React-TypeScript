import { createContext, ReactNode } from "react";

interface ProgressContextProviderProps {
  children: ReactNode;
}
interface ProgressDefault {
  lastTime: string;
  status: string;
}
const progressDefault = {
  lastTime: "31-05-2021",
  status: "In Progress",
};
export const ProgressContext = createContext<ProgressDefault>(progressDefault);
const ProgressContextProvider = ({
  children,
}: ProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};
export default ProgressContextProvider;
