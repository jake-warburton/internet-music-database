import React from "react";
import { withRouter } from "next/router";

import Layout from "../src/layouts/search/";

import SearchResults from "../src/components/searchResults/";

const Index = withRouter(props => (
  <Layout>
    <SearchResults />
  </Layout>
));

export default Index;
