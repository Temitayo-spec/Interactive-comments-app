/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React from "react";
import styles from "../styles/reply.module.css";
import Content from "./Content";
import Score from "./Score";
import Title from "./Title";

const Reply = ({ reply }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Score each={reply} />
        <div className={styles.rhs}>
          <Title each={reply} />
          <Content each={reply} />
        </div>
      </div>
    </div>
  );
};

export default Reply;
