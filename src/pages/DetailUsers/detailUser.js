import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Image } from "react-bootstrap";
import NavbarComponent from "../../components/Navbar";
import UserDetailForm from "../../components/Forms/UserDetail";
import BreadcrumbComponent from "../../components/Breadcrumb";
import "./style.scss";

export default class DetailUser extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      isLoading: true,
      id: "",
      avatar: "",
      firstName: "",
      LastName: "",
      email: "",
    };
  }

  getUserById = (id) => {
    let url = "https://reqres.in/api/users/" + id;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          isLoading: false,
          id: res.data.data.id,
          avatar: res.data.data.avatar,
          firstName: res.data.data.first_name,
          LastName: res.data.data.last_name,
          email: res.data.data.email,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.getUserById(id);
  };

  render() {
    const breadcrumbItems = [
      { text: "List Users", url: "/users" },
      { text: "Detail User", url: "/users/" + this.state.id, active: true },
    ];
    return (
      <>
        <NavbarComponent></NavbarComponent>
        <section className="detail-user">
          <Container>
            <BreadcrumbComponent breadcrumbItems={breadcrumbItems} />
            <h1 className="mb-4">Detail User</h1>
            <Card>
              <Card.Body>
                {this.state.isLoading ? (
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                ) : (
                  <Row className="align-items-center">
                    <Col lg={5} md={5} sm={12}>
                      <div className="image-container">
                        <Image src={this.state.avatar} alt={this.state.avatar} roundedCircle/>
                      </div>
                    </Col>
                    <Col lg={7} md={7} sm={12}>
                      <UserDetailForm
                        id={this.state.id}
                        firstName={this.state.firstName}
                        LastName={this.state.LastName}
                        email={this.state.email}
                      />
                    </Col>
                  </Row>
                )}
              </Card.Body>
            </Card>
          </Container>
        </section>
      </>
    );
  }
}
