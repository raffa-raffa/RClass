  import React, { useContext } from 'react';
  import CounterContext from '../context/CounterContext'; 

  const Home = () => {
    const { counter, setCounter } = useContext(CounterContext);

    return (
      <div>
        <h2>Home</h2>
        <p>Counter value: {counter}</p>
      </div>
    );
  };

  export default Home;
