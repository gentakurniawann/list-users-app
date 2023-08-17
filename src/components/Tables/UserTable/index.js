import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
export default class UserTable extends React.Component {
  render() {
    return (
      <>
        <tbody>
          <tr>
            <td className="width-60">{this.props.number}</td>
            <td className="width-60">
              <img
                alt={this.props.avatar}
                src={this.props.avatar}
                width="50px"
                height="50px"
              />
            </td>
            <td className="width-60">{this.props.id}</td>
            <td className="width-120">{this.props.firstName}</td>
            <td className="width-120">{this.props.lastName}</td>
            <td className="width-120" style={{ textAlign: "end" }}>
              <Link
                to={"/users/" + this.props.id}
              >
                <Button className="btn-view-detail">View Detail</Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </>
    );
  }
}
