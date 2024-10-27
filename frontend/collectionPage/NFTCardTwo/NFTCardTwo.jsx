import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

import styles from "./nftCardTwo.module.css";
import { LikeProfile } from "../../components/componentIndex";

export default function NFTCardTwo({ NFTData }) {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    setLike(!like);
    like ? setLikeInc(likeInc - 1) : setLikeInc(likeInc + 1);
  };

  return (
    <div className={styles.NFTCardTwo}>
      {NFTData.map((nft, index) => (
        <div className={styles.NFTCardTwo_box} key={index + 1}>
          <div className={styles.NFTCardTwo_box_like}>
            <div className={styles.NFTCardTwo_box_like_box}>
              <div className={styles.NFTCardTwo_box_like_box_box}>
                <BsImage className={styles.NFTCardTwo_box_like_box_box_icon} />
                <p onClick={() => likeNFT()}>
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}{" "}
                  <span>{likeInc + 1}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.NFTCardTwo_box_img}>
            <Image
              src={nft}
              alt="NFt"
              width={500}
              height={500}
              objectFit="cover"
              className={styles.NFTCardTwo_box_img_img}
            />
          </div>

          <div className={styles.NFTCardTwo_box_info}>
            <div className={styles.NFTCardTwo_box_info_left}>
              <LikeProfile />
              <p>Clone #{index + 1}</p>
            </div>
            <small>4{index + 2}</small>
          </div>

          <div className={styles.NFTCardTwo_box_price}>
            <div className={styles.NFTCardTwo_box_price_box}>
              <small>Current Bid</small>
              <p>1{index + 5}.000 ETH</p>
            </div>
            <p className={styles.NFTCardTwo_box_price_stock}>
              <MdTimer /> <span>{index + 1} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
