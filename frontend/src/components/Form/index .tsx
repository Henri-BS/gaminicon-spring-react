import GameStatus from 'components/GameStatus';
import './styles.css'

function Form() {

    const game = {
        id: 1,
        image: "https://media.ign.com/games/image/object/075/075105/fable_iii_lce.jpg",
        title: "Fable III",
        year: 2012,
        score: 4.5
    };

    return (
        <>
            <div className="gaminicon-form-container">
                <img className="gaminicon-game-card-image" src={game.image} alt={game.title} />
                <div className="gaminicon-card-bottom-container">
                    <h3>"Fable III"</h3>               
                    <GameStatus />
                    <form className="gaminicon-form">
                        Avaliar:
                        <div className="form-group gaminicon-form-group">
                            <label htmlFor="email">Informe seu email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group gaminicon-form-group">
                            <label htmlFor="score">Informe sua avaliação</label>
                            <select className="form-control" id="score">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </form >
                    <div className="gaminicon-form-btn-container">
                        <button type="submit" className="btn btn-primary gmnc-form-btn">Salvar</button>
                    </div>
                    <button className="btn btn-primary gmnc-form-btn mt-3">Cancelar</button>
  
                 </div>
               
            </div>
            </>
    );
}

export default Form;