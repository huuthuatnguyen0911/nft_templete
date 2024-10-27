import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

import styles from "./nftDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentIndex";
import NFTTabs from "../NFTTabs/NFTTabs";

export default function NFTDescription() {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(false);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(true);

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];

  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];

  const ownerArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
  ];

  const openSocial = () => {
    setSocial(!social);
  };

  const openNFTMenu = () => {
    setNFTMenu(!NFTMenu);
  };

  const openTabs = (e) => {
    if (e.target.innerText === "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (e.target.innerText === "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    } else if (e.target.innerText === "Owner") {
      setHistory(false);
      setProvanance(false);
      setOwner(true);
    }
  };

  return (
    <div className={styles.NFTDescription}>
      <div className={styles.NFTDescription_box}>
        <div className={styles.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={styles.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={styles.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />
            {social && (
              <div className={styles.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialLinkedin /> Linkedin
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> Youtube
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
              </div>
            )}

            <BsThreeDots
              className={styles.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />
            {NFTMenu && (
              <div className={styles.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change Price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report abouse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>

        <div className={styles.NFTDescription_box_profile}>
          <h1>BeuX #23452</h1>
          <div className={styles.NFTDescription_box_profile_box}>
            <div className={styles.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={styles.NFTDescription_box_profile_box_left_img}
              />
              <div className={styles.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span>
                  Huu Thuat <MdVerified />
                </span>
              </div>
            </div>

            <div className={styles.NFTDescription_box_profile_box_right}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={styles.NFTDescription_box_profile_box_left_img}
              />
              <div className={styles.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small> <br />
                <span>
                  Huu Thuat <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={styles.NFTDescription_box_profile_biding}>
            <p>
              <MdVerified /> <span>Auction ending in:</span>
            </p>

            <div className={styles.NFTDescription_box_profile_biding_box_timer}>
              <div
                className={
                  styles.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>2</p>
                <span>Days</span>
              </div>
              <div
                className={
                  styles.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>22</p>
                <span>hours</span>
              </div>
              <div
                className={
                  styles.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>45</p>
                <span>minutes</span>
              </div>
              <div
                className={
                  styles.NFTDescription_box_profile_biding_box_timer_item
                }
              >
                <p>22</p>
                <span>seconds</span>
              </div>
            </div>

            <div className={styles.NFTDescription_box_profile_biding_box_price}>
              <div
                className={
                  styles.NFTDescription_box_profile_biding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  1.00 ETH <span>( = $3,221.22 )</span>
                </p>
              </div>

              <span>[96 in stock]</span>
            </div>

            <div
              className={styles.NFTDescription_box_profile_biding_box_button}
            >
              <Button
                btnName="Place a bid"
                handleClick={() => {}}
                className={styles.button}
                icon=<FaWallet />
              />
              <Button
                btnName="Make offer"
                handleClick={() => {}}
                className={styles.button}
                icon=<FaPercentage />
              />
            </div>

            <div className={styles.NFTDescription_box_profile_biding_box_tabs}>
              <button onClick={(e) => openTabs(e)}>Bid History</button>
              <button onClick={(e) => openTabs(e)}>Provanance</button>
              <button onClick={(e) => openTabs(e)}>Owner</button>
            </div>

            {history && (
              <div
                className={styles.NFTDescription_box_profile_biding_box_card}
              >
                <NFTTabs dataTab={historyArray} icon=<MdVerified /> />
              </div>
            )}
            {provanance && (
              <div
                className={styles.NFTDescription_box_profile_biding_box_card}
              >
                <NFTTabs dataTab={provananceArray} icon=<MdVerified /> />
              </div>
            )}
            {owner && (
              <div
                className={styles.NFTDescription_box_profile_biding_box_card}
              >
                <NFTTabs dataTab={ownerArray} icon=<MdVerified /> />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
