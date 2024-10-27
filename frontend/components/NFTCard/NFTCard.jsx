import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import Image from "next/image";

import styles from "./nftCard.module.css";
import images from "../../img";

export default function NFTCard() {
  const featureArray = [
    {
      background: images.nft_image_1,
    },
    {
      background: images.nft_image_2,
    },
    {
      background: images.nft_image_3,
    },
    {
      background: images.nft_image_2,
    },
  ];

  const [like, setLike] = useState(false);

  const likeNFT = () => {
    setLike(!like);
  };
  return (
    <div className={styles.nftCard}>
      {featureArray.map((item, index) => (
        <div className={styles.nftCard_box} key={index + 1}>
          <div className={styles.nftCard_box_img}>
            <Image
              src={item.background}
              alt="NFT"
              width={600}
              height={600}
              className={styles.nftCard_box_img_img}
            />
          </div>

          <div className={styles.nftCard_box_update}>
            <div className={styles.nftCard_box_update_left}>
              <div
                className={styles.nftCard_box_update_left_like}
                onClick={() => likeNFT()}
              >
                {like ? (
                  <AiFillHeart
                    className={styles.nftCard_box_update_left_like_icon}
                  />
                ) : (
                  <AiOutlineHeart />
                )}{" "}
                22
              </div>
            </div>

            <div className={styles.nftCard_box_update_right}>
              <div className={styles.nftCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
          </div>

          <div className={styles.nftCard_box_update_details}>
            <div className={styles.nftCard_box_update_details_price}>
              <div className={styles.nftCard_box_update_details_price_box}>
                <h4>Clone #17373</h4>
                <div
                  className={styles.nftCard_box_update_details_price_box_box}
                >
                  <div
                    className={styles.nftCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>0.01 POL</p>
                  </div>
                  <div
                    className={
                      styles.nftCard_box_update_details_price_box_stock
                    }
                  >
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.nftCard_box_update_details_category}>
              <BsImage />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
