import {ReactComponent as Arrow} from 'assets/img/arrow.svg';

import './styles.css';


function Pagination(){

    return(
<div className="gmnc-pagination-container">
    <div className="gmnc-pagination-box">
        <button className="gmnc-pagination-button" disabled={true}>
            <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="gmnc-pagination-button" disabled={false}>
            <Arrow className="gmnc-flip-horizontal" />
        </button>
    </div>
</div>
    );
}

export default Pagination;