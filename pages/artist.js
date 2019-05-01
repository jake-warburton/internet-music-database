import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

import Layout from "../src/layouts/artist/";

const Index = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <Link href={`/`}>
      <a>Home</a>
    </Link>
    <Link href={`/artist?name=test`}>
      <a>test</a>
    </Link>
    <p>This is the blog post content.</p>
  </Layout>
));

export default Index;
