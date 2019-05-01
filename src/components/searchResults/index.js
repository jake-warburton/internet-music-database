import React, { Component } from "react";
import Link from "next/link";
import { view } from "react-easy-state";

import GlobalStore from "../../store/global/";

import "./style.css";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      formattedSearchQuery: ""
    };
  }

  ComponentGetSearchResults() {
    if (this.state.formattedSearchQuery) {
      GlobalStore.GetSearchResults(this.state.formattedSearchQuery);
    }
  }

  UpdateSearchQuery(event) {
    let newSearchQuery;
    let newFormattedSearchQuery;

    if (event) {
      newSearchQuery = event.target.value;
      newFormattedSearchQuery = event.target.value;
    } else {
      let currentLocation = window.location.href;
      let searchParameters = new URLSearchParams(currentLocation);
      let queryArray = searchParameters.getAll("query");

      if (queryArray[0]) {
        newSearchQuery = queryArray[0];
        newFormattedSearchQuery = newSearchQuery.replace(/ /gi, "+");
      }
    }

    this.setState({
      searchQuery: newSearchQuery,
      formattedSearchQuery: newFormattedSearchQuery
    });

    GlobalStore.GetSearchResults(newFormattedSearchQuery);
  }

  componentDidMount() {
    this.UpdateSearchQuery();
  }

  render() {
    const { searchResultsArray } = GlobalStore;
    let arrayKey = 0;
    const formattedSearchResultsArray = searchResultsArray
      .slice(0, 30)
      .map(oneArtist => {
        return (
          <div key={arrayKey++}>
            <img src={oneArtist["image"][4]["#text"]} />
            <Link
              href={`/artist?&name=${oneArtist["name"]
                .replace(/ /gi, "+")
                .toLowerCase()}`}
              as={`/artist/${oneArtist["name"]
                .replace(/ /gi, "+")
                .toLowerCase()}`}
            >
              <a>{oneArtist["name"]}</a>
            </Link>
          </div>
        );
      });
    return (
      <>
        <Link href={`/`}>
          <a>Home</a>
        </Link>
        <div>Search query: {this.state.searchQuery}</div>
        <div>
          <input
            value={this.state.searchQuery}
            onChange={event => {
              this.UpdateSearchQuery(event);
            }}
          />
        </div>
        <div>{formattedSearchResultsArray}</div>
      </>
    );
  }
}

export default view(Index);
