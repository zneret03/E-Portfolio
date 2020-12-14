import React, { createContext, useReducer } from "react";

interface IContext {
  toggleSide: any;
  dispatch1: any;
  DarkState: any;
  dispatch2: any;
  darkTheme: any;
}

const GlobalContext = createContext({} as IContext);

interface PropTypes {
  children: React.ReactNode;
}

const toggleState: boolean = false;
const isDark: boolean = false;

const ACTIONS = {
  toggle: "toggleSide",
  isDark: "isDark",
};

const GlobalProvider: React.FC<PropTypes> = ({ children }) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case ACTIONS.toggle:
        return toggle(state, action);
      case ACTIONS.isDark:
        return Dark(state, action);
    }
  };

  const toggle = (toggleState: boolean, action: any) => {
    if (action.payload.isToggle) return (toggleState = true);
    if (!action.payload.isToggle) return (toggleState = false);
  };

  const Dark = (isDark: boolean, action: any) => {
    if (action.payload.isDark) return (isDark = true);
    if (!action.payload.isDark) return (isDark = false);
  };

  const [toggleSide, dispatch1] = useReducer<any>(reducer, toggleState);
  const [DarkState, dispatch2] = useReducer<any>(reducer, isDark);

  const darkTheme = DarkState ? "dark" : "light";

  return (
    <GlobalContext.Provider
      value={{ toggleSide, dispatch1, DarkState, dispatch2, darkTheme }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
