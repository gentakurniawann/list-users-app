import React from "react";
import LoginForm from "../../components/Forms/Login";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
import Media from "../../components/Media";
import "./style.scss"

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    let url = "https://reqres.in/api/login";
    axios.post(url, data)
    .then((res) => {
      if (res) {
        let token = res.data.token;
        localStorage.setItem("token", token);
        window.location = "/users";
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        window.alert("failed to login! Please check your Email and Password");
      } else {
        window.alert("failed to login! Please check your Email and Password");
      }
    });
  };

  render() {
    const disabled = this.state.email === "" || this.state.password === "";
    return (
      <>
        <section className="login-page">
          <Container>
            <Card className="card">
              <Row className="align-items-center">
                <Col lg={6} md={6} className="login-img"> <Media value image="login-img.png" width="100%"/></Col>
                <Col lg={6} md={6} sm={12} className="login-form">
                  <LoginForm
                    onChange={this.handleChange}
                    valueEmail={this.state.email}
                    valuePassword={this.state.password}
                    disabled={disabled}
                    onSubmit={(e) => this.handleLogin(e)}
                  />
                </Col>
              </Row>
            </Card>
          </Container>
        </section>
      </>
    );
  }
}
