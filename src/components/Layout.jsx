import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div id="mainContentsGuide"></div>
      {props.children}
      <Footer />
    </div>
  );
};

export { Layout };
