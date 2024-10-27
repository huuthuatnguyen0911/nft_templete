import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";

import styles from "./followerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import images from "../../img";

export default function FollowerTab() {
  const CardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const FollowingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
  ];
  const NewsArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    setPopular(true);
    setFollowing(false);
    setNews(false);
  };

  const openFollower = () => {
    setPopular(false);
    setFollowing(true);
    setNews(false);
  };

  const openNews = () => {
    setPopular(false);
    setFollowing(false);
    setNews(true);
  };

  return (
    <div className={styles.followerTab}>
      <div className={styles.followerTab_title}>
        <h2>Top Creator Lists ...</h2>
        <div className={styles.followerTab_tabs}>
          <div className={styles.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={styles.followerTab_box}>
          {CardArray.map((item, index) => (
            <FollowerTabCard key={index + 1} item={item} index={index} />
          ))}
        </div>
      )}

      {following && (
        <div className={styles.followerTab_box}>
          {FollowingArray.map((item, index) => (
            <FollowerTabCard key={index + 1} item={item} index={index} />
          ))}
        </div>
      )}

      {news && (
        <div className={styles.followerTab_box}>
          {NewsArray.map((item, index) => (
            <FollowerTabCard key={index + 1} item={item} index={index} />
          ))}
        </div>
      )}

      <div className={styles.followerTab_member}>
        <div className={styles.followerTab_member_box}>
          <a href="">Show me more</a>
          <a href="">Become author</a>
        </div>
      </div>
    </div>
  );
}
