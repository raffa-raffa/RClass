  // import { useContext } from 'react';
  // import CounterContext from '../context/CounterContext';
  import ChangeCounter from '../components/ChangeCounter';

  import { useCounterContext } from '../hooks/useCounterContext';
  import { useTitleColorContext } from '../hooks/useTitleColorContext';

  const Home = () => {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    const { color, dispatch } = useTitleColorContext();

    const  setTitleColor = (color) => {
    dispatch({type: color})}
    return (
      <div>
        <h2 style={{ color: color }}>Home</h2>
        <p>Counter value: {counter}</p>
        <ChangeCounter />
        <div><button onClick={()=> setTitleColor("RED")}>Vermelho</button>
        <button onClick={()=> setTitleColor("BLUE")}>Azul</button></div>
      </div>
    );
  };

  export default Home;
