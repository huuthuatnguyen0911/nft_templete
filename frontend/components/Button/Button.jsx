import React from "react";

import styles from "./Button.module.css";

export default function Button({ btnName, handleClick, icon, classStyle }) {
  return (
    <div className={styles.box}>
      <button
        className={`${styles.button} ${classStyle}`}
        onClick={() => handleClick()}
      >
        {icon} {btnName}
      </button>
    </div>
  );
}
