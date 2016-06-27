import React from 'react';

export default (props) => {
  const image = props.image;
  const name = props.name;
  const price = props.price;
  const discount = props.discount;
  const salePrice = price - (price * (discount/100));
  return(
    <div>
      <div><img src={image} /> {name} ${price}, discount {discount}%, sale price ${salePrice}</div>
    </div>
  );
};
