import React from "react";

import styles from "./audioLive.module.css";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";
import AudioCard from "./AudioCard/AudioCard";

export default function AudioLive() {
  return (
    <div className={styles.audioLive}>
      <div className={styles.audioLive_box}>
        <div className={styles.audioLive_box_left}>
          <AudioCard />
          <AudioCard />
        </div>
        <div className={styles.audioLive_box_right}>
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
}
