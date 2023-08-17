import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Media from "../Media";
import "./style.scss";

export default class NavbarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      token: "",
    };
    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token");
    } else {
      window.location = "/";
    }
  }

  handleLogout() {
    localStorage.clear();
    window.location = "/";
  }
  render() {
    return (
      <>
        <Navbar expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/users">
              <Media value image="logo-img.png" width="80%" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavDropdown
                  title={<Media value image="icon-profile.svg" />}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={this.handleLogout} className="dropdown-link">
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
