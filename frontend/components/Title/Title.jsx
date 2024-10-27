import React from "react";

import styles from "./title.module.css";

export default function Title({ heading, paragraph }) {
  return (
    <div className={styles.title}>
      <div className={styles.title_box}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
