  import React, { useContext } from 'react'
  // import { useContext } from 'react'
  // import CounterContext from "../context/CounterContext"
  import { useCounterContext } from '../hooks/useCounterContext';
  import { useTitleColorContext } from '../hooks/useTitleColorContext';

  const About = () => {

    // const { counter, setCounter } = useContext(CounterContext);
    const {counter} = useCounterContext()
    const  setTitleColor = (color) => {
      dispatch({type: color})}
    const { color, dispatch } = useTitleColorContext();

    return (
      <div><h1 style={{color:color}}>About</h1>
      <p>Counter value: {counter}</p>
      <div><button onClick={()=> setTitleColor("RED")}>Vermelho</button>
        <button onClick={()=> setTitleColor("BLUE")}>Azul</button></div>
      </div>
      
      
    )
  }

  export default About