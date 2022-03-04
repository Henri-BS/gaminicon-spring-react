import Explore from "components/pages/Explore";
import Home from "components/pages/Home/Home";
import Game from "components/pages/Games";
import Suporte from "components/pages/Support";
import Form from "components/Form/index ";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/NavBar";

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
            </BrowserRouter>
        </>
    );
}

export default Routes;