import React, { createContext, useReducer } from "react";

interface IContext {
  toggleSide: any;
  dispatch: any;
}

const GlobalContext = createContext({} as IContext);

interface PropTypes {
  children: React.ReactNode;
}

const toggleState: boolean = false;

const ACTIONS = {
  toggle: "toggleSide",
};

const GlobalProvider: React.FC<PropTypes> = ({ children }) => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case ACTIONS.toggle:
        return toggle(state, action);
    }
  };

  const toggle = (toggleState: boolean, action: any) => {
    if (action.payload.isToggle) return (toggleState = true);
    if (!action.payload.isToggle) return (toggleState = false);
  };

  const [toggleSide, dispatch] = useReducer(reducer, toggleState);

  return (
    <GlobalContext.Provider value={{ toggleSide, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
