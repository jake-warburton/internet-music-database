import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

import SearchBox from "../src/components/searchBox/";

const Index = withRouter(props => (
  <div>
    Home page
    <SearchBox />
  </div>
));

export default Index;
