import Explorar from "components/pages/Explorar";
import Home from "components/pages/Home";
import Jogos from "components/pages/Jogos";
import Suporte from "components/pages/Suporte";
import Form from "components/Form/index ";
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