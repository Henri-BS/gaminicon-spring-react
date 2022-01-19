import Navbar from "components/NavBar";
import Explorar from "components/pages/Explorar";
import Home from "components/pages/Home";
import Jogos from "components/pages/Jogos";
import Suporte from "components/pages/Suporte";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/explorar">
                    <Explorar />
                </Route>
                <Route path="/suporte">
                <Suporte />
                </Route>
                <Route  path="/lista-de-jogos">
                    <Jogos />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    );
}

export default Routes;