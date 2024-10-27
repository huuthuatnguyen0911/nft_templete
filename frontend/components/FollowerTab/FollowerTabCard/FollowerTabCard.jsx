import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import styles from "./followerTabCard.module.css";

export default function FollowerTabCard({ item, index }) {
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    setFollowing(!following);
  };
  return (
    <div className={styles.FollowerTabCard}>
      <div className={styles.FollowerTabCard_rank}>
        <p>
          # {index + 1} <span>🥇</span>
        </p>
      </div>

      <div className={styles.FollowerTabCard_box}>
        <div className={styles.FollowerTabCard_box_img}>
          <Image
            className={styles.FollowerTabCard_box_img_img}
            src={item.background}
            alt="profile background"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className={styles.FollowerTabCard_box_profile}>
          <Image
            className={styles.FollowerTabCard_box_profile_img}
            alt="profile picture"
            width={50}
            height={50}
            src={item.user}
          />
        </div>

        <div className={styles.FollowerTabCard_box_info}>
          <div className={styles.FollowerTabCard_box_info_name}>
            <h4>
              Huu Thuat{" "}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>12 POL</p>
          </div>

          <div className={styles.FollowerTabCard_box_info_following}>
            {following ? (
              <a onClick={() => followMe()}>
                Follow{" "}
                <span>
                  <TiTick />
                </span>
              </a>
            ) : (
              <a onClick={() => followMe()}>Following</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
