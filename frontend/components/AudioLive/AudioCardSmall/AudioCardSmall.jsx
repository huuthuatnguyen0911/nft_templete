import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

import styles from "./audioCardSmall.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile";

export default function AudioCardSmall() {
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    setPlay(!play);
  };

  return (
    <div className={styles.audioPlayer}>
      <div className={styles.audioPlayer_box}>
        <Image
          src={images.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className={styles.audioPlayer_box_img}
        />

        <div className={styles.audioPlayer_box_info}>
          <h4>NFT music #1142</h4>
          <div className={styles.audioPlayer_box_info_box}>
            <LikeProfile />

            <div className={styles.audioPlayer_box_info_box_price}>
              <small>Price</small>
              <p>1.00 POL</p>
            </div>
          </div>
        </div>

        <div
          className={styles.audioPlayer_box_playBtn}
          onClick={() => playMusic()}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
}
