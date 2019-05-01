import React, { Component } from "react";
import Link from "next/link";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };
  }

  UpdateSearchQuery(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  render() {
    return (
      <>
        <input
          value={this.state.searchQuery}
          onChange={event => {
            this.UpdateSearchQuery(event);
          }}
        />
        <Link href={"/search?&query=" + this.state.searchQuery}>
          <a>Search</a>
        </Link>
      </>
    );
  }
}

export default Index;
