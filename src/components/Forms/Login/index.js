import React from "react";
import "./style.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Media from "../../Media";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  handleClickShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  renderShowPassword() {
    return (
      <span className="btn-icon" onClick={this.handleClickShowPassword}>
        {this.state.showPassword ? (
          <Media value image="icon-visibilityOn.svg" />
        ) : (
          <Media value image="icon-visibilityOff.svg" />
        )}
      </span>
    );
  }

  render() {
    return (
      <>
        <div className="login-form">
          <div className="mb-5 logo">
            <Media value image="logo-img.png" />
          </div>
          <h3 className="mb-4">Log In</h3>
          <Form onSubmit={this.props.onSubmit}>
            <Form.Group className="mb-2 form-group" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={this.props.onChange}
                value={this.props.valueEmail}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-4 form-group"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type={this.state.showPassword ? "text" : "password"}
                  name="password"
                  placeholder="******"
                  onChange={this.props.onChange}
                  value={this.props.valuePassword}
                  required
                />
                {this.renderShowPassword()}
              </div>
            </Form.Group>
            <Button
              type="submit"
              className="btn-login"
              disabled={this.props.disabled}
            >
              Log In
            </Button>
          </Form>
        </div>
      </>
    );
  }
}
