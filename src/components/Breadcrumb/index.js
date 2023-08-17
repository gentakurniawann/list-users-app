import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./style.scss"
export default class BreadcrumbComponent extends React.Component {
  render() {
    return (
      <>
        <Breadcrumb className="mb-3">
          {this.props.breadcrumbItems.map((item, index) => {
            return (
              <Breadcrumb.Item href={item.url} key={index} active={item.active}>
                {item.text}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </>
    );
  }
}
