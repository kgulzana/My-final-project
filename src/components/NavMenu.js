import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-nav,
  .nav-link {
    color: #3b3951;
  }
  .menu-link {
    &: hover {
      border-bottom: 5px solid #0037a6;
    }
  }
`;

export default function NavMenu() {
  return (
    <Styles>
      <Navbar collapseOnSelect className="nav-menu">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="menu-list">
              <Nav.Link className="menu-link">
                <Link to="/Categories">Категории</Link>
              </Nav.Link>
              <Nav.Link className="menu-link">
                <Link to="/NewItems">Новинки</Link>
              </Nav.Link>
              <Nav.Link className="menu-link">
                <Link to="/Promotions">Акции</Link>
              </Nav.Link>
              <Nav.Link className="menu-link">
                <Link to="/Sales">Распродажа</Link>
              </Nav.Link>
              <Nav.Link className="menu-link">
                <Link to="/WhatElse">Что еще почитать?</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
}
