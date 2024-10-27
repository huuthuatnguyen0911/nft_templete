import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./sliderCard.module.css";
import images from "../../../img";
import { LikeProfile } from "../../componentIndex";

export default function SliderCard({ el, index }) {
  return (
    <motion.div className={styles.sliderCard}>
      <div className={styles.sliderCard_box}>
        <motion.div className={styles.sliderCard_box_img}>
          <Image
            src={el.background}
            alt="sliderCard"
            width={500}
            height={300}
            objectFit="cover"
            className={styles.sliderCard_box_img_img}
          />
        </motion.div>
        <div className={styles.sliderCard_box_title}>
          <p>NFT Video #1245</p>
          <div className={styles.sliderCard_box_title_like}>
            {/* <LikeProfile /> */}
            <small>1 of 100</small>
          </div>
        </div>

        <div className={styles.sliderCard_box_price}>
          <div className={styles.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>1.00 POL</p>
          </div>

          <div className={styles.sliderCard_box_price_time}>
            <small>Remaining time</small>
            <p>3h : 15m : 20s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
