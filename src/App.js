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
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Caro from "./Caro";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  const store = useStore();

  return (
    <Provider store={store}>
      <Article />

      <Router>
        <div>
          <Carousel breakPoints={breakPoints}>
            <Caro>1</Caro>
            <Caro>2</Caro>
            <Caro>3</Caro>
            <Caro>4</Caro>
            <Caro>5</Caro>
            <Caro>6</Caro>
            <Caro>7</Caro>
            <Caro>8</Caro>
          </Carousel>
        </div>

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
