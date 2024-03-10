import React from "react";
import * as styles from "./Heading.module.css";

const Heading = (props) => {
  if (
    props.size !== "xxl" &&
    props.size !== "xl" &&
    props.size !== "l" &&
    props.size !== "m" &&
    props.size !== "s" &&
    props.size !== "xs" &&
    props.size !== "xxs" &&
    props.size !== undefined
  ) {
    throw new Error("見出しの文字サイスの値が不適切です。");
  }


  switch (props.level) {
    case 1:
      return <h1 className={`${styles.heading} ${props.size?styles[props.size]:styles.l}`}>{props.children}</h1>;
    case 2:
      return <h2 className={`${styles.heading} ${props.size?styles[props.size]:styles.m}`}>{props.children}</h2>;
    case 3:
      return <h3 className={`${styles.heading} ${props.size?styles[props.size]:styles.s}`}>{props.children}</h3>;
    case 4:
      return <h4 className={`${styles.heading} ${props.size?styles[props.size]:styles.xs}`}>{props.children}</h4>;
    case 5:
      return <h5 className={`${styles.heading} ${props.size?styles[props.size]:styles.xxs}`}>{props.children}</h5>;
    case 6:
      return <h6 className={`${styles.heading} ${props.size?styles[props.size]:styles.xxs}`}>{props.children}</h6>;
    default:
      throw new Error("見出しレベルが指定されていないか，値が不適切です。");
  }
};

export { Heading };
