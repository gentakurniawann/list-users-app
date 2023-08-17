import React from "react";
import { Form } from "react-bootstrap";

export default class UserDetailForm extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-2 form-group" controlId="formBasicId">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              name="id"
              placeholder="ID"
              value={this.props.id}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-2 form-group" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              placeholder="First Name"
              value={this.props.firstName}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-2 form-group" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={this.props.LastName}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-2 form-group" controlId="formBasicEmail">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="E-mail"
              value={this.props.email}
              readOnly
            />
          </Form.Group>
        </Form>
      </>
    );
  }
}
