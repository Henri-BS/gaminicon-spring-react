import Jogado from "assets/img/jogado.svg"
import Jogando from "assets/img/jogando.svg"
import Pausado from "assets/img/pausado.svg"
import Dropado from "assets/img/dropado.svg"

import "./styles.css"

function GameStatus() {
return (
<div className="gmnc-game-status-container">   
Adicionar a lista:
    <div className="row">
     
        <div className="col-sm-3 col-md-3 col-lg-3 gmnc-status-content">
            <img className="gmnc-icon-container " src={Jogado} alt="jogado"/>
            Jogado
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 gmnc-status-content">
            <img className="gmnc-icon-container " src={Jogando} alt="jogando"/>
            Jogando
        </div>
        <div className="col-sm-9 col-md-3 col-lg-3 gmnc-status-content">
            <img className="col-sm-4 gmnc-icon-container " src={Pausado} alt="pausado"/>
            Pausado
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 gmnc-status-content">
            <img className="gmnc-icon-container " src={Dropado} alt="dropado"/>
            Dropado
        </div>
        </div>
</div>
);

}
export default GameStatus;