import { NavBar } from "./componentes/NavBar/NavBar";
import "./estilo.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./componentes/NavBar/NavBar.css";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { CartScreen } from "./componentes/CartScreen/CartScreen";
import { UiContextProvider } from "./context/UiContext";

function App() {



  return (
    <>
    <CartProvider>
      <UiContextProvider>
        
          <BrowserRouter>

            <NavBar />

            <Switch>

              <Route exact path="/">
                <ItemListContainer />
              </Route>

              <Route exact path="/categoria/:catId">
                <ItemListContainer />
              </Route>

              <Route exact path="/detail/:itemId">
                <ItemDetailContainer />
              </Route>

              <Route exact path="/cart">
                <CartScreen />
              </Route>
              
              <Route path="*">
                <Redirect to="/" />
              </Route>

            </Switch>

          </BrowserRouter>
     
      </UiContextProvider>
      </CartProvider>
    </>

  );
}

export default App;
