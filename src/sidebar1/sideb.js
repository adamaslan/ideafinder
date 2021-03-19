import React from "react";

import { Container, Nav } from "./sidestyle";
import { Link, Switch, Route } from "react-router-dom";

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="">Ideas</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Idea Database</span>
        </li>
        <li>
          <a href="">42 first points</a>
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
