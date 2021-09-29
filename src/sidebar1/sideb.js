import React from "react";

import { Container, Nav } from "./sidestyle";
import { Link, Switch, Route } from "react-router-dom";

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Ideas">Ideas</Link>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Idea Database</span>
        </li>
        <li>
          <a href="http://www.chillcastle.com/151ideas">151 points</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Coding gurus</span>
        </li>
        <li>
          <a href="https://explorejs.com/#/">Explore JS</a>
        </li>
      </Nav>
    </div>
  </Container>
);

export default Sidebar;
