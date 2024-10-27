import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

import styles from "./category.module.css";
import images from "../../img";

export default function Category() {
  const categoryArray = [
    {
      background: images.creatorbackground1,
    },
    {
      background: images.creatorbackground2,
    },
    {
      background: images.creatorbackground3,
    },
    {
      background: images.creatorbackground4,
    },
    {
      background: images.creatorbackground5,
    },
    {
      background: images.creatorbackground6,
    },
  ];
  return (
    <div className={styles.box_category}>
      <div className={styles.category}>
        {categoryArray.map((item, index) => (
          <div className={styles.category_box} key={index + 1}>
            <Image
              src={item.background}
              className={styles.category_box_img}
              alt="bg image"
              width={350}
              height={150}
              objectFit="cover"
            />
            <div className={styles.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={styles.category_box_title_info}>
                <h4>Entertainment</h4>
                <small>1995 NFTs</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
