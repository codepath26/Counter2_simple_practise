import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);
  console.log(counter);
  const toggleCounterHandler = () => {};
  const incrementHandler = ()=>{
    dispatch({type : 'INCREMENT'});
  }
  const decrementHandler = ()=>{
    dispatch({type : 'DECREMENT'});
  }
  const increment2Handler = ()=>{
    dispatch({type : 'INCREMENTBY2'});
  }
  const decrement2Handler = ()=>{
    dispatch({type : 'DECREMENTBY2'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>toggle counter</button>
      <div >
      <button className={classes.buttons} onClick={incrementHandler}>INCREMENT</button>
      <button className={classes.buttons} onClick={decrementHandler}>DECREMENT</button>
      <button className={classes.buttons} onClick={increment2Handler}>INCREMENT BY 2</button>
      <button className={classes.buttons} onClick={decrement2Handler}>DECREMENT BY 2</button>
      </div>
    </main>
  );
};

export default Counter;
