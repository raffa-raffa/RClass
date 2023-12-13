  import React, { useContext } from 'react'
  // import { useContext } from 'react'
  // import CounterContext from "../context/CounterContext"
  import { useCounterContext } from '../hooks/useCounterContext';

  const About = () => {

    // const { counter, setCounter } = useContext(CounterContext);
    const {counter} = useCounterContext()
    return (
      <div><h1>About</h1>
      <p>Counter value: {counter}</p>
      </div>
    )
  }

  export default About