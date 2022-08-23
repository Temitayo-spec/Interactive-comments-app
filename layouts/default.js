/* eslint-disable quotes */
import Head from "next/head";
import styles from "../styles/default.module.css";

const Default = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>CrowFunding</title>
      <link rel="icon" href="/images/favicon-32x32.png" />
    </Head>
    {children}
  </div>
);

export default Default;
