import React from "react";

import Header from "../../components/header/";

import "./style.css";

const Index = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Index;
