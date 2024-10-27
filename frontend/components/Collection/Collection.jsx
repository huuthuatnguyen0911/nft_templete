import React, { useEffect, useState } from "react";
import {
  BsFillAlarmFill,
  BsCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

import styles from "./collection.module.css";
import DaysComponent from "./DaysComponent/DaysComponent";
import images from "../../img";

export default function Collection() {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

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
  const followingArray = [
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
  const newsArray = [
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

  const openPopular = () => {
    setPopular(true);
    setFollowing(false);
    setNews(false);
  };

  const openFollowers = () => {
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
    <div className={styles.collection}>
      <div className={styles.collection_title}>
        <h2>Top list Creators</h2>
        <div className={styles.collection_collections}>
          <div className={styles.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill />
              Last 24 hours
            </button>
            <button onClick={() => openFollowers()}>
              <BsCalendar3 />
              Last 7 days
            </button>
            <button onClick={() => openPopular()}>
              <BsCalendarDateFill />
              Last 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={styles.collection_box}>
          {CardArray.map((item, index) => (
            <DaysComponent key={index + 1} item={item} index />
          ))}
        </div>
      )}

      {following && (
        <div className={styles.collection_box}>
          {followingArray.map((item, index) => (
            <DaysComponent key={index + 1} item={item} />
          ))}
        </div>
      )}

      {news && (
        <div className={styles.collection_box}>
          {newsArray.map((item, index) => (
            <DaysComponent key={index + 1} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
