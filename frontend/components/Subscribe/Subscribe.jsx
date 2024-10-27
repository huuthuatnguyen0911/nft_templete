import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

import styles from "./subscribe.module.css";
import images from "../../img";

export default function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <div className={styles.subscribe_box}>
        <div className={styles.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
            Subcribe to our super-exclusive drop list and be the first to know
            abour upcoming drops
          </p>
          <div className={styles.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>
          <div className={styles.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>

          <div className={styles.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={styles.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={styles.subscribe_box_right}>
          <Image src={images.update} alt="subscribe" width={800} height={600} />
        </div>
      </div>
    </div>
  );
}
