import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks"


export const config = {
  endpoint: `https://shopnow56.onrender.com`,
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      <BrowserRouter>
        <Switch> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Products} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/thanks" component={Thanks} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
