import GameInfo from 'components/GameInfo';

function GameCard() {

const game = {
    id: 1,
    image: "https://media.ign.com/games/image/object/075/075105/fable_iii_lce.jpg",
    title: "Fable III",
    year: 2012,
    score: 4.5
};

return (
<div>
    <img className="gaminicon-game-card-image" src={game.image} alt={game.title} />
    <div className="gaminicon-card-bottom-container">  <h3>{game.title}</h3>
 <GameInfo />
     <div className="btn btn-primary gaminicon-btn">Avaliar</div>
 </div>
</div>
);

}
export default GameCard;
