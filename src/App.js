import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Random from "./components/Random";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
