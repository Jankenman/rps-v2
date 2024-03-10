import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout";
import { Heading } from "../components/Heading";
import * as utilStyles from "../components/util.module.css";
import * as styles from "./index.module.css";
import { Footer } from "../components/Footer";

// const apps = [
//   {
//     name: "不規則変化動詞",
//     description: "主な不規則変化動詞60語をここから学習できます。",
//     path: "/irregular-verbs/",
//   },
//   {
//     name: "英語WPM測定",
//     description: "英語を話してWPMを測定しましょう。",
//     path: "/en-wpm/",
//   },
// ];

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <main className={`${utilStyles.wrapper} ${styles.mainContainer}`}>
          <Heading level={1}>RPS Apps</Heading>
          <Heading level={2}>アプリ一覧</Heading>
          Coming Soon...
          {/* <ul className={styles.appGrid}>
            {apps.map((val) => (
              <li>
                <Link to={val.path} className={styles.appLink}>
                  <span className={styles.appname}>{val.name}</span>
                  {val.description}
                </Link>
              </li>
            ))}
          </ul> */}
        </main>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>RPS Apps</title>;
