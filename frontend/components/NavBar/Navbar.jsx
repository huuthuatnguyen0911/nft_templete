import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../componentIndex";
import styles from "./navbar.module.css";
import images from "../../img";

export default function Navbar() {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;

    if (btnText === "Discover") {
      setDiscover(!discover);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setHelp(!help);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_container_left}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src={images.logo}
                alt="NFT MARKET PLACE"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className={styles.navbar_container_left_box_input}>
            <div className={styles.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={styles.search_icon} />
            </div>
          </div>
        </div>
        {/* END OF LEFT SECTION */}
        <div className={styles.navbar_container_right}>
          <div className={styles.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {/* Discover menu */}
            {discover && (
              <div className={styles.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER */}
          <div className={styles.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {/* Help center menu */}
            {help && (
              <div className={styles.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification */}
          <div className={styles.navbar_container_right_notify}>
            <MdNotifications
              className={styles.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={styles.navbar_container_right_button}>
            <Button
              btnName="Create"
              handleClick={() => (window.location.href = "/upload-nft")}
            />
          </div>

          {/* USER PROFILE */}
          <div className={styles.navbar_container_right_profile_box}>
            <div className={styles.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={styles.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON */}
          <div className={styles.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={styles.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={styles.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
}
