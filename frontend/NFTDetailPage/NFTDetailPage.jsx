import React from "react";

import { NFTDescription, NFTDetailsImg, NFTTabs } from "./index";
import styles from "./nftDetailPage.module.css";

export default function NFTDetailPage() {
  return (
    <div className={styles.NFTDetailsPage}>
      <div className={styles.NFTDetailsPage_box}>
        <NFTDetailsImg />
        <NFTDescription />
      </div>
    </div>
  );
}
