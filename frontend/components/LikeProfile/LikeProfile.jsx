import React from "react";
import Image from "next/image";

import styles from "./likeProfile.module.css";
import images from "../../img";

export default function LikeProfile() {
  const imageArray = [1, 2, 3, 4];
  return (
    <div className={styles.like}>
      {imageArray.map((image, index) => (
        <div className={styles.like_box} key={index + 1}>
          <Image
            src={images.user1}
            alt="like"
            width={15}
            height={15}
            className={styles.like_box_img}
          />
        </div>
      ))}
    </div>
  );
}
