import { useEffect, useState } from 'react';

const CountDown = (props) => {
  // const { setIsDisabled } = props;
  const { setIsDisabled, time, setTime } = props;
  // const [count, setCount] = useState(10);

  // useEffect(() => {
  //   if (count <= 0) {
  //     setIsDisabled(true);
  //     return;
  //   }
  //   const idInternal = setInterval(() => {
  //     setCount(count - 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(idInternal);
  //   };
  // }, [count]);

  // return <div>{count}</div>;

  useEffect(() => {
    if (time <= 0) {
      setIsDisabled(true);
      return;
    }
    const idInternal = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => {
      clearInterval(idInternal);
    };
  }, [time]);

  return <div>{time}</div>;
};

export default CountDown;
