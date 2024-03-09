import React from "react";
import { Link } from "gatsby";
import * as styleUtils from "../util.module.css";
import * as styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div className={`${styleUtils.wrapper}`}>
        <div className={styles.footerContainer}>
          <Link to="/">RPS Apps</Link>
          <small>© Jankenman 2024</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
