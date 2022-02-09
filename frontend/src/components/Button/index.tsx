import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function Button() {
  return (
   <Link to='login'>
<button className= 'gaminicon-btn '>Login</button>    
</Link>
  );
}

export default Button;
