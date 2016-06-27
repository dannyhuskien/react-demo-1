//import App from './App';
import Sum from './Sum';
import React from 'react';
import Temp from './Temperature';
import Prod from './Product';
// Stat from './Statistics';
import Counter from './Counter';
import Greeting from './Greeting';
import Bucket from './Bucket';
import Weather from './Weather'
import { render } from 'react-dom';


// let tags = [];
// for(let i = 0; i < 10; i++) {
//   let rnd1 = Math.floor(Math.random() * 100);
//   let rnd2 = Math.floor(Math.random() * 100);
//   let tag = <Sum x={rnd1} y={rnd2} />
//   tags.push(tag);
// }



//render(<App x={3} y={2} />, document.getElementById('root'));
//render(<Sum x={3} y={2} />, document.getElementById('root'));
// render(
//   <div>
//     <Sum x={3} y={2} />
//     <Sum x={4} y={3} />
//     <Sum x={5} y={4} />
//   </div>, document.getElementById('root'));

// <Temp city='Chicago' tempf={95} />
  //<Stat nums={[1, 1, 2, 3, 4, 5, 6, 1, 8, 9]} />
// <Prod image='http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/air/ipad-air-witb-gray-cel-201410_GEO_US?wid=366&hei=519&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=Fzsl_0' name='ipad' price={1000} discount={10} />
  // <Counter start={15} like={true} />
render(
  <div>
    <Weather />
  </div>, document.getElementById('root'));
