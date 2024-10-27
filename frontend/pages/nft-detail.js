import React from "react";

import { Button, Category, Brand } from "../components/componentIndex";

import { NFTDescription, NFTDetailsImg, NFTTabs } from "../NFTDetailPage/index";

// import styles from "../styles/";
import NFTDetailPage from "../NFTDetailPage/NFTDetailPage";

export default function NFTDetail() {
  return (
    <div>
      <NFTDetailPage />
      <Category />
      <Brand />
    </div>
  );
}
