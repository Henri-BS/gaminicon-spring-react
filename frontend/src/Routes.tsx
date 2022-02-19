import Explore from "components/pages/Explore";
import Home from "components/pages/Home/Home";
import Jogos from "components/pages/Jogos";
import Suporte from "components/pages/Suporte";
import Form from "components/Form/index ";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/NavBar";

const Routes = () => {
    return (
        <>
            <BrowserRouter> 
            <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/explorar">
                        <Explore />
                    </Route>
                    <Route path="/suporte">
                        <Suporte />
                    </Route>
                    <Route path="/lista-de-jogos">
                        <Jogos />
                    </Route>
                    <Route path="/form">
                        <Route path=":gameId" />
                        {<Form />}
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routes;