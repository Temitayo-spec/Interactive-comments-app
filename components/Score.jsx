/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React from "react";
import styles from "../styles/score.module.css";

const Score = ({ each }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.score_inner}>
        <img src="/images/icon-plus.svg" alt="plus_svg" />
        <p>{each.score}</p>
        <img src="/images/icon-minus.svg" alt="plus_svg" />
      </div>
    </div>
  );
};

export default Score;
