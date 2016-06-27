import React from 'react';

export default (props) => {
  const city = props.city;
  const tempf = props.tempf;
  const tempc = (tempf - 32) * (5/9)
  return(
    <div>
      <div>{city} {tempf} deg F, {tempc} deg C</div>
    </div>
  );
};
