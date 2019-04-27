import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 2
    };
  }

  render() {
    return <div>Test: {this.state.test} This home page</div>;
  }
}

export default Index;
