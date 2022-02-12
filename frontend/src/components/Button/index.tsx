import { Link } from "react-router-dom";
import './styles.css'

export function Button(){
    return (
        <Link to='sing-up'>
<button className='gmnc-btn'>Sing Up</button>
        </Link>
    );
}