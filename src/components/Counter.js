import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../Store/Counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  console.log(counter);
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };
  const incrementHandler = () => {
    dispatch(counterAction.increment());
    // dispatch({type : 'INCREMENT'});
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
    // dispatch({type : 'DECREMENT'});
  };
  const increse = () => {
    dispatch(counterAction.increse(10));
    // dispatch({type : 'INCREMENTBY2'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>toggle counter</button>
      <div className={classes.btnContainer}>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={increse}>INCREMENT BY 10</button>
      </div>
    </main>
  );
};

export default Counter;
