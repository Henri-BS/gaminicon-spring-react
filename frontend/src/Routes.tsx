import Explore from "pages/Explore";
import Home from "pages/Home/Home";
import Game from "pages/Games";
import Suporte from "pages/Support";
import Form from "components/Form/index ";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/NavBar";
import Footer from "components/Footer";

const Routes = () => {
    return (
        <>
        
            <BrowserRouter> 
            <Navbar />
                <Switch>
                    <Route path="/gmnc" exact>
                        <Home />
                    </Route>
                    <Route path="/explorar">
                        <Explore />
                    </Route>
                    <Route path="/suporte">
                        <Suporte />
                    </Route>
                    <Route path="/gmnc/game">
                        <Route path=":gameId" />
                        {<Game />}
                    </Route>
                    
                </Switch>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Routes;