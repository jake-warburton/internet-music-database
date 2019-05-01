import React from "react";

import Header from "../../components/header/";

import "./style.css";

const Index = props => (
  <div>
    <Header />
    This search page
    {props.children}
  </div>
);

export default Index;
