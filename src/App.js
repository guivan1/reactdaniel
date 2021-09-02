import { NavBar } from "./componentes/NavBar/NavBar";
import "./estilo.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./componentes/NavBar/NavBar.css";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
function App() {



  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Switch>

          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route exact path="/categoria/:elementos">
            <ItemListContainer />
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>

        </Switch>

      </BrowserRouter>

    </>

  );
}

export default App;
