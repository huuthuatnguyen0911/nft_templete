import React, { useEffect, useState } from "react";
import Image from "next/image";

import { MdVerified } from "react-icons/md";

import styles from "./daysCollection.module.css";
import images from "../../../img";

export default function DaysComponent({ item, index }) {
  return (
    <div className={styles.daysComponent}>
      <div className={styles.daysComponent_box}>
        <div className={styles.daysComponent_box_img}>
          <Image
            src={item.background}
            alt="profile bg"
            width={500}
            height={300}
            className={styles.daysComponent_box_img_img}
            objectFit="cover"
          />
        </div>

        <div className={styles.daysComponent_box_profile}>
          <Image
            src={images.creatorbackground2}
            alt="profile bg"
            width={200}
            height={200}
            className={styles.daysComponent_box_img_1}
            objectFit="cover"
          />
          <Image
            src={item.background}
            alt="profile bg"
            width={200}
            height={200}
            className={styles.daysComponent_box_img_2}
            objectFit="cover"
          />
          <Image
            src={images.creatorbackground6}
            alt="profile bg"
            width={200}
            height={200}
            className={styles.daysComponent_box_img_3}
            objectFit="cover"
          />
        </div>

        <div className={styles.daysComponent_box_title}>
          <h2>Amazing Collections</h2>
          <div className={styles.daysComponent_box_title_info}>
            <div className={styles.daysComponent_box_title_info_profile}>
              <Image
                src={item.user}
                alt="profile bg"
                width={30}
                height={30}
                objectFit="cover"
                className={styles.daysComponent_box_title_info_profile_img}
              />
              <p>
                Creator{" "}
                <span>
                  Huu Thuat{" "}
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={styles.daysComponent_box_title_info_profile}>
              <small>1.22 POL</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
