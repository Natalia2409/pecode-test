import './App.css';
import Menu from "./components/Menu";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import WatchList from "./components/WatchList/WatchList";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/" component={Characters}/>
            <Route path="/characters" component={Characters} />
            <Route path="/episodes" component={Episodes} />
            <Route path="/locations" component={Locations} />
            <Route path="/watchlist" component={WatchList} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
