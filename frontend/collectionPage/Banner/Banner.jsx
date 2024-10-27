import React from "react";
import Image from "next/image";

import styles from "./banner.module.css";
import images from "../../img";

export default function Banner({ bannerImage }) {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_img}>
        <Image
          src={bannerImage}
          objectFit="cover"
          alt="background"
          width={1600}
          height={250}
        />
      </div>

      <div className={styles.banner_img_mobile}>
        <Image
          src={bannerImage}
          objectFit="cover"
          alt="background"
          width={1600}
          height={900}
        />
      </div>
    </div>
  );
}
