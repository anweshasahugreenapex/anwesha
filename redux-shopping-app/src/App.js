import "./App.css";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
     <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
