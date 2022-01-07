import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Button() {
  return (
   <Link to='sing-up'>
<button className= 'btn '>Sing Up</button>    
</Link>
  );
}

export default Button;
