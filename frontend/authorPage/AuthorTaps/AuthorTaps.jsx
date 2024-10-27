import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

import styles from "./authorTaps.module.css";
import images from "../../img";

export default function AuthorTaps({
  setCollectiables,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}) {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = () => {
    setOpenList(!openList);
  };

  const handleSelect = (item) => {
    setSelectedMenu(item);
    setOpenList(false);
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    const states = {
      Collectiables: {
        collectiables: true,
        created: false,
        like: false,
        follower: false,
        following: false,
      },
      Created: {
        collectiables: false,
        created: true,
        like: false,
        follower: false,
        following: false,
      },
      Liked: {
        collectiables: false,
        created: false,
        like: true,
        follower: false,
        following: false,
      },
      Following: {
        collectiables: false,
        created: false,
        like: false,
        follower: false,
        following: true,
      },
      Followers: {
        collectiables: false,
        created: false,
        like: false,
        follower: true,
        following: false,
      },
    };

    const { collectiables, created, like, follower, following } =
      states[btnText] || {};

    setCollectiables(collectiables);
    setCreated(created);
    setLike(like);
    setFollower(follower);
    setFollowing(following);
  };

  return (
    <div className={styles.AuthorTaps}>
      <div className={styles.AuthorTaps_box}>
        <div className={styles.AuthorTaps_box_left}>
          <div className={styles.AuthorTaps_box_left_btn}>
            <button
              className={`${activeBtn == 1 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Collectiables{" "}
            </button>
            <button
              className={`${activeBtn == 2 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Created{" "}
            </button>
            <button
              className={`${activeBtn == 3 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Liked{" "}
            </button>
            <button
              className={`${activeBtn == 4 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Following{" "}
            </button>
            <button
              className={`${activeBtn == 5 ? styles.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Followers{" "}
            </button>
          </div>
        </div>

        <div className={styles.AuthorTaps_box_right}>
          <div
            className={styles.AuthorTaps_box_right_para}
            onClick={() => openDropDownList()}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className={styles.AuthorTaps_box_right_list}>
              {listArray.map((item, index) => (
                <div
                  className={styles.AuthorTaps_box_right_list_item}
                  onClick={() => handleSelect(item)}
                  key={index + 1}
                >
                  <p>{item}</p>
                  <span>{selectedMenu == item && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
