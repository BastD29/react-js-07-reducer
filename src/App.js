import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action){
  // return {count: state.count + 1}
  switch (action.type){
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    default:
      return state;
  }
}

export default function App(){
  const [state, dispatch] = useReducer(reducer, {count: 0})
  // const [count, setCount] = useState(0);

  function increment(){
    // setCount(prevCount => prevCount + 1)
    dispatch({type: ACTIONS.INCREMENT});
  }

  function decrement(){
    // setCount(prevCount => prevCount - 1)
    dispatch({type: ACTIONS.DECREMENT});
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      {/* <span>{count}</span> */}
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}