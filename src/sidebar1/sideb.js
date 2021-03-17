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
          <a href="">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="">Seus Daily Mix</a>
        </li>
        
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Melhores do rock</a>
        </li>
      </Nav>
    </div>
  
  </Container>
);

export default Sidebar;
