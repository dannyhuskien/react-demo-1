import React from 'react';

export default (props) => {
  const arr = props.arr;

  return(
    <ul>
      {arr.map((e,i) => <li key={i}>{e}</li>)}
    </ul>
  );
};
