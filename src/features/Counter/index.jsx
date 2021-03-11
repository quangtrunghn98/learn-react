import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      Counter: {count}
      <div>
        <Button variant="contained" color="secondary" onClick={handleIncreaseClick}>Increase</Button>
        <Button variant="contained" color="secondary" onClick={handleDecreaseClick}>Decrease</Button>
      </div>
    </div>
  );
}

export default CounterFeature;
