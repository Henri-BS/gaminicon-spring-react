import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Button() {
  return (
   <Link to='login'>
<button className= 'btn '>Login</button>    
</Link>
  );
}

export default Button;
