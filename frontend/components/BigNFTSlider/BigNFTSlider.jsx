import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import { AiFillFire, AiFillHeart } from "react-icons/ai";

import styles from "./bignftslider.module.css";
import images from "../../img";
import Button from "../Button/Button";

export default function BigNFTSlider() {
  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Nguyen Huu Thuat",
      collection: "GYm",
      price: "0.2 POL",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        day: 2,
        hours: 2,
        minutes: 30,
        seconds: 30,
      },
    },
    {
      title: "NHT NFT",
      id: 2,
      name: "Nguyen Huu Thuat",
      collection: "Art",
      price: "0.5 POL",
      like: 500,
      image: images.user1,
      nftImage: images.nft_image_2,
      time: {
        day: 2,
        hours: 2,
        minutes: 30,
        seconds: 30,
      },
    },
    {
      title: "Marketplace NFT",
      id: 3,
      name: "Vo Thanh Lat",
      collection: "Picture",
      price: "2 POL",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_3,
      time: {
        day: 2,
        hours: 2,
        minutes: 30,
        seconds: 30,
      },
    },
  ];

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  // useEffect(() => {
  //   inc();
  // }, []);
  return (
    <div className={styles.bigNFTSlider}>
      <div className={styles.bigNFTSlider_box}>
        {/* left section */}
        <div className={styles.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={styles.bigNFTSlider_box_left_creator}>
            <div className={styles.bigNFTSlider_box_left_creator_profile}>
              <Image
                src={sliderData[idNumber].image}
                alt="profile"
                width={50}
                height={50}
                className={styles.bigNFTSlider_box_left_creator_profile_img}
              />
              <div
                className={styles.bigNFTSlider_box_left_creator_profile_info}
              >
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={styles.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={styles.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={styles.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={styles.bigNFTSlider_box_left_bidding}>
            <div className={styles.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$,221,21</span>
              </p>
            </div>

            <p className={styles.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={styles.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={styles.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={styles.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.day}</p>
                <span>Days</span>
              </div>

              <div
                className={styles.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={styles.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Minutes</span>
              </div>

              <div
                className={styles.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>Seconds</span>
              </div>
            </div>

            <div className={styles.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={styles.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={styles.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLines
              className={styles.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        {/* right section */}
        <div className={styles.bigNFTSlider_box_right}>
          <div className={styles.bigNFTSlider_box_right_box}>
            <Image
              className={styles.bigNFTSlider_box_right_box_img}
              src={sliderData[idNumber].nftImage}
              alt="NFT image"
            />
            <div className={styles.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
