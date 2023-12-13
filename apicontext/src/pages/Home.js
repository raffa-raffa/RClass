// import React, { useContext } from 'react';
// import CounterContext from '../context/CounterContext'; 
import ChangeCounter from '../components/ChangeCounter';

import { useCounterContext } from '../hooks/useCounterContext';
const Home = () => {
  // const { counter} = useContext(CounterContext);
  const {counter} = useCounterContext()
  return (
    <div>
      <h2>Home</h2>
      <p>Counter value: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
