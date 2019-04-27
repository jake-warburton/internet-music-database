import React, { Component } from "react";
import { withRouter } from "next/router";

import Layout from "../src/layouts/artist/";

const Index = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
));

export default Index;
