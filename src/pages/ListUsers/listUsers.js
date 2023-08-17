import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import UserTable from "../../components/Tables/UserTable";
import { Table } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import NavbarComponent from "../../components/Navbar";
import "./style.scss";

export default class ListUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: true,
      activePage: 1,
      per_page: 0,
      total: 0,
      total_pages: 0,
    };
  }

  getUser = (page) => {
    let url = "https://reqres.in/api/users?page=" + page;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          isLoading: false,
          users: res.data.data,
          per_page: res.data.per_page,
          total: res.data.total,
          total_pages: res.data.total_pages,
        });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
        });
        console.log(err.message);
      });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber }, () => this.getUser(pageNumber));
  };

  componentDidMount = () => {
    this.getUser();
  };

  render() {
    return (
      <>
        <NavbarComponent></NavbarComponent>
        <section className="list-users">
          <Container>
            <h1 className="mb-4">List Users</h1>
            <Card>
              <Card.Body>
                {this.state.isLoading ? (
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                ) : (
                  <Table hover responsive="lg" className="mb-2">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Avatar</th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        {/* <th>Details</th> */}
                      </tr>
                    </thead>
                    {this.state.users.map((item, index) => {
                      return (
                        <UserTable
                          key={index}
                          number={index + 1}
                          avatar={item.avatar}
                          id={item.id}
                          firstName={item.first_name}
                          lastName={item.last_name}
                        />
                      );
                    })}
                  </Table>
                )}
                <Pagination size="sm" className="d-flex justify-content-end">
                  {this.state.activePage > 1 && (
                    <Pagination.Prev
                      onClick={() => this.handlePageChange(this.state.activePage - 1)}
                    />
                  )}
                  {Array.from({ length: this.state.total_pages }).map(
                    (_, index) => (
                      <Pagination.Item
                        key={index}
                        active={index + 1 === this.state.activePage}
                        onClick={() => this.handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    )
                  )}
                  {this.state.activePage < this.state.total_Pages && (
                    <Pagination.Next
                      onClick={() => this.handlePageChange(this.state.activePage + 1)}
                    />
                  )}
                </Pagination>
              </Card.Body>
            </Card>
          </Container>
        </section>
      </>
    );
  }
}
