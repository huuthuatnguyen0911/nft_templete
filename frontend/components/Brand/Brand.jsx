import React from "react";
import Image from "next/image";

import styles from "./brand.module.css";
import images from "../../img";
import { Button } from "../componentIndex";

export default function Brand() {
  return (
    <div className={styles.brand}>
      <div className={styles.brand_box}>
        <div className={styles.brand_box_left}>
          <Image
            src={images.logo}
            alt="logo"
            width={100}
            height={100}
            className={styles.brand_box_left_logo}
          />
          <h1>Earn free crypto with Ciscrypt</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={styles.brand_box_left_btn}>
            <Button btnName="Create" handleClick={() => {}} />
            <Button btnName="Discover" handleClick={() => {}} />
          </div>
        </div>

        <div className={styles.brand_box_right}>
          <Image src={images.earn} alt="brand" width={800} height={600} />
        </div>
      </div>
    </div>
  );
}
