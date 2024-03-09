import React from "react";
import { Link } from "gatsby";
import * as styleUtils from "../util.module.css";
import * as styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <a href="#mainContentsGuide" className={styles.mainContentsGuide}>メインコンテンツへ</a>
      <div className={`${styles.header} ${styleUtils.wrapper}`}>
        <h1>
          <Link to="/">RPS Apps</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">トップ</Link>
            </li>
            <li>
              <Link to="/terms/terms">利用規約</Link>
            </li>
            <li>
              <Link to="/terms/privacy">プライバシーポリシー</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
