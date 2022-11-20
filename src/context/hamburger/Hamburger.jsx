
import React from "react";

const Context = React.createContext();

function Provider({ children }) {
    const [navigate, setNavigate] = React.useState();

    return (
      <Context.Provider value={{ navigate, setNavigate }}>
        {children}
      </Context.Provider>
    );
}

export { Provider, Context };