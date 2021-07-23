import React , { useContext } from "react";
import * as Remote from "app2/App";
import UserContext from "app2/UserContext";


export const App = () => {
  const { data } = useContext(UserContext);

  return (
    <div style={{ border: '2px dashed blue', height: '95%', width: '99%', background: 'rgba(42, 97, 160, 0.2)' }}>
      App Container - { data }
      <Remote.App greeting="Greeting from props" />
    </div>
  );
};
