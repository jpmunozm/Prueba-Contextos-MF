import * as React from "react";


/* Esto solo lo estaba probando */

type State = { count: number };
type CountProviderProps = { children: React.ReactNode };

const Context = React.createContext<State | undefined>(undefined);

function useService() {
  const [service, setService] = React.useState({ count: 0 });

  return {
    ...service,
    setService,
  };
}

export function useServiceContext() {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error(
      "ServiceContext value is undefined. Make sure you use the ServiceProvider before using the context."
    );
  }

  return context;
}

/*
export function ServiceProvider({ children }: CountProviderProps) {
  const value = useService();
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
*/
function CountProvider({ children }: CountProviderProps) {
    const state = useService();
  
    return (
      <Context.Provider value={state}>

          {children}
 
      </Context.Provider>
    );
  }