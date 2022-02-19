import GameStars from "components/GameStars";
import "./styles.css"
function GameInfo() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="gmnc-info-container">
            <p className="gmnc-info-value">{score > 0 ? score.toFixed(1) : '-'} </p>
            <GameStars />
            <p className="gmnc-info-count">{count} avaliações</p>
        </div>
    );
}

export default GameInfo;