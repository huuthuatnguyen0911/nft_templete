import React from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

import styles from "./searchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBar_box}>
        <BsSearch className={styles.SearchBar_box_icon} />
        <input type="text" placeholder="Type your keyword ..." name="" id="" />
        <BsArrowRight className={styles.SearchBar_box_icon} />
      </div>
    </div>
  );
}
