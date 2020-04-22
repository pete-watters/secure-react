import React from 'react';
import { Link } from 'react-router-dom';

const Ramen = () => (
  <div>
    <h2>Ramen</h2>
    <div><Link to='/'>Home</Link></div>
    <div><img src="https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg" /></div>
  </div>
);

export default Ramen;