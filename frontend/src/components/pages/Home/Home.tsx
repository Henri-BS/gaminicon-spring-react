
import GameCard from 'components/GameCard';
import Pagination from 'components/Pagination';
import './styles.css'

export default function Home() {
  return (
    <>  
    <div className="container">
      <Pagination />
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <GameCard />
          </div>
        </div>
        </div>
    </>
  );
}