import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../store/greetingSlice';

const Greeting = () => {
  const message = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return <div>{message.message}</div>;
};

export default Greeting;
