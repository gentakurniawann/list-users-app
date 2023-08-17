import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Media from "../../components/Media";
import "./style.scss";
export default class Error404 extends React.Component {
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
  render() {
    return (
      <>
        <section className="error-404">
          <Container>
            <Card>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <div>
                  <Media value image="error404-img.png" />
                  <h3 className="text-center">Page Not Found</h3>
                  <p className="text-center">
                    The page you are looking for does not seem to exist
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link to="/users">
                      <Button>Go To List Users</Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </section>
      </>
    );
  }
}
