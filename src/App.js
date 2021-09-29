import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStore } from "./redux/store";
import About from "./About";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Article from "./Article";
import Sidebar from "./sidebar1/sideb";
import Ideas from "./Ideas";

function App() {
  const store = useStore();

  return (
    <Provider store={store}>
      <Router>
        <div></div>

        <Sidebar />

        <Switch>
          <Route path="/about">
            <About stuff={{ stuff: true }} />
          </Route>
          <Route path="/Ideas">
            <Ideas />
          </Route>
          <Route path="/">
            <h3>Home</h3>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
