import Explore from "components/pages/Explore";
import Home from "components/pages/Home/Home";
import Games from "components/pages/Games";
import Suporte from "components/pages/Support/Suporte";
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
                    <Route path="/lista-de-jogos">
                        <Games />
                    </Route>
                    <Route path="/gmnc/form">
                        <Route path=":gameId" />
                        {<Form />}
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routes;