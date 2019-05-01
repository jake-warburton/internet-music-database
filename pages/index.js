import React, { Component } from "react";
import Link from "next/link";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 2
    };
  }

  render() {
    return (
      <div>
        <Link href="/testpath">
          <a>Home</a>
        </Link>
        <Link href="/artist">
          <a>Artist</a>
        </Link>
        Test: {this.state.test} This home page
      </div>
    );
  }
}

export default Index;
