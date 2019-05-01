import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import Layout from "../src/layouts/artist/";

import GlobalStore from "../src/store/global/";

const Index = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <Link href={`/`}>
      <a>Home</a>
    </Link>
    {console.log("Received data: ", props.artist)}
    <span>{props.artist.name}</span>
    <img src={props.artist["image"][4]["#text"]} />
    <span>Play count: {props.artist.stats.playcount}</span>
    <p>Artist info: {props.artist.bio.content}</p>
  </Layout>
));

Index.getInitialProps = async function(context) {
  const { name } = context.query;

  const res = await fetch(
    "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      name +
      "&api_key=" +
      GlobalStore.apiKey +
      "&format=json"
  );
  const data = await res.json();

  return {
    artist: data.artist
  };
};

export default Index;
