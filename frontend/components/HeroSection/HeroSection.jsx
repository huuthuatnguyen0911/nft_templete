import React from "react";
import Image from "next/image";

import styles from "./herosection.module.css";
import { Button } from "../componentIndex";
import images from "../../img";

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSection_box}>
        <div className={styles.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={styles.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
