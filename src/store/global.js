import { store } from "react-easy-state";

const Index = store({
  apiKey: "7ed2dfb8876bee16415978f0443ee2b6",
  GetSearchResults(searchQuery) {
    fetch(
      "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" +
        searchQuery +
        "&api_key=" +
        Index.apiKey +
        "&format=json"
    )
      .then(results => {
        if (results.status === 200) {
          return results.json(); //if the api call is okay, use the result set
        }
      })
      .then(array => {
        Index.searchResultsArray = array["results"]["artistmatches"]["artist"];
      });
  },
  searchResultsArray: []
});

export default Index;
