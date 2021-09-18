import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";

import MyLink from "./components/MyLink/MyLink";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div>
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyLink to="/home">Home</MyLink>
              <MyLink to="/about">About</MyLink>
            </div>
          </div>
          <div className="col-xs-6">
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
