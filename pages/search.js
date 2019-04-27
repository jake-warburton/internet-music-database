import React, { Component } from "react";
import { view } from "react-easy-state";

import GlobalStore from "../src/store/global.js";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      formattedSearchQuery: ""
    };
  }

  ComponentGetSearchResults() {
    let currentLocation = window.location.href;
    let searchParameters = new URLSearchParams(currentLocation);
    let queryArray = searchParameters.getAll("query");
    let newSearchQuery = queryArray[0];
    let newFormattedSearchQuery = newSearchQuery.replace(/ /gi, "+");
    this.setState({
      searchQuery: newSearchQuery,
      formattedSearchQuery: newFormattedSearchQuery
    });
    GlobalStore.GetSearchResults(newFormattedSearchQuery);
  }

  componentDidMount() {
    this.ComponentGetSearchResults();
  }

  render() {
    const { searchResultsArray } = GlobalStore;
    let arrayKey = 0;
    const formattedSearchResultsArray = searchResultsArray
      .slice(0, 30)
      .map(oneArtist => {
        console.log("One artist: ", oneArtist);
        return (
          <div key={arrayKey++}>
            <img src={oneArtist["image"][4]["#text"]} />
            {oneArtist["name"]}
            {oneArtist["listeners"]}
            {oneArtist["mbid"]}
          </div>
        );
      });
    return (
      <>
        <div>Search query: {this.state.searchQuery}</div>
        <div>{formattedSearchResultsArray}</div>
      </>
    );
  }
}

export default view(Index);
