import Navbar from "components/NavBar";
import Explorar from "components/pages/Explorar";
import Home from "components/pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Navbar />
                    <Home />
                </Route>
                <Route path="/explorar">
                    <Explorar />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;