import React from "react";
import Image from "next/image";

import styles from "./nftTabs.module.css";
import images from "../../img";

export default function NFTTabs({ dataTab, icon }) {
  return (
    <div className={styles.NFTTabs}>
      {dataTab.map((tab, index) => {
        return (
          <div key={index + 1} className={styles.NFTTabs_box}>
            <Image
              src={tab}
              alt="icon"
              width={40}
              height={40}
              className={styles.NFTTabs_box_img}
            />
            <div className={styles.NFTTabs_box_info}>
              <span>
                Offer by $770 by <span>Huu Thuat</span> {icon}
              </span>
              <small>December 14 - 4:12 PM</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}
