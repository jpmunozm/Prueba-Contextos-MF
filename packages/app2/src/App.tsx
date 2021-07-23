import React , { useContext } from "react";
import ContainerContext from "app1/ContainerContext";
import {
  Action,
  CountProvider,
  useCountState,
  useCountDispatch
} from "app1/CountContext";


function CountDisplay() {
  const { count } = useCountState();
  const [renderCount, setRenderizou] = React.useState(0);

  function handleRender() {
    setRenderizou(renderCount + 1);
  }

  React.useEffect(handleRender, [count]);

  return (
    <>
    <div>{ count }</div>
    </>
  );
}

function Counter() {
  const dispatch = useCountDispatch();
  
  return (
    <>
      <button onClick={() => dispatch(Action.increment)}>
        Incrementa contador
      </button>
    </>
  );
}

export const App = () => {

  const { data } = useContext(ContainerContext);

  return (
    <>
      <div style={{ border: '2px dashed green', height: '95%', width: '99%', background: 'rgba(0, 255, 0, 0.2)' }}>
        <div> App Hija  - { data }</div>
        <div>Injectando datos al Context Api de container (app1) </div>
        <CountProvider>
          <CountDisplay />
          <Counter />
        </CountProvider>
      </div>
    </>
  )
};
