import React from "react";
import { Layout } from "../components/Layout";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>This is Index Page.</h1>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>RPS Apps</title>;
