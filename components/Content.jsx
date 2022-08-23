/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from "react";
import styles from "../styles/content.module.css";

const Content = ({ each }) => (
  <div className={styles.wrapper}>
    <p>
      <span>
        {each.replyingTo && (
        <>
          @
          {' '}
          {each?.replyingTo}
          {' '}
        </>
        )}
      </span>
      {each.content}
    </p>
  </div>
);

export default Content;
