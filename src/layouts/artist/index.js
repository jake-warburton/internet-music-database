import React, { Component } from "react";

import Header from "../../components/header/";

import "./style.css";

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {console.log(this.props)}
        {this.props.children}
      </div>
    );
  }
}

export default Index;
